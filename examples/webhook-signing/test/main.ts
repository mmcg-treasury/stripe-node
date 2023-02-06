#!/usr/bin/env npx ts-node
/* eslint-disable prettier/prettier */

import env from 'dotenv';
import * as fs from 'fs';
import * as child_process from 'child_process';
import Stripe from 'stripe';
import * as http from 'http';

const path = process.argv[2];

if (!path || !fs.statSync(path)) {
  console.error('Please specify the test application path');
  process.exit(1);
}

child_process.execSync('npm install', {
  cwd: path,
});

const server = child_process.exec('./main.ts', {
  cwd: path,
});
server.stdout.pipe(process.stdout);
server.stderr.pipe(process.stdout);

const serverReady = new Promise<string>((resolve, reject) => {
  server.stdout.on('data', (data) => {
    const match = /Webhook endpoint available at (.*)/gm.exec(data);
    if (match) {
      resolve(match[1]);
    }
  });
  server.on('error', (m) => reject(m));
});

env.config({
  path: `${path}/.env`,
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

const payload = Buffer.from(
  JSON.stringify(
    {
      id: 'evt_123',
      type: 'charge.succeeded',
      object: 'event',
      data: {
        object: {
          id: 'ch_123',
        },
      },
    },
    null,
    2
  )
);

const signatureHeader = stripe.webhooks.generateTestHeaderString({
  payload: payload.toString(),
  secret: webhookSecret,
});

const sendTestRequest = async (url: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const request = http.request(
      url,
      {
        method: 'POST',
        headers: {
          'Stripe-Signature': signatureHeader,
          'Content-Length': payload.length,
          'Content-Type': 'application/json',
        },
      },
      (res) => {
        const chunks = [];
        res.on('data', (d) => {
          chunks.push(d);
        });
        res.on('end', () => {
          resolve(Buffer.concat(chunks).toString());
        });
        res.on('error', (e) => reject(e));

        if (res.statusCode != 200) {
          reject(new Error('Non 200 status code'));
        }
      }
    );
    request.write(payload);
  });
};

(async () => {
  try {
    console.log(`Waiting for server to start`);
    const url = await serverReady;
    console.log(`Server ready at ${url}`);
    const response = await sendTestRequest(url);
    if (response != '{"received":true}') {
      throw new Error(`Unexpected response ${response}`);
    }
    console.log('Test succeeded');
  } catch (e) {
    console.error(e);
  } finally {
    server.kill();
  }
})().catch(console.log);

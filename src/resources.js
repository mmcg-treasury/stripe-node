// File generated from our OpenAPI spec
import resourceNamespace from './ResourceNamespace.js';

export const Accounts = require('./resources/Accounts');
export const Account = require('./resources/Accounts');
export const AccountLinks = require('./resources/AccountLinks');
export const ApplePayDomains = require('./resources/ApplePayDomains');
export const ApplicationFees = require('./resources/ApplicationFees');
export const Balance = require('./resources/Balance');
export const BalanceTransactions = require('./resources/BalanceTransactions');
export const Charges = require('./resources/Charges');
export const CountrySpecs = require('./resources/CountrySpecs');
export const Coupons = require('./resources/Coupons');
export const CreditNotes = require('./resources/CreditNotes');
export const Customers = require('./resources/Customers');
export const Disputes = require('./resources/Disputes');
export const EphemeralKeys = require('./resources/EphemeralKeys');
export const Events = require('./resources/Events');
export const ExchangeRates = require('./resources/ExchangeRates');
export const Files = require('./resources/Files');
export const FileLinks = require('./resources/FileLinks');
export const Invoices = require('./resources/Invoices');
export const InvoiceItems = require('./resources/InvoiceItems');
export const Mandates = require('./resources/Mandates');
export const OAuth = require('./resources/OAuth');
export const Orders = require('./resources/Orders');
export const PaymentIntents = require('./resources/PaymentIntents');
export const PaymentLinks = require('./resources/PaymentLinks');
export const PaymentMethods = require('./resources/PaymentMethods');
export const Payouts = require('./resources/Payouts');
export const Plans = require('./resources/Plans');
export const Prices = require('./resources/Prices');
export const Products = require('./resources/Products');
export const PromotionCodes = require('./resources/PromotionCodes');
export const Quotes = require('./resources/Quotes');
export const Refunds = require('./resources/Refunds');
export const Reviews = require('./resources/Reviews');
export const SetupAttempts = require('./resources/SetupAttempts');
export const SetupIntents = require('./resources/SetupIntents');
export const ShippingRates = require('./resources/ShippingRates');
export const Skus = require('./resources/SKUs');
export const Sources = require('./resources/Sources');
export const Subscriptions = require('./resources/Subscriptions');
export const SubscriptionItems = require('./resources/SubscriptionItems');
export const SubscriptionSchedules = require('./resources/SubscriptionSchedules');
export const TaxCodes = require('./resources/TaxCodes');
export const TaxRates = require('./resources/TaxRates');
export const Tokens = require('./resources/Tokens');
export const Topups = require('./resources/Topups');
export const Transfers = require('./resources/Transfers');
export const WebhookEndpoints = require('./resources/WebhookEndpoints');
export const Apps = resourceNamespace('apps', {
  Secrets: require('./resources/Apps/Secrets'),
});
export const BillingPortal = resourceNamespace('billingPortal', {
  Configurations: require('./resources/BillingPortal/Configurations'),
  Sessions: require('./resources/BillingPortal/Sessions'),
});
export const Checkout = resourceNamespace('checkout', {
  Sessions: require('./resources/Checkout/Sessions'),
});
export const FinancialConnections = resourceNamespace('financialConnections', {
  Accounts: require('./resources/FinancialConnections/Accounts'),
  Sessions: require('./resources/FinancialConnections/Sessions'),
});
export const Identity = resourceNamespace('identity', {
  VerificationReports: require('./resources/Identity/VerificationReports'),
  VerificationSessions: require('./resources/Identity/VerificationSessions'),
});
export const Issuing = resourceNamespace('issuing', {
  Authorizations: require('./resources/Issuing/Authorizations'),
  Cards: require('./resources/Issuing/Cards'),
  Cardholders: require('./resources/Issuing/Cardholders'),
  Disputes: require('./resources/Issuing/Disputes'),
  Transactions: require('./resources/Issuing/Transactions'),
});
export const Radar = resourceNamespace('radar', {
  EarlyFraudWarnings: require('./resources/Radar/EarlyFraudWarnings'),
  ValueLists: require('./resources/Radar/ValueLists'),
  ValueListItems: require('./resources/Radar/ValueListItems'),
});
export const Reporting = resourceNamespace('reporting', {
  ReportRuns: require('./resources/Reporting/ReportRuns'),
  ReportTypes: require('./resources/Reporting/ReportTypes'),
});
export const Sigma = resourceNamespace('sigma', {
  ScheduledQueryRuns: require('./resources/Sigma/ScheduledQueryRuns'),
});
export const Terminal = resourceNamespace('terminal', {
  Configurations: require('./resources/Terminal/Configurations'),
  ConnectionTokens: require('./resources/Terminal/ConnectionTokens'),
  Locations: require('./resources/Terminal/Locations'),
  Readers: require('./resources/Terminal/Readers'),
});
export const TestHelpers = resourceNamespace('testHelpers', {
  Customers: require('./resources/TestHelpers/Customers'),
  Refunds: require('./resources/TestHelpers/Refunds'),
  TestClocks: require('./resources/TestHelpers/TestClocks'),
  Issuing: resourceNamespace('issuing', {
    Cards: require('./resources/TestHelpers/Issuing/Cards'),
  }),
  Terminal: resourceNamespace('terminal', {
    Readers: require('./resources/TestHelpers/Terminal/Readers'),
  }),
  Treasury: resourceNamespace('treasury', {
    InboundTransfers: require('./resources/TestHelpers/Treasury/InboundTransfers'),
    OutboundPayments: require('./resources/TestHelpers/Treasury/OutboundPayments'),
    OutboundTransfers: require('./resources/TestHelpers/Treasury/OutboundTransfers'),
    ReceivedCredits: require('./resources/TestHelpers/Treasury/ReceivedCredits'),
    ReceivedDebits: require('./resources/TestHelpers/Treasury/ReceivedDebits'),
  }),
});
export const Treasury = resourceNamespace('treasury', {
  CreditReversals: require('./resources/Treasury/CreditReversals'),
  DebitReversals: require('./resources/Treasury/DebitReversals'),
  FinancialAccounts: require('./resources/Treasury/FinancialAccounts'),
  InboundTransfers: require('./resources/Treasury/InboundTransfers'),
  OutboundPayments: require('./resources/Treasury/OutboundPayments'),
  OutboundTransfers: require('./resources/Treasury/OutboundTransfers'),
  ReceivedCredits: require('./resources/Treasury/ReceivedCredits'),
  ReceivedDebits: require('./resources/Treasury/ReceivedDebits'),
  Transactions: require('./resources/Treasury/Transactions'),
  TransactionEntries: require('./resources/Treasury/TransactionEntries'),
});
export default {
  Accounts,
  Account,
  AccountLinks,
  ApplePayDomains,
  ApplicationFees,
  Balance,
  BalanceTransactions,
  Charges,
  CountrySpecs,
  Coupons,
  CreditNotes,
  Customers,
  Disputes,
  EphemeralKeys,
  Events,
  ExchangeRates,
  Files,
  FileLinks,
  Invoices,
  InvoiceItems,
  Mandates,
  OAuth,
  Orders,
  PaymentIntents,
  PaymentLinks,
  PaymentMethods,
  Payouts,
  Plans,
  Prices,
  Products,
  PromotionCodes,
  Quotes,
  Refunds,
  Reviews,
  SetupAttempts,
  SetupIntents,
  ShippingRates,
  Skus,
  Sources,
  Subscriptions,
  SubscriptionItems,
  SubscriptionSchedules,
  TaxCodes,
  TaxRates,
  Tokens,
  Topups,
  Transfers,
  WebhookEndpoints,
  Apps,
  BillingPortal,
  Checkout,
  FinancialConnections,
  Identity,
  Issuing,
  Radar,
  Reporting,
  Sigma,
  Terminal,
  TestHelpers,
  Treasury,
};

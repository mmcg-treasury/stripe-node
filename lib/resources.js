'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.BillingPortal = exports.Apps = exports.WebhookEndpoints = exports.Transfers = exports.Topups = exports.Tokens = exports.TaxRates = exports.TaxCodes = exports.SubscriptionSchedules = exports.SubscriptionItems = exports.Subscriptions = exports.Sources = exports.Skus = exports.ShippingRates = exports.SetupIntents = exports.SetupAttempts = exports.Reviews = exports.Refunds = exports.Quotes = exports.PromotionCodes = exports.Products = exports.Prices = exports.Plans = exports.Payouts = exports.PaymentMethods = exports.PaymentLinks = exports.PaymentIntents = exports.Orders = exports.OAuth = exports.Mandates = exports.InvoiceItems = exports.Invoices = exports.FileLinks = exports.Files = exports.ExchangeRates = exports.Events = exports.EphemeralKeys = exports.Disputes = exports.Customers = exports.CreditNotes = exports.Coupons = exports.CountrySpecs = exports.Charges = exports.BalanceTransactions = exports.Balance = exports.ApplicationFees = exports.ApplePayDomains = exports.AccountLinks = exports.Account = exports.Accounts = void 0;
exports.Treasury = exports.TestHelpers = exports.Terminal = exports.Sigma = exports.Reporting = exports.Radar = exports.Issuing = exports.Identity = exports.FinancialConnections = exports.Checkout = void 0;
const ResourceNamespace_js_1 = require('./ResourceNamespace.js');
// File generated from our OpenAPI spec
('use strict');
exports.Accounts = require('./resources/Accounts');
exports.Account = require('./resources/Accounts');
exports.AccountLinks = require('./resources/AccountLinks');
exports.ApplePayDomains = require('./resources/ApplePayDomains');
exports.ApplicationFees = require('./resources/ApplicationFees');
exports.Balance = require('./resources/Balance');
exports.BalanceTransactions = require('./resources/BalanceTransactions');
exports.Charges = require('./resources/Charges');
exports.CountrySpecs = require('./resources/CountrySpecs');
exports.Coupons = require('./resources/Coupons');
exports.CreditNotes = require('./resources/CreditNotes');
exports.Customers = require('./resources/Customers');
exports.Disputes = require('./resources/Disputes');
exports.EphemeralKeys = require('./resources/EphemeralKeys');
exports.Events = require('./resources/Events');
exports.ExchangeRates = require('./resources/ExchangeRates');
exports.Files = require('./resources/Files');
exports.FileLinks = require('./resources/FileLinks');
exports.Invoices = require('./resources/Invoices');
exports.InvoiceItems = require('./resources/InvoiceItems');
exports.Mandates = require('./resources/Mandates');
exports.OAuth = require('./resources/OAuth');
exports.Orders = require('./resources/Orders');
exports.PaymentIntents = require('./resources/PaymentIntents');
exports.PaymentLinks = require('./resources/PaymentLinks');
exports.PaymentMethods = require('./resources/PaymentMethods');
exports.Payouts = require('./resources/Payouts');
exports.Plans = require('./resources/Plans');
exports.Prices = require('./resources/Prices');
exports.Products = require('./resources/Products');
exports.PromotionCodes = require('./resources/PromotionCodes');
exports.Quotes = require('./resources/Quotes');
exports.Refunds = require('./resources/Refunds');
exports.Reviews = require('./resources/Reviews');
exports.SetupAttempts = require('./resources/SetupAttempts');
exports.SetupIntents = require('./resources/SetupIntents');
exports.ShippingRates = require('./resources/ShippingRates');
exports.Skus = require('./resources/SKUs');
exports.Sources = require('./resources/Sources');
exports.Subscriptions = require('./resources/Subscriptions');
exports.SubscriptionItems = require('./resources/SubscriptionItems');
exports.SubscriptionSchedules = require('./resources/SubscriptionSchedules');
exports.TaxCodes = require('./resources/TaxCodes');
exports.TaxRates = require('./resources/TaxRates');
exports.Tokens = require('./resources/Tokens');
exports.Topups = require('./resources/Topups');
exports.Transfers = require('./resources/Transfers');
exports.WebhookEndpoints = require('./resources/WebhookEndpoints');
exports.Apps = (0, ResourceNamespace_js_1.default)('apps', {
  Secrets: require('./resources/Apps/Secrets'),
});
exports.BillingPortal = (0, ResourceNamespace_js_1.default)('billingPortal', {
  Configurations: require('./resources/BillingPortal/Configurations'),
  Sessions: require('./resources/BillingPortal/Sessions'),
});
exports.Checkout = (0, ResourceNamespace_js_1.default)('checkout', {
  Sessions: require('./resources/Checkout/Sessions'),
});
exports.FinancialConnections = (0, ResourceNamespace_js_1.default)(
  'financialConnections',
  {
    Accounts: require('./resources/FinancialConnections/Accounts'),
    Sessions: require('./resources/FinancialConnections/Sessions'),
  }
);
exports.Identity = (0, ResourceNamespace_js_1.default)('identity', {
  VerificationReports: require('./resources/Identity/VerificationReports'),
  VerificationSessions: require('./resources/Identity/VerificationSessions'),
});
exports.Issuing = (0, ResourceNamespace_js_1.default)('issuing', {
  Authorizations: require('./resources/Issuing/Authorizations'),
  Cards: require('./resources/Issuing/Cards'),
  Cardholders: require('./resources/Issuing/Cardholders'),
  Disputes: require('./resources/Issuing/Disputes'),
  Transactions: require('./resources/Issuing/Transactions'),
});
exports.Radar = (0, ResourceNamespace_js_1.default)('radar', {
  EarlyFraudWarnings: require('./resources/Radar/EarlyFraudWarnings'),
  ValueLists: require('./resources/Radar/ValueLists'),
  ValueListItems: require('./resources/Radar/ValueListItems'),
});
exports.Reporting = (0, ResourceNamespace_js_1.default)('reporting', {
  ReportRuns: require('./resources/Reporting/ReportRuns'),
  ReportTypes: require('./resources/Reporting/ReportTypes'),
});
exports.Sigma = (0, ResourceNamespace_js_1.default)('sigma', {
  ScheduledQueryRuns: require('./resources/Sigma/ScheduledQueryRuns'),
});
exports.Terminal = (0, ResourceNamespace_js_1.default)('terminal', {
  Configurations: require('./resources/Terminal/Configurations'),
  ConnectionTokens: require('./resources/Terminal/ConnectionTokens'),
  Locations: require('./resources/Terminal/Locations'),
  Readers: require('./resources/Terminal/Readers'),
});
exports.TestHelpers = (0, ResourceNamespace_js_1.default)('testHelpers', {
  Customers: require('./resources/TestHelpers/Customers'),
  Refunds: require('./resources/TestHelpers/Refunds'),
  TestClocks: require('./resources/TestHelpers/TestClocks'),
  Issuing: (0, ResourceNamespace_js_1.default)('issuing', {
    Cards: require('./resources/TestHelpers/Issuing/Cards'),
  }),
  Terminal: (0, ResourceNamespace_js_1.default)('terminal', {
    Readers: require('./resources/TestHelpers/Terminal/Readers'),
  }),
  Treasury: (0, ResourceNamespace_js_1.default)('treasury', {
    InboundTransfers: require('./resources/TestHelpers/Treasury/InboundTransfers'),
    OutboundPayments: require('./resources/TestHelpers/Treasury/OutboundPayments'),
    OutboundTransfers: require('./resources/TestHelpers/Treasury/OutboundTransfers'),
    ReceivedCredits: require('./resources/TestHelpers/Treasury/ReceivedCredits'),
    ReceivedDebits: require('./resources/TestHelpers/Treasury/ReceivedDebits'),
  }),
});
exports.Treasury = (0, ResourceNamespace_js_1.default)('treasury', {
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
exports.default = {
  Accounts: exports.Accounts,
  Account: exports.Account,
  AccountLinks: exports.AccountLinks,
  ApplePayDomains: exports.ApplePayDomains,
  ApplicationFees: exports.ApplicationFees,
  Balance: exports.Balance,
  BalanceTransactions: exports.BalanceTransactions,
  Charges: exports.Charges,
  CountrySpecs: exports.CountrySpecs,
  Coupons: exports.Coupons,
  CreditNotes: exports.CreditNotes,
  Customers: exports.Customers,
  Disputes: exports.Disputes,
  EphemeralKeys: exports.EphemeralKeys,
  Events: exports.Events,
  ExchangeRates: exports.ExchangeRates,
  Files: exports.Files,
  FileLinks: exports.FileLinks,
  Invoices: exports.Invoices,
  InvoiceItems: exports.InvoiceItems,
  Mandates: exports.Mandates,
  OAuth: exports.OAuth,
  Orders: exports.Orders,
  PaymentIntents: exports.PaymentIntents,
  PaymentLinks: exports.PaymentLinks,
  PaymentMethods: exports.PaymentMethods,
  Payouts: exports.Payouts,
  Plans: exports.Plans,
  Prices: exports.Prices,
  Products: exports.Products,
  PromotionCodes: exports.PromotionCodes,
  Quotes: exports.Quotes,
  Refunds: exports.Refunds,
  Reviews: exports.Reviews,
  SetupAttempts: exports.SetupAttempts,
  SetupIntents: exports.SetupIntents,
  ShippingRates: exports.ShippingRates,
  Skus: exports.Skus,
  Sources: exports.Sources,
  Subscriptions: exports.Subscriptions,
  SubscriptionItems: exports.SubscriptionItems,
  SubscriptionSchedules: exports.SubscriptionSchedules,
  TaxCodes: exports.TaxCodes,
  TaxRates: exports.TaxRates,
  Tokens: exports.Tokens,
  Topups: exports.Topups,
  Transfers: exports.Transfers,
  WebhookEndpoints: exports.WebhookEndpoints,
  Apps: exports.Apps,
  BillingPortal: exports.BillingPortal,
  Checkout: exports.Checkout,
  FinancialConnections: exports.FinancialConnections,
  Identity: exports.Identity,
  Issuing: exports.Issuing,
  Radar: exports.Radar,
  Reporting: exports.Reporting,
  Sigma: exports.Sigma,
  Terminal: exports.Terminal,
  TestHelpers: exports.TestHelpers,
  Treasury: exports.Treasury,
};

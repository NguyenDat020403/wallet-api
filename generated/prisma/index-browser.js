
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.NetworkScalarFieldEnum = {
  id: 'id',
  name: 'name',
  rpc_url: 'rpc_url',
  chain_id: 'chain_id',
  current_symbol: 'current_symbol',
  price_feed_id: 'price_feed_id',
  block_explorer_url: 'block_explorer_url',
  thumbnail: 'thumbnail',
  is_default_network: 'is_default_network',
  is_testnet: 'is_testnet',
  networkswapid: 'networkswapid',
  creatorid: 'creatorid',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Network_swapScalarFieldEnum = {
  id: 'id',
  network_id: 'network_id',
  swap_contract_address: 'swap_contract_address',
  factory_contract_address: 'factory_contract_address',
  quote_contract_address: 'quote_contract_address',
  wrapped_token_address: 'wrapped_token_address',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.TokenScalarFieldEnum = {
  id: 'id',
  name: 'name',
  symbol: 'symbol',
  decimal: 'decimal',
  thumbnail: 'thumbnail',
  price_feed_id: 'price_feed_id',
  hz_percent_change: 'hz_percent_change',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Token_networkScalarFieldEnum = {
  token_network_id: 'token_network_id',
  contract_address: 'contract_address',
  token_id: 'token_id',
  network_id: 'network_id'
};

exports.Prisma.TransactionScalarFieldEnum = {
  id: 'id',
  transaction_status: 'transaction_status',
  transaction_gas: 'transaction_gas',
  transaction_hash: 'transaction_hash',
  block_hash: 'block_hash',
  block_number: 'block_number',
  from_address: 'from_address',
  to_address: 'to_address',
  token_contract_address: 'token_contract_address',
  max_priority_fee_per_gas: 'max_priority_fee_per_gas',
  base_fee: 'base_fee',
  token_id: 'token_id',
  network_id: 'network_id',
  amount: 'amount',
  created_at: 'created_at'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  address: 'address',
  password: 'password',
  avatar: 'avatar',
  secretid: 'secretid',
  currentselectednetworkid: 'currentselectednetworkid',
  push_notification_tokens: 'push_notification_tokens',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.User_network_tokenScalarFieldEnum = {
  user_network_token_id: 'user_network_token_id',
  userid: 'userid',
  tokennetworkid: 'tokennetworkid'
};

exports.Prisma.User_networks_networkScalarFieldEnum = {
  userid: 'userid',
  networkid: 'networkid'
};

exports.Prisma.User_secretScalarFieldEnum = {
  id: 'id',
  userid: 'userid',
  private_key: 'private_key',
  public_key: 'public_key',
  mnemonic: 'mnemonic',
  biometric_public_key: 'biometric_public_key',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.etransactionstatus = exports.$Enums.etransactionstatus = {
  pending: 'pending',
  completed: 'completed',
  canceled: 'canceled',
  failed: 'failed'
};

exports.Prisma.ModelName = {
  network: 'network',
  network_swap: 'network_swap',
  token: 'token',
  token_network: 'token_network',
  transaction: 'transaction',
  user: 'user',
  user_network_token: 'user_network_token',
  user_networks_network: 'user_networks_network',
  user_secret: 'user_secret'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

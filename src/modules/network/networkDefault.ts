export const ListNetworkDefault = [
  {
    network_name: 'Bitcoin',
    symbol: 'BTC',
    thumbnail:
      'https://coin-images.coingecko.com/coins/images/1/thumb/bitcoin.png?1696501400',
    chain_id: '0',
    block_explorer_url: 'https://www.blockchain.com/explorer',
    price_feed_id: 'BTCUSD',
    is_default_network: true,
    is_testnet: false,
    rpc_url: 'https://rpc.bitcoinevm.org',
  },
  {
    network_name: 'Polygon',
    symbol: 'MATIC',
    thumbnail:
      'https://coin-images.coingecko.com/coins/images/4713/thumb/polygon.png?1698233745',
    chain_id: '137',
    block_explorer_url: 'https://polygonscan.com',
    price_feed_id: 'MATICUSD',
    is_default_network: true,
    is_testnet: false,
    rpc_url:
      'https://polygon-mainnet.infura.io/v3/44b62ee0153941579e73f1d784472ad1',
  },
  {
    network_name: 'Binance',
    symbol: 'BNB',
    thumbnail:
      'https://coin-images.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1696501970',
    chain_id: '56',
    block_explorer_url: 'https://bscscan.com',
    price_feed_id: 'BNBUSD',
    is_default_network: true,
    is_testnet: false,
    rpc_url:
      'https://bsc-mainnet.infura.io/v3/44b62ee0153941579e73f1d784472ad1',
  },
  {
    network_name: 'Ethereum',
    symbol: 'ETH',
    thumbnail:
      'https://coin-images.coingecko.com/coins/images/279/thumb/ethereum.png?1696501628',
    chain_id: '1',
    block_explorer_url: 'https://etherscan.io',
    price_feed_id: 'ETHUSD',
    is_default_network: true,
    is_testnet: false,
    rpc_url: 'https://mainnet.infura.io/v3/44b62ee0153941579e73f1d784472ad1',
  },
  {
    network_name: 'Sepolia',
    symbol: 'SepoliaETH',
    thumbnail:
      'https://coin-images.coingecko.com/coins/images/279/thumb/ethereum.png?1696501628',
    chain_id: '11155111',
    block_explorer_url: 'https://sepolia.etherscan.io',
    price_feed_id: '0x694AA1769357215DE4FAC081bf1f309aDC325306',
    is_default_network: true,
    is_testnet: true,
    rpc_url: 'https://sepolia.infura.io/v3/44b62ee0153941579e73f1d784472ad1',
  },
];

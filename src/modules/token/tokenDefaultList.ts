export const TokenDefault = [
  {
    token_name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
    // contract_address: '',
    // wallet_id: '1e28d601-a4b3-4e22-b6ad-c56fcc548b1f',
    thumbnail: '',
    price_feed_id: '',
    percent_change_24h: '',
    // network_id: 'aeb07639-5193-45ff-9233-1eb1df4c46e6',
  },
  {
    token_name: 'ETH Sepolia',
    symbol: 'ETH Sepolia',
    decimals: 18,
    // contract_address: '',
    // wallet_id: '1e28d601-a4b3-4e22-b6ad-c56fcc548b1f',
    thumbnail: '',
    price_feed_id: '',
    percent_change_24h: '',
    // network_id: 'aeb07639-5193-45ff-9233-1eb1df4c46e6',
  },
  {
    token_name: 'Polygon Testnet',
    symbol: 'POL TEST',
    decimals: 18,
    // contract_address: '',
    // wallet_id: '1e28d601-a4b3-4e22-b6ad-c56fcc548b1f',
    thumbnail: '',
    price_feed_id: '',
    percent_change_24h: '',
    // network_id: '96eb465e-8367-4159-80f9-895bc877d74d',
  },
  {
    token_name: 'BNB Maintest',
    symbol: 'BNB',
    decimals: 18,
    // contract_address: '',
    // wallet_id: '1e28d601-a4b3-4e22-b6ad-c56fcc548b1f',
    thumbnail: '',
    price_feed_id: '',
    percent_change_24h: '',
    // network_id: '57b49cdd-8f9a-434c-a8e9-1eb1ed9700c0',
  },
  {
    token_name: 'Polygon Mainnet',
    symbol: 'POL',
    decimals: 18,
    // contract_address: '',
    // wallet_id: '1e28d601-a4b3-4e22-b6ad-c56fcc548b1f',
    thumbnail: '',
    price_feed_id: '',
    percent_change_24h: '',
    // network_id: 'b48dc739-6ef6-45be-a9f6-c206fdf241a6',
  },
  {
    token_name: 'BNB Testnet',
    symbol: 'BNB Testnet',
    decimals: 18,
    // contract_address: '',
    // wallet_id: '1e28d601-a4b3-4e22-b6ad-c56fcc548b1f',
    thumbnail: '',
    price_feed_id: '',
    percent_change_24h: '',
    // network_id: '25e762b5-aad0-4745-be5f-c53a13871fb5',
  },
  {
    token_name: 'Bitcoin',
    symbol: 'BTC',
    decimals: 8,
    // contract_address: '',
    // wallet_id: '1e28d601-a4b3-4e22-b6ad-c56fcc548b1f',
    thumbnail: '',
    price_feed_id: '',
    percent_change_24h: '',
    // network_id: '1e678413-6e40-4b63-af0e-499c1ca46de3',
  },
];
export const TokenNetworkDefault = [
  {
    // token_name: 'ETH',
    token_id: '9927a126-b8be-4fd4-b91b-7b316f4c2bbc',
    contract_address: '',
    network_id: 'aeb07639-5193-45ff-9233-1eb1df4c46e6',
  },
  {
    // token_name: 'ETH Sepolia',
    token_id: 'e2ffc47c-83c6-4a72-b925-66236a45f1dc',
    contract_address: '',
    network_id: 'aeb07639-5193-45ff-9233-1eb1df4c46e6',
  },
  {
    // token_name: 'Polygon Testnet',
    token_id: '1876b221-156b-4ec3-ba6d-6767bc7cb27c',
    contract_address: '',
    network_id: '96eb465e-8367-4159-80f9-895bc877d74d',
  },
  {
    // token_name: 'BNB Maintest',
    token_id: 'e77e4101-4602-4e58-9143-d0f0c9fd4589',
    contract_address: '',
    network_id: '57b49cdd-8f9a-434c-a8e9-1eb1ed9700c0',
  },
  {
    // token_name: 'Polygon Mainnet',
    token_id: '3c8e0a6d-e2e6-46a1-bbe1-1a114419472a',
    contract_address: '',
    network_id: 'b48dc739-6ef6-45be-a9f6-c206fdf241a6',
  },
  {
    // token_name: 'BNB Testnet',
    token_id: 'bb589200-e6b2-45cb-8e6a-9fc5a2cc6f37',
    contract_address: '',
    network_id: '25e762b5-aad0-4745-be5f-c53a13871fb5',
  },
  {
    // token_name: 'Bitcoin',
    token_id: '6b153f05-c660-4305-b031-0eedf19d6205',
    contract_address: '',
    network_id: '1e678413-6e40-4b63-af0e-499c1ca46de3',
  },
];

export const listNetworkDefault = [
  {
    network_name: 'Polygon Amoy (Testnet)',
    rpc_url: 'https://polygon-amoy.infura.io/v3/',
    chain_id: '80002',
    symbol: 'POL',
    block_explorer_url: 'https://polygonscan.com',
    is_default_network: true,
    is_testnet: true,
  },
  {
    network_name: 'Binance Smart Chain',
    rpc_url: 'https://bsc-mainnet.infura.io/v3/',
    chain_id: '56',
    symbol: 'BNB',
    block_explorer_url: 'https://bscscan.com',
    is_default_network: true,
    is_testnet: false,
  },
  {
    network_name: 'Ethereum Testnet Sepolia',
    rpc_url: 'https://sepolia.infura.io/v3/',
    chain_id: '11155111',
    symbol: 'ETH',
    block_explorer_url: 'https://bscscan.com',
    is_default_network: true,
    is_testnet: false,
  },
];

export const defaultTokens = [
  // Native coins
  { chainId: 0, address: '', coingeckoId: 'bitcoin' }, // BTC
  { chainId: 1, address: '', coingeckoId: 'ethereum' }, // ETH
  { chainId: 56, address: '', coingeckoId: 'binancecoin' }, // BNB
  { chainId: 137, address: '', coingeckoId: 'matic-network' }, // MATIC
  {
    chainId: 11155111,
    address: '',
    thumbnail: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    token_name: 'SepoliaETH',
    decimals: 18,
    symbol: 'ETH',
  },

  // ERC-20 / BEP-20 tokens
  { chainId: 1, address: '0xdAC17F958D2ee523a2206206994597C13D831ec7' }, // USDT Ethereum
  { chainId: 1, address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606EB48' }, // USDC Ethereum
  { chainId: 56, address: '0x55d398326f99059fF775485246999027B3197955' }, // USDT BSC
];

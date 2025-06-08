/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { ethers } from 'ethers';

const tokenSwapAbi = [
  'function swapAtoB(uint256 amountA) public',
  'function swapBtoA(uint256 amountB) public',
  'function depositTokens(uint256 amountA, uint256 amountB) public',
  'function getRateAtoB() public view returns (uint256)',
  'function getRateBtoA() public view returns (uint256)',
  'function getUsdPrices() public view returns (uint256 tokenAUsdPrice, uint256 tokenBUsdPrice)',
  'function getContractBalances() public view returns (uint256 balanceA, uint256 balanceB)',
  'function tokenA() public view returns (address)',
  'function tokenB() public view returns (address)',
];

const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint256)',
  'function transfer(address to, uint amount) returns (bool)',
  'function approve(address spender, uint amount) returns (bool)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function transferFrom(address from, address to, uint amount) returns (bool)',
];

export async function swapTokenToToken(
  rpcUrl: string,
  privateKey: string,
  tokenIn: string,
  amountInDecimal: string,
  isSwapAtoB = true,
) {
  try {
    const routerAddress = '0xD31AfbF1d2A6D8D745D9E6D3d1C15F1bc5F6624d'; // TokenSwap address
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(privateKey, provider);

    const routerContract = new ethers.Contract(
      routerAddress,
      tokenSwapAbi,
      wallet,
    );
    const tokenInContract = new ethers.Contract(tokenIn, ERC20_ABI, wallet);

    const decimals = await tokenInContract.decimals();
    const amountIn = ethers.parseUnits(amountInDecimal, decimals);

    const allowance = await tokenInContract.allowance(
      wallet.address,
      routerAddress,
    );
    if (allowance < amountIn) {
      const approveTx = await tokenInContract.approve(routerAddress, amountIn);
      await approveTx.wait();
    }

    const tx = isSwapAtoB
      ? await routerContract.swapAtoB(amountIn)
      : await routerContract.swapBtoA(amountIn);

    console.log('Swap tx hash:', tx.hash);
    const receipt = await tx.wait();
    console.log('Swap confirmed in block', receipt.blockNumber);
    return receipt;
  } catch (error) {
    console.error('Swap failed:', error);
    throw error;
  }
}

// Lấy thông tin token (symbol, name, balance)
export async function getTokenInfo(
  rpcUrl: string,
  tokenAddress: string,
  walletAddress: string,
) {
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const token = new ethers.Contract(tokenAddress, ERC20_ABI, provider);

  const [name, symbol, decimals, balance] = await Promise.all([
    token.name(),
    token.symbol(),
    token.decimals(),
    token.balanceOf(walletAddress),
  ]);

  return {
    name,
    symbol,
    decimals,
    balance: ethers.formatUnits(balance, decimals),
  };
}

// Lấy giá và tỷ lệ swap từ contract
export async function getSwapInfo(rpcUrl: string, contractAddress: string) {
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const contract = new ethers.Contract(contractAddress, tokenSwapAbi, provider);

  const [rateA, rateB, usdPrices, balances, tokenA, tokenB] = await Promise.all(
    [
      contract.getRateAtoB(),
      contract.getRateBtoA(),
      contract.getUsdPrices(),
      contract.getContractBalances(),
      contract.tokenA(),
      contract.tokenB(),
    ],
  );

  return [
    {
      rate: rateA.toString(),
      usd: Number(usdPrices.tokenAUsdPrice).toFixed(6),
      contractBalance: (Number(balances.balanceA) / 1e18).toString(),
      address: tokenA,
    },
    {
      rate: rateB.toString(),
      usd: Number(usdPrices.tokenBUsdPrice).toFixed(6),
      contractBalance: (Number(balances.balanceB) / 1e18).toString(),
      address: tokenB,
    },
  ];
}

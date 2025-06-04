/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ethers } from 'ethers';

const tokenSwapAbi = [
  'function swapAtoB(uint256 amountA) public',
  'function swapBtoA(uint256 amountB) public',
  'function depositTokens(uint256 amountA, uint256 amountB) public',
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
  chain_id: string,
  tokenIn: string,
  tokenOut: string,
  amountInDecimal: string,
  slippagePercent: number,
  recipientAddress: string,
) {
  try {
    const routerAddress = '0x59657e1fc210AeC7BB391E0679e016f9379e74c1';

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

    const approveTx = await tokenInContract.approve(routerAddress, amountIn);
    await approveTx.wait();

    const tx = await routerContract.swapAtoB(amountIn);
    console.log('SwapAtoB tx hash:', tx.hash);
    const receipt = await tx.wait();
    console.log('SwapAtoB confirmed in block', receipt.blockNumber);
    return receipt;
  } catch (error) {
    console.error('Swap failed:', error);
    throw error;
  }
}

import { BadRequestException, Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { ERROR_MAP } from 'src/constants/errorMap';
import { PrismaService } from 'src/prisma/prisma.service';
@UseGuards(JwtGuard)
@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async findById(id: string) {
    const user = await this.prisma.users.findFirst({
      where: { user_id: id },
    });
    if (!user) {
      throw new BadRequestException(ERROR_MAP.USER_NOT_FOUND);
    }
    return user;
  }
  async findUserByEmail(email: string) {
    const user = await this.prisma.users.findUnique({
      where: { email: email },
    });
    if (!user) {
      throw new BadRequestException(ERROR_MAP.USER_NOT_FOUND);
    }
    return user;
  }
  async findUserByUsername(username: string) {
    const user = await this.prisma.users.findMany({
      where: { username: username },
    });
    if (!user) {
      throw new BadRequestException(ERROR_MAP.USER_NOT_FOUND);
    }
    return user;
  }
  async findUserByWalletId(walletId: string) {
    const wallet = await this.prisma.wallets.findFirst({
      where: { wallet_id: walletId },
      include: {
        users: true,
      },
    });
    if (!wallet?.users) {
      throw new BadRequestException(ERROR_MAP.USER_NOT_FOUND);
    }
    return wallet.users;
  }
  // async addNetwork(userId: string, networkIds: string[]) {
  //   console.log(userId);
  //   const user = await this.prisma.user.findUnique({
  //     where: { id: userId },
  //     include: {
  //       user_networks_network: true,
  //     },
  //   });

  //   if (!user) throw new BadRequestException(ERROR_MAP.USER_NOT_FOUND);

  //   const networks = await this.prisma.network.findMany({
  //     where: {
  //       id: {
  //         in: networkIds,
  //       },
  //     },
  //   });
  //   const result = await this.prisma.user_networks_network.createMany({
  //     data: networks.map((net) => ({
  //       userid: userId,
  //       networkid: net.id,
  //     })),
  //     skipDuplicates: true,
  //   });
  //   return generateResponse(result ? 'success' : 'fail', '');
  // }
  // async removeNetwork(userId: string, networkIds: string[]) {
  //   const user = await this.prisma.user.findUnique({
  //     where: { id: userId, deleted_at: null },
  //     include: {
  //       user_networks_network: true,
  //     },
  //   });

  //   if (!user) throw new BadRequestException(ERROR_MAP.USER_NOT_FOUND);
  //   const validNetworkIds = networkIds.filter((id) => isValidUUID(id));
  //   if (validNetworkIds.length === 0) {
  //     throw new BadRequestException(ERROR_MAP.NETWORK_NOT_FOUND);
  //   }
  //   const result = await this.prisma.user_networks_network.deleteMany({
  //     where: {
  //       userid: userId,
  //       networkid: {
  //         in: validNetworkIds,
  //       },
  //     },
  //   });
  //   return generateResponse(result ? 'success' : 'fail', '');
  // }

  // async importToken(userId: string, data: ImportTokenDto) {
  //   const user = await this.prisma.user.findUnique({
  //     where: { id: userId, deleted_at: null },
  //   });

  //   if (!user) throw new BadRequestException(ERROR_MAP.USER_NOT_FOUND);

  //   const tokenNetworks = await Promise.all(
  //     data.contract_addresses.map((contractAddress) =>
  //       this.tokenService.findOrCreateIfNotExist({
  //         contract_address: contractAddress,
  //         network_id: data.network_id,
  //       }),
  //     ),
  //   );
  //   const result = await Promise.all(
  //     tokenNetworks
  //       .filter((tokenNetwork) => tokenNetwork !== undefined)
  //       .map((tokenNetwork) =>
  //         this.prisma.user_network_token.create({
  //           data: {
  //             userid: userId,
  //             tokennetworkid: tokenNetwork.token_network_id,
  //           },
  //         }),
  //       ),
  //   );
  //   return generateResponse(result ? 'success' : 'fail', '');
  // }

  // async getBalance(userId: string, body: GetBalanceTokenDto) {
  //   const user = await this.prisma.user.findUnique({
  //     where: { id: userId, deleted_at: null },
  //   });
  //   if (!user) throw new BadRequestException(ERROR_MAP.USER_NOT_FOUND);
  //   const network = await this.networkService.findById(body.network_id);
  //   if (!network) throw new BadRequestException(ERROR_MAP.NETWORK_NOT_FOUND);

  //   const web3 = new Web3(network.rpc_url);
  //   const tokenContractAbi = tokenContractAbiJson as AbiItem[];

  //   if (body.contract_address) {
  //     const contact = new web3.eth.Contract(
  //       tokenContractAbi,
  //       body.contract_address,
  //     );
  //     const tokenDecimal = await contact.methods.decimals().call();
  //     const wei = await contact.methods.balanceOf(user.address).call();
  //     console.log(tokenDecimal);
  //     const weistring = wei + '';

  //     return weistring;
  //   }
  // }
}

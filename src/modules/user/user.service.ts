import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { ERROR_MAP } from 'src/constants/errorMap';
import { PrismaService } from 'src/prisma/prisma.service';
import { generateResponse } from 'src/utils/response';
import { validate as isValidUUID } from 'uuid';
import { ImportTokenDto } from './user.dto';

@UseGuards(JwtGuard)
@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async findById(id: string, isCurrentUser: boolean) {
    console.log(id);

    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        user_network_token: isCurrentUser,
        user_networks_network: isCurrentUser,
        user_secret_user_secret_useridTouser: isCurrentUser,
      },
    });
    if (!user) {
      throw new ForbiddenException('User doesnt exist');
    }
    return user;
  }

  async findUserByAddress(address: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        address,
        deleted_at: null,
      },
      include: {},
    });
    if (!user) {
      throw new ForbiddenException('User doesnt exist');
    }
    return user;
  }

  async addNetwork(userId: string, networkIds: string[]) {
    console.log(userId);
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        user_networks_network: true,
      },
    });

    if (!user) throw new BadRequestException(ERROR_MAP.USER_NOT_FOUND);

    const networks = await this.prisma.network.findMany({
      where: {
        id: {
          in: networkIds,
        },
      },
    });
    const result = await this.prisma.user_networks_network.createMany({
      data: networks.map((net) => ({
        userid: userId,
        networkid: net.id,
      })),
      skipDuplicates: true,
    });
    return generateResponse(result ? 'success' : 'fail', '');
  }
  async removeNetwork(userId: string, networkIds: string[]) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId, deleted_at: null },
      include: {
        user_networks_network: true,
      },
    });

    if (!user) throw new BadRequestException(ERROR_MAP.USER_NOT_FOUND);
    const validNetworkIds = networkIds.filter((id) => isValidUUID(id));
    if (validNetworkIds.length === 0) {
      throw new BadRequestException(ERROR_MAP.NETWORK_NOT_FOUND);
    }
    const result = await this.prisma.user_networks_network.deleteMany({
      where: {
        userid: userId,
        networkid: {
          in: validNetworkIds,
        },
      },
    });
    return generateResponse(result ? 'success' : 'fail', '');
  }

  async importToken(userId: string, data: ImportTokenDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId, deleted_at: null },
    });

    if (!user) throw new BadRequestException(ERROR_MAP.USER_NOT_FOUND);

    // const tokenNetworks = await Promise.all(
    //   data.contractAddresses.map((contractAddress) =>
    //     this.tokenService.findOrCreateIfNotExist({
    //       contractAddress,
    //       networkId: data.networkId,
    //     }),
    //   ),
    // );
  }
}

import { IsArray, IsString, IsUUID } from 'class-validator';

export class AddNetworksDto {
  @IsArray()
  @IsString({ each: true })
  networkIds: string[];
}
export class RemoveNetworksDto extends AddNetworksDto {}

export class ImportTokenDto {
  @IsArray()
  @IsString({ each: true })
  contractAddresses: string[];

  @IsUUID('4')
  networkId: string;
}

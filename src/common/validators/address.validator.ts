import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
const REGEX_CONTRACT_ADDRESS = /^0x[a-fA-F0-9]{40}$/;
export function IsAddress(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      target: object.constructor,
      propertyName,
      options: {
        message: "Invalid contract address must be '0x...' format",
        ...validationOptions,
      },
      validator: IsAddressConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'IsAddress' })
export class IsAddressConstraint implements ValidatorConstraintInterface {
  validate(value = '') {
    return REGEX_CONTRACT_ADDRESS.test(value);
  }
}

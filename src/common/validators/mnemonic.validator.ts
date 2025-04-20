/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

export function Mnemonic(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      target: object.constructor,
      propertyName,
      options: {
        ...validationOptions,
        message: 'Invalid mnemonic must be at least 12 words',
      },
      validator: MnemonicConstraint,
    });
  };
}
@ValidatorConstraint({ name: 'Mnemonic' })
export class MnemonicConstraint implements ValidatorConstraintInterface {
  validate(value = '') {
    const valueSplit = value.split(' ');
    return valueSplit.length >= 12;
  }
}

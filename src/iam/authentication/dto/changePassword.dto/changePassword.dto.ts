// 📝 changePassword.dto.ts
import { IsEmail, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @IsEmail()
  email: string;

  @MinLength(10)
  password: string;

  @MinLength(10)
  newPassword: string;
}
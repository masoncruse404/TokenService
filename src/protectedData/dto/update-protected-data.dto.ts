import { PartialType } from '@nestjs/mapped-types';
import { CreateProtectedDataDto } from './create-protected-data.dto';

export class UpdateProtectedDataDto extends PartialType(CreateProtectedDataDto) {}

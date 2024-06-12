import { Injectable } from '@nestjs/common';
import { CreateProtectedDataDto } from './dto/create-protected-data.dto';
import { UpdateProtectedDataDto } from './dto/update-protected-data.dto';

@Injectable()
export class ProtectedDataService {
  create(createProtectedDataDto: CreateProtectedDataDto) {
    return 'This action adds a new protected resource';
  }

  findAll() {
    return `This action returns all protected resources`;
  }

  findOne(id: number) {
    return `This action returns a #${id} protected resource`;
  }

  update(id: number, updateProtectedDataDto: UpdateProtectedDataDto) {
    return `This action updates a #${id} protected resource`;
  }

  remove(id: number) {
    return `This action removes a #${id} protected resource`;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProtectedDataService } from './protected-data.service';
import { CreateProtectedDataDto } from './dto/create-protected-data.dto';
import { UpdateProtectedDataDto } from './dto/update-protected-data.dto';
import { ActiveUser } from 'src/iam/authentication/decorators/active-user.decorator';
import { Roles } from 'src/iam/authorization/decorators/role.decorator';
import { Role } from 'src/users/enums/role.enum';

@Controller('protected-data')
export class ProtectedDataController {
  constructor(private readonly protectedDataService: ProtectedDataService) {}
  @Roles(Role.Regular)
  @Post()
  create(@Body() createProtectedDataDto: CreateProtectedDataDto) {
    return this.protectedDataService.create(createProtectedDataDto);
  }

  @Get()
  findAll(@ActiveUser() user) {
  
    return this.protectedDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.protectedDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProtectedDataDto: UpdateProtectedDataDto) {
    return this.protectedDataService.update(+id, updateProtectedDataDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.protectedDataService.remove(+id);
  }
}

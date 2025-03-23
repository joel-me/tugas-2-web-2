import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service';
import { Mahasiswa } from './mahasiswa.entity';

@Controller('mahasiswa')
export class MahasiswaController {
  constructor(private readonly mahasiswaService: MahasiswaService) {}

  @Get()
  findAll() {
    return this.mahasiswaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.mahasiswaService.findOne(id);
  }

  @Post()
  create(@Body() mahasiswa: Mahasiswa) {
    return this.mahasiswaService.create(mahasiswa);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateData: Partial<Mahasiswa>) {
    return this.mahasiswaService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.mahasiswaService.delete(id);
  }
}

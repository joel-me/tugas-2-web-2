import { Module } from '@nestjs/common';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';

@Module({
  imports: [MahasiswaModule],
})
export class AppModule {}

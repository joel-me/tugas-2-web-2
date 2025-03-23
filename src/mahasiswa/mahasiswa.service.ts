import { Injectable } from '@nestjs/common';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';

@Injectable()
export class MahasiswaService {
  private mahasiswa: CreateMahasiswaDto[] = [];
  private nextId = 1; // ID auto-increment

  findAll(): CreateMahasiswaDto[] {
    return this.mahasiswa;
  }

  findOne(id: number): CreateMahasiswaDto | undefined {
    return this.mahasiswa.find((mhs) => mhs.id === id);
  }

  create(data: Omit<CreateMahasiswaDto, 'id'>): CreateMahasiswaDto {
    const newMahasiswa = { id: this.nextId++, ...data }; // Tambahkan id otomatis
    this.mahasiswa.push(newMahasiswa);
    return newMahasiswa;
  }

  update(
    id: number,
    updateData: Partial<CreateMahasiswaDto>,
  ): CreateMahasiswaDto | string {
    const index = this.mahasiswa.findIndex((mhs) => mhs.id === id);
    if (index === -1) return `Mahasiswa dengan ID ${id} tidak ditemukan`;

    this.mahasiswa[index] = { ...this.mahasiswa[index], ...updateData };
    return this.mahasiswa[index];
  }

  delete(id: number): string {
    const index = this.mahasiswa.findIndex((mhs) => mhs.id === id);
    if (index === -1) return `Mahasiswa dengan ID ${id} tidak ditemukan`;

    this.mahasiswa.splice(index, 1);
    return `Mahasiswa dengan ID ${id} berhasil dihapus`;
  }
}

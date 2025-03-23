import { Injectable, NotFoundException } from '@nestjs/common';
import { Mahasiswa } from './mahasiswa.entity';

@Injectable()
export class MahasiswaService {
  private mahasiswaList: Mahasiswa[] = [];

  findAll(): Mahasiswa[] {
    return this.mahasiswaList;
  }

  findOne(id: number): Mahasiswa {
    const mahasiswa = this.mahasiswaList.find((m) => m.id === id);
    if (!mahasiswa) {
      throw new NotFoundException(`Mahasiswa dengan ID ${id} tidak ditemukan`);
    }
    return mahasiswa;
  }

  create(mahasiswa: Mahasiswa): Mahasiswa {
    mahasiswa.id = this.mahasiswaList.length + 1; // Auto-generate ID
    this.mahasiswaList.push(mahasiswa);
    return mahasiswa;
  }

  update(id: number, updateData: Partial<Mahasiswa>): Mahasiswa {
    const mahasiswa = this.findOne(id);
    Object.assign(mahasiswa, updateData);
    return mahasiswa;
  }

  delete(id: number): void {
    const index = this.mahasiswaList.findIndex((m) => m.id === id);
    if (index === -1) {
      throw new NotFoundException(`Mahasiswa dengan ID ${id} tidak ditemukan`);
    }
    this.mahasiswaList.splice(index, 1);
  }
}

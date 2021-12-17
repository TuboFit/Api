import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTreinoDto } from './dto/create-treino.dto';
import { UpdateTreinoDto } from './dto/update-treino.dto';
import { Treino } from './entities/treino.entity';

@Injectable()
export class TreinosService {
  constructor(
    @Inject('TREINO_REPOSITORY')
    private treinoRepository: Repository<Treino>,
  ) { }

  create(createTreinoDto: CreateTreinoDto) {
    const treino = new Treino(createTreinoDto)
    return this.treinoRepository.save(treino);
  }

  findAll(): Promise<Treino[]> {
    return this.treinoRepository.find();
  }

  findOne(id: string) {
    return this.treinoRepository.findOne(id);
  }

  async update(id: string, updateTreinoDto: UpdateTreinoDto) {
    try {
      const updateTreino = new Treino(updateTreinoDto)
      const treino = await this.treinoRepository.findOne(id)

      if (treino) {
        this.treinoRepository.merge(treino, updateTreino)
        await this.treinoRepository.save(treino)
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async remove(id: string) {
    try {
      const treino = await this.treinoRepository.findOne(id)
      if (treino) return await this.treinoRepository.delete(id);
    } catch (error) {
      return new Error(error.message)
    }
  }
}

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
    return `This action returns a #${id} treino`;
  }

  update(id: string, updateTreinoDto: UpdateTreinoDto) {
    return `This action updates a #${id} treino`;
  }

  remove(id: string) {
    return `This action removes a #${id} treino`;
  }
}

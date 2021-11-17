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
    const treino = new Treino();
    treino.aluno = createTreinoDto.dados_aluno;
    treino.professor = createTreinoDto.dados_professor;
    treino.dia = createTreinoDto.dia;
    treino.nivel = createTreinoDto.nivel;
    treino.grup_muscular = createTreinoDto.grup_muscular;
    treino.exercicios = createTreinoDto.exercicios;
    return this.treinoRepository.save(treino);
  }

  findAll(): Promise<Treino[]> {
    return this.treinoRepository.find();
  }

  findOne(id: string): Promise<Treino> {
    return this.treinoRepository.findOne({ id: id });
  }

  update(id: string, updateTreinoDto: UpdateTreinoDto) {
    return this.treinoRepository.update({ id: id }, updateTreinoDto);
  }

  remove(id: string) {
    return this.treinoRepository.delete({ id: id });
  }
}

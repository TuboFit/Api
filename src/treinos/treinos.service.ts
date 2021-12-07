import { Inject, Injectable } from '@nestjs/common';
import { Professor } from 'src/professores/entities/professor.entity';
import { JoinColumn, Repository } from 'typeorm';
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
    try {
      const treino = new Treino();
      treino.aluno = createTreinoDto.dados_aluno;
      treino.professor = createTreinoDto.professor;
      treino.nivel = createTreinoDto.nivel;
      treino.exercicios = createTreinoDto.exercicios;
      return this.treinoRepository.save(treino);
    } catch (error) {
      return error
    }
  }

  findAll(): Promise<Treino[]> {
    try {

      return this.treinoRepository.find()
    } catch (error) {
      return error
    }
  }

  findOne(id: string): Promise<Treino> {
    try {

      return this.treinoRepository.findOne({ id: id });
    } catch (error) {
      return error
    }
  }

  update(id: string, updateTreinoDto: UpdateTreinoDto) {
    try {
      return this.treinoRepository.save(updateTreinoDto, { data: { id } });

    } catch (error) {
      return error
    }
  }

  remove(id: string) {
    try {
      return this.treinoRepository.delete({ id: id });

    } catch (error) {
      return error
    }
  }
}

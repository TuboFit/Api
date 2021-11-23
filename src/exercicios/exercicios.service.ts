import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateExercicioDto } from './dto/create-exercicio.dto';
import { UpdateExercicioDto } from './dto/update-exercicio.dto';
import { Exercicio } from './entities/exercicio.entity';

@Injectable()
export class ExerciciosService {
  constructor(
    @Inject('EXERCICIO_REPOSITORY')
    private exercicioRepository: Repository<Exercicio>,
  ) { }
  create(createExercicioDto: CreateExercicioDto) {
    const exercicio = new Exercicio();
    exercicio.grup_muscular = createExercicioDto.grup_muscular;
    exercicio.nome = createExercicioDto.nome;
    exercicio.carga = createExercicioDto.carga;
    exercicio.dia = createExercicioDto.dia;
    exercicio.descricao = createExercicioDto.descricao;
    exercicio.num_repeticoes = createExercicioDto.num_repeticoes;
    return this.exercicioRepository.save(exercicio);
  }

  findAll(): Promise<Exercicio[]> {
    return this.exercicioRepository.find();
  }

  findOne(id: string): Promise<Exercicio> {
    return this.exercicioRepository.findOne({ id: id });
  }

  update(id: string, updateExercicioDto: UpdateExercicioDto) {
    return this.exercicioRepository.update({ id: id }, updateExercicioDto);
  }

  remove(id: string) {
    return this.exercicioRepository.delete({ id: id });
  }
}

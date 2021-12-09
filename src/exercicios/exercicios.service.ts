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
  async create(createExercicioDto: CreateExercicioDto) {
    try {
      const exercicio = new Exercicio();
      exercicio.grup_muscular = createExercicioDto.grup_muscular;
      exercicio.nome = createExercicioDto.nome;
      exercicio.carga = createExercicioDto.carga;
      exercicio.descricao = createExercicioDto.descricao;
      exercicio.num_repeticoes = createExercicioDto.num_repeticoes;

      return await this.exercicioRepository.save(exercicio);
    } catch (error) {
      return error
    }
  }

  async findAll(): Promise<Exercicio[]> {
    try {
      return await this.exercicioRepository.find();

    } catch (error) {
      return error
    }
  }

  async findOne(id: string): Promise<Exercicio> {
    return await this.exercicioRepository.findOne({ id: id });
  }

  async update(id: string, updateExercicioDto: UpdateExercicioDto) {
    try {
      const getExercicio = await this.exercicioRepository.findOne(id)
      this.exercicioRepository.merge(getExercicio, updateExercicioDto)
      return await this.exercicioRepository.save(getExercicio)

    } catch (error) {
      return error
    }
  }

  remove(id: string) {
    try {
      return this.exercicioRepository.delete({ id: id });

    } catch (error) {
      return error
    }
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunosService {
  constructor(
    @Inject('ALUNO_REPOSITORY')
    private alunoRepository: Repository<Aluno>,
  ) { }

  create(createAlunoDto: CreateAlunoDto) {
    try {
      const aluno = new Aluno();
      aluno.altura = createAlunoDto.altura;
      aluno.idade = createAlunoDto.idade;
      aluno.genero = createAlunoDto.genero;
      aluno.peso = createAlunoDto.peso;
      aluno.imc = createAlunoDto.imc;
      aluno.tmb = createAlunoDto.tmb;
      aluno.usuario = createAlunoDto.usuario;
      aluno.dados = createAlunoDto.dados;
      aluno.treino = createAlunoDto.treino;

      return this.alunoRepository.save(aluno);

    } catch (error) {
      return error
    }

  }

  findAll(): Promise<Aluno[]> {
    try {
      return this.alunoRepository.find();
    } catch (error) {
      return error
    }
  }

  findOne(id: string): Promise<Aluno> {
    try {
      return this.alunoRepository.findOne({ id: id });
    } catch (error) {
      return error
    }
  }

  async update(id: string, updateAlunoDto: UpdateAlunoDto) {
    try {
      const getAluno = await this.alunoRepository.findOne(id)
      this.alunoRepository.merge(getAluno, updateAlunoDto)
      return await this.alunoRepository.save(getAluno)
    } catch (error) {
      return error
    }

  }

  remove(id: string) {
    try {
      return this.alunoRepository.delete({ id: id });

    } catch (error) {
      return error
    }
  }
}

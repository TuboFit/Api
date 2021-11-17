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
  }

  findAll(): Promise<Aluno[]> {
    return this.alunoRepository.find();
  }

  findOne(id: string): Promise<Aluno> {
    return this.alunoRepository.findOne({ id: id });
  }

  update(id: string, updateAlunoDto: UpdateAlunoDto) {
    return this.alunoRepository.update({ id: id }, updateAlunoDto)
  }

  remove(id: string) {
    return this.alunoRepository.delete({ id: id });
  }
}

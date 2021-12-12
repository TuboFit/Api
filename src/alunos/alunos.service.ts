import { Inject, Injectable } from '@nestjs/common';
import { hashSync } from 'bcrypt';
import { setIMC, setTMB } from 'src/utils/Alunos';
import { Repository } from 'typeorm';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunosService {
  constructor(
    @Inject("ALUNO_REPOSITORY")
    private alunoRepository: Repository<Aluno>
  ) { }

  async create(createAlunoDto: CreateAlunoDto) {
    const newAluno = new Aluno(createAlunoDto)
    newAluno.usuario.password = hashSync(createAlunoDto.usuario.password, 10)
    newAluno.imc = setIMC(createAlunoDto.altura, createAlunoDto.peso)
    newAluno.tmb = setTMB(createAlunoDto.altura, createAlunoDto.peso, createAlunoDto.idade, createAlunoDto.genero)
    try {
      const aluno = await this.alunoRepository.save(newAluno)
      if (aluno) return aluno
      throw new Error("Aluno não cadastrado");
    } catch (error) {
      throw new Error(error.message);

    }
  }

  async findAll(): Promise<Aluno[] | Error> {
    const alunos = await this.alunoRepository.find();
    try {
      if (alunos) return alunos
      return new Error("Alunos não encontrados")
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findOne(id: string): Promise<Aluno | Error> {
    const aluno = await this.alunoRepository.findOne(id);
    try {
      if (aluno) return aluno
      return new Error("Aluno não encontrado")
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async update(id: string, updateAlunoDto: UpdateAlunoDto) {
    const getAluno = await this.alunoRepository.findOne(id)
    try {
      if (getAluno) {
        this.alunoRepository.merge(getAluno, updateAlunoDto)
        return await this.alunoRepository.save(getAluno)
      }
      return new Error("Aluno não encontrado")
    } catch (error) {
      throw new Error("Não foi possivel atualizar o aluno")
    }
  }

  async remove(id: string) {
    const aluno = this.alunoRepository.findOne(id)
    try {
      if (aluno) return await this.alunoRepository.delete(id);
      throw new Error("Não foi possivel deletar o aluno")
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

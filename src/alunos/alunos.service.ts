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

  async findOneUser(email: string): Promise<Aluno | Error> {
    const aluno = await this.alunoRepository.findOne({
      where: {
        usuario: {
          email: email
        }
      },
      relations: ['dados', 'usuarios']
    });
    try {
      if (aluno) return aluno
      return new Error("Aluno não encontrado")
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async update(id: string, updateAlunoDto: UpdateAlunoDto) {

    const updateAluno = new Aluno(updateAlunoDto)
    updateAluno.usuario.password = hashSync(updateAlunoDto.usuario.password, 10)
    updateAluno.imc = setIMC(updateAlunoDto.altura, updateAlunoDto.peso)
    updateAluno.tmb = setTMB(updateAlunoDto.altura, updateAlunoDto.peso, updateAlunoDto.idade, updateAlunoDto.genero)
    const getAluno = await this.alunoRepository.findOne(id)
    try {
      if (getAluno) {
        await this.alunoRepository
          .query(`
        UPDATE 
          usuarios
        SET
         "email"='${updateAluno.usuario.email}',
         "password"='${updateAluno.usuario.password}'
        WHERE "id"='${getAluno.usuario.id}'
        `)
        this.alunoRepository.merge(getAluno, updateAluno)
        return await this.alunoRepository.save(getAluno)
      }
      return new Error("Aluno não encontrado")
    } catch (error) {
      throw new Error("Não foi possivel atualizar o aluno")
    }
  }

  async remove(id: string) {
    const aluno = await this.alunoRepository.findOne(id)
    try {
      if (aluno) {
        await this.alunoRepository.delete(id)
        await this.alunoRepository.query(`DELETE FROM dados WHERE "id"='${aluno.dados.id}'`)
        await this.alunoRepository.query(`DELETE FROM usuarios WHERE "id"='${aluno.usuario.id}'`)
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

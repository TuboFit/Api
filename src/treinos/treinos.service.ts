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

  async findAll() {
    try {
      return await this.treinoRepository.find()
    } catch (error) {
      return new Error(error.message)
    }
  }


  async findAllForCref(cref: string) {
    try {
      return await this.treinoRepository.find({ where: { crefProfessor: cref } })
    } catch (error) {
      return new Error(error.message)
    }
  }

  async findOne(id: string) {
    try {
      const treino = await this.treinoRepository.findOne(id);
      const idDados = await this.treinoRepository.query(`SELECT "dadosId" FROM professores WHERE "cref"='${treino.crefProfessor}' LIMIT 1`)
      const professor = await this.treinoRepository.query(`SELECT nome FROM dados WHERE id='${idDados[0].dadosId}' LIMIT 1`)

      if (professor && treino) {
        return { nomeProfessor: professor[0].nome, ...treino }
      }

      throw new Error("Dados não carregados")
    } catch (error) {
      return new Error(error)
    }
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
      return new Error("treino não encontrado")
    } catch (error) {
      return new Error(error.message)
    }
  }
}

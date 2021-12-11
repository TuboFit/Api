import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateDadosDto } from './dto/create-dado.dto';
import { UpdateDadosDto } from './dto/update-dado.dto';
import { Dados } from './entities/dado.entity';
import { Endereco } from './entities/endereco.entity';

@Injectable()
export class DadoService {
  constructor(
    @Inject('DADOS_REPOSITORY')
    private dadosRepository: Repository<Dados>,

    @Inject('ENDERECO_REPOSITORY')
    private enderecoRepository: Repository<Endereco>,
  ) { }

  async create(createDadoDto: CreateDadosDto) {
    const dados_pessoais = new Dados(createDadoDto)
    try {
      const dados_cadastrados = this.dadosRepository.save(dados_pessoais)
      if (dados_cadastrados) return dados_cadastrados
      return new Error("Dados não cadastrados")
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findAll(): Promise<Dados[]> {
    try {
      const dados = await this.dadosRepository.find();
      if (dados.length > 0) return dados
      throw new Error("Dados não encontrados");
    } catch (error) {
      throw new Error(error.message);

    }
  }

  async findOne(id: string): Promise<Dados> {
    try {
      const usuario = await this.dadosRepository.findOne(id);
      if (usuario) return usuario
      throw new Error("Usuario não encontrado");
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(id: string, updateDadoDto: UpdateDadosDto) {
    const newDados = new Dados(updateDadoDto)
    try {
      const getDado = await this.dadosRepository.findOne(id)
      if (getDado) {
        this.dadosRepository.merge(getDado, newDados)
        return await this.dadosRepository.save(getDado)
      }
      throw new Error("Não foi possivel atualizar usuario");
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async remove(id: string) {
    const dados = this.dadosRepository.findOne(id)
    try {
      if (dados) return await this.dadosRepository.delete(id)
      throw new Error("Não foi possivel deletar dados");
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

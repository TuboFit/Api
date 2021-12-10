import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Pessoa } from './entities/pessoa.entity';

@Injectable()
export class PessoasService {
  constructor(
    @Inject('PESSOA_REPOSITORY')
    private pessoaRepository: Repository<Pessoa>,
  ) { }

  create(createPessoaDto: CreatePessoaDto) {
    try {
      const pessoa = new Pessoa()
      pessoa.nome = createPessoaDto.nome
      pessoa.cpf = createPessoaDto.cpf
      pessoa.contato = createPessoaDto.Contato
      pessoa.endereco = createPessoaDto.Endereco
      pessoa.usuario = createPessoaDto.Usuario
      this.pessoaRepository.save(pessoa)
    } catch (error) {
      return error
    }

  }

  findAll(): Promise<Pessoa[]> {
    try {
      return this.pessoaRepository.find();

    } catch (error) {
      return error
    }
  }

  findOne(id: string): Promise<Pessoa> {
    try {
      return this.pessoaRepository.findOne({ id: id });
    } catch (error) {
      return error
    }
  }

  async update(id: string, updatePessoaDto: UpdatePessoaDto) {
    try {
      const getPessoa = await this.pessoaRepository.findOne(id)
      this.pessoaRepository.merge(getPessoa, updatePessoaDto)
      return await this.pessoaRepository.save(getPessoa)
    } catch (error) {
      return error
    }
  }

  remove(id: string) {
    try {
      return this.pessoaRepository.delete({ id: id });

    } catch (error) {
      return error
    }

  }
}

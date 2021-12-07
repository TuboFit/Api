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
      pessoa.nome = createPessoaDto.nome;
      pessoa.cpf = createPessoaDto.cpf;
      pessoa.contato = createPessoaDto.Contato;
      pessoa.endereco = createPessoaDto.Endereco;
      return this.pessoaRepository.save(pessoa)
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

  update(id: string, updatePessoaDto: UpdatePessoaDto) {
    try {
      return this.pessoaRepository.save(updatePessoaDto, { data: { id: id } });
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

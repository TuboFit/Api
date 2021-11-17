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
    const pessoa = new Pessoa()
    pessoa.nome = createPessoaDto.nome;
    pessoa.cpf = createPessoaDto.cpf;
    pessoa.contato = createPessoaDto.Contato;
    pessoa.endereco = createPessoaDto.Endereco;
    return this.pessoaRepository.save(pessoa)
  }

  findAll(): Promise<Pessoa[]> {
    return this.pessoaRepository.find();
  }

  findOne(id: string): Promise<Pessoa> {
    return this.pessoaRepository.findOne({ id: id });
  }

  update(id: string, updatePessoaDto: UpdatePessoaDto) {
    return this.pessoaRepository.update({ id: id }, updatePessoaDto);
  }

  remove(id: string) {
    return this.pessoaRepository.delete({ id: id });
  }
}

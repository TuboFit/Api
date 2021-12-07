import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';

@Injectable()
export class EnderecosService {
  constructor(
    @Inject('ENDERECO_REPOSITORY')
    private enderecoRepository: Repository<Endereco>,
  ) { }
  create(createEnderecoDto: CreateEnderecoDto) {
    try {
      const endereco = new Endereco();
      endereco.logradouro = createEnderecoDto.logradouro;
      endereco.numero = createEnderecoDto.numero;
      endereco.bairro = createEnderecoDto.bairro;
      endereco.cidade = createEnderecoDto.cidade;
      endereco.uf = createEnderecoDto.uf;
      return this.enderecoRepository.save(endereco);
    } catch (error) {
      return error
    }

  }

  findAll(): Promise<Endereco[]> {
    try {
      return this.enderecoRepository.find();

    } catch (error) {
      return error
    }
  }

  findOne(id: string): Promise<Endereco> {
    try {
      return this.enderecoRepository.findOne({ id: id })
    } catch (error) {
      return error
    }
  }

  update(id: string, updateEnderecoDto: UpdateEnderecoDto) {
    try {
      return this.enderecoRepository.save(updateEnderecoDto, { data: { id } });
    } catch (error) {
      return error
    }
  }

  remove(id: string) {
    try {
      return this.enderecoRepository.delete({ id: id })
    } catch (error) {
      return error
    }
  }
}

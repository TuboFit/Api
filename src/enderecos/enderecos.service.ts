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
    const endereco = new Endereco();
    endereco.logradouro = createEnderecoDto.logradouro;
    endereco.numero = createEnderecoDto.numero;
    endereco.bairro = createEnderecoDto.bairro;
    endereco.cidade = createEnderecoDto.cidade;
    endereco.uf = createEnderecoDto.uf;
    return this.enderecoRepository.save(endereco);
  }

  findAll(): Promise<Endereco[]> {
    return this.enderecoRepository.find();
  }

  findOne(id: string): Promise<Endereco> {
    return this.enderecoRepository.findOne({ id: id })
  }

  update(id: string, updateEnderecoDto: UpdateEnderecoDto) {
    return this.enderecoRepository.update({ id: id }, updateEnderecoDto);
  }

  remove(id: string) {
    return `This action removes a #${id} endereco`;
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { Contato } from './entities/contato.entity';

@Injectable()
export class ContatosService {
  constructor(
    @Inject('CONTATO_REPOSITORY')
    private contatoRepository: Repository<Contato>,
  ) { }
  create(createContatoDto: CreateContatoDto) {
    const contato = new Contato;
    contato.email = createContatoDto.email;
    contato.telefone = createContatoDto.telefone
    return this.contatoRepository.save(contato);
  }

  findAll(): Promise<Contato[]> {
    return this.contatoRepository.find();
  }

  findOne(id: string) {
    return this.contatoRepository.findOne({ id: id });
  }

  update(id: string, updateContatoDto: UpdateContatoDto) {
    return this.contatoRepository.update({ id: id }, updateContatoDto);
  }

  remove(id: string) {
    return this.contatoRepository.delete({ id: id });
  }
}

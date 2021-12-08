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
    try {
      const contato = new Contato;
      contato.email = createContatoDto.email;
      contato.telefone = createContatoDto.telefone
      return this.contatoRepository.save(contato);
    } catch (error) {
      return error
    }

  }

  findAll(): Promise<Contato[]> {
    try {
      return this.contatoRepository.find();
    } catch (error) {
      return error
    }
  }

  findOne(id: string): Promise<Contato> {
    try {
      return this.contatoRepository.findOne({ id: id });

    } catch (error) {
      return error
    }
  }

  update(id: string, updateContatoDto: UpdateContatoDto) {
    try {
      return this.contatoRepository.update(id, updateContatoDto);

    } catch (error) {
      return error
    }
  }

  remove(id: string) {
    try {
      return this.contatoRepository.delete({ id: id });
    } catch (error) {
      return error
    }
  }
}

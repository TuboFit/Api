import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TreinosService } from './treinos.service';
import { CreateTreinoDto } from './dto/create-treino.dto';
import { UpdateTreinoDto } from './dto/update-treino.dto';

@Controller('treinos')
export class TreinosController {
  constructor(private readonly treinosService: TreinosService) {}

  @Post()
  create(@Body() createTreinoDto: CreateTreinoDto) {
    return this.treinosService.create(createTreinoDto);
  }

  @Get()
  findAll() {
    return this.treinosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treinosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTreinoDto: UpdateTreinoDto) {
    return this.treinosService.update(+id, updateTreinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treinosService.remove(+id);
  }
}

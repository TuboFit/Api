import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, HttpStatus, Req } from '@nestjs/common';
import { TreinosService } from './treinos.service';
import { CreateTreinoDto } from './dto/create-treino.dto';
import { UpdateTreinoDto } from './dto/update-treino.dto';
import { Request } from 'express';

@Controller('treinos')
export class TreinosController {
  constructor(private readonly treinosService: TreinosService) { }

  @Post()
  create(@Body() createTreinoDto: CreateTreinoDto) {
    return this.treinosService.create(createTreinoDto);
  }

  @Get()
  findAll() {
    return this.treinosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.treinosService.findOne(id);
    } catch (error) {
      return new HttpException(error, HttpStatus.BAD_REQUEST)
    }
  }


  @Get('/treinosby/teacher')
  async findForCref(@Query('cref') cref: string) {
    try {
      return await this.treinosService.findAllForCref(cref);
    } catch (error) {
      return new HttpException(error, HttpStatus.BAD_REQUEST)
    }

  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTreinoDto: UpdateTreinoDto) {
    return this.treinosService.update(id, updateTreinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treinosService.remove(id);
  }
}

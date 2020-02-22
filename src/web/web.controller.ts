import { Controller, Get, Res, Param } from '@nestjs/common';
import { RecetaService } from 'src/receta/receta.service';

@Controller('web')
export class WebController {

    constructor(private readonly recetaService: RecetaService) {}

    // GET /web/recetas
    @Get('recetas')
    async listar(@Res() res) {
        const resultado = await this.recetaService.listar();
        return res.render('publico_index', {recetas: resultado});
    }

    // GET /web/recetas/id
    @Get('recetas/:id')
    async buscarPorId(@Res() res, @Param('id') id: string) {
        const resultado = await this.recetaService.buscarPorId(id);
        return res.render('publico_receta', {receta: resultado});
    }
}

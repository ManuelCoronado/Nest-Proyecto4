import { RecetaService } from 'src/receta/receta.service';
export declare class WebController {
    private readonly recetaService;
    constructor(recetaService: RecetaService);
    listar(res: any): Promise<any>;
    buscarPorId(res: any, id: string): Promise<any>;
}

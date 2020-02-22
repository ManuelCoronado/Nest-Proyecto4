"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const receta_service_1 = require("../receta/receta.service");
let WebController = class WebController {
    constructor(recetaService) {
        this.recetaService = recetaService;
    }
    async listar(res) {
        const resultado = await this.recetaService.listar();
        return res.render('publico_index', { recetas: resultado });
    }
    async buscarPorId(res, id) {
        const resultado = await this.recetaService.buscarPorId(id);
        return res.render('publico_receta', { receta: resultado });
    }
};
__decorate([
    common_1.Get('recetas'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WebController.prototype, "listar", null);
__decorate([
    common_1.Get('recetas/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], WebController.prototype, "buscarPorId", null);
WebController = __decorate([
    common_1.Controller('web'),
    __metadata("design:paramtypes", [receta_service_1.RecetaService])
], WebController);
exports.WebController = WebController;
//# sourceMappingURL=web.controller.js.map
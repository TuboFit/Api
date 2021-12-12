"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDadosDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dado_dto_1 = require("./create-dado.dto");
class UpdateDadosDto extends (0, mapped_types_1.PartialType)(create_dado_dto_1.CreateDadosDto) {
}
exports.UpdateDadosDto = UpdateDadosDto;
//# sourceMappingURL=update-dado.dto.js.map
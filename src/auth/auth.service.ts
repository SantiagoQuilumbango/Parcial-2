import { Injectable } from '@nestjs/common';
import { CochesService } from 'src/coches/coches.service'; // Cambiado el nombre del servicio de usuarios a coches
import { JwtService } from '@nestjs/jwt';
import { CocheDTO } from 'src/coches/dto/coche.dto'; // Cambiado el DTO de usuario a coche
@Injectable()
export class AuthService {
  constructor(
    private readonly cochesService: CochesService, // Cambiado el nombre del servicio de usuarios a coches
    private readonly jwtService: JwtService,
  ) {}

  async validarCoche(matricula: string, idModelo: string): Promise<any> {
    // Cambiado el método de búsqueda por uno relacionado con coches
    const coche = await this.cochesService.buscarPorMatricula(matricula);

    // No se requiere verificar contraseña en este contexto, se omite.

    if (coche && coche.ID_Modelo === idModelo) return coche;
    return null;
  }
  async singIn(coche: any) {
    // No hay cambios necesarios aquí ya que no estamos trabajando con autenticación de usuario.
    const payload = {
      matricula: coche.matricula,
      sub: coche.ID_Coche,
    };
    return { access_token: this.jwtService.sign(payload) };
  }
  async singUp(cocheDTO: CocheDTO) {
    // Cambiado el método de inserción para que sea consistente con la lógica de coches
    return this.cochesService.insertar(cocheDTO);
  }
}

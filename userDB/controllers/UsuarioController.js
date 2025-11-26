import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
  constructor() {
    this.listeners = [];
  }

  // Inicializar el controlador con el Service
  async initialize() {
    await DatabaseService.initialize();
  }

  // SELECT
  async obtenerUsuarios() {
    try {
      const data = await DatabaseService.getAll();
      return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw new Error('No se pudieron cargar los usuarios');
    }
  }

  // INSERT
  async crearUsuario(nombre) {
    try {
      // 1. Validar
      Usuario.validar(nombre);

      // 2. Insertar en BD
      const nuevoUsuario = await DatabaseService.add(nombre.trim());

      // 3. Notificar observadores
      this.notifyListeners();

      // 4. Retornar en forma de modelo
      return new Usuario(
        nuevoUsuario.id,
        nuevoUsuario.nombre,
        nuevoUsuario.fecha_creacion
      );
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }

  // Observadores
  addListener(callback) {
    this.listeners.push(callback);
  }
  removeListener(callback) {
    this.listeners = this.listeners.filter(l => l !== callback);
  }
  notifyListeners() {
    this.listeners.forEach(callback => callback());
  }
}

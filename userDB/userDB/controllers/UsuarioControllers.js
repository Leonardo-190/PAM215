import Usuario from '../Models/Usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
  constructor() {
    this.listeners = [];
  }

  addListener(callback) {
    this.listeners.push(callback);
  }

  removeListener(callback) {
    this.listeners = this.listeners.filter(l => l !== callback);
  }

  notifyListeners() {
    this.listeners.forEach(callback => callback());
  }

  async initialize() {
    try {
      await DatabaseService.initialize();
    } catch (error) {
      console.error('Error inicializando:', error);
      throw error;
    }
  }

  async obtenerUsuarios() {
    try {
      const data = await DatabaseService.getAll();
      return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw new Error('No se pudieron cargar los usuarios');
    }
  }

  async crearUsuario(nombre) {
    try {
      Usuario.validar(nombre);
      const nuevoUsuario = await DatabaseService.add(nombre.trim());
      this.notifyListeners();
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
}

import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
  constructor() {
    this.listeners = [];
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

  // Inicialización
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

  // UPDATE
  async actualizarUsuario(id, nuevoNombre) {
    try {
      Usuario.validar(nuevoNombre);
      const actualizado = await DatabaseService.update(id, nuevoNombre.trim());
      this.notifyListeners();
      return new Usuario(
        actualizado.id,
        actualizado.nombre,
        new Date().toISOString()
      );
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      throw error;
    }
  }

  // DELETE
  async eliminarUsuario(id) {
    try {
      await DatabaseService.delete(id);
      this.notifyListeners();
      return true;
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      throw error;
    }
  }
}

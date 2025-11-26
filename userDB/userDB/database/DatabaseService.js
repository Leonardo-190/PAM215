import { Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';

class DatabaseService {
  constructor() {
    this.db = null;
    this.storageKey = 'usuarios';
  }

  async initialize() {
    if (Platform.OS === 'web') {
      console.log('Usando LocalStorage para web');
      if (!localStorage.getItem(this.storageKey)) {
        localStorage.setItem(this.storageKey, JSON.stringify([]));
      }
    } else {
      console.log('Usando SQLite para móvil');
      this.db = SQLite.openDatabase('miapp.db');
      return new Promise((resolve, reject) => {
        this.db.transaction(tx => {
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS usuarios (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              nombre TEXT NOT NULL,
              fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
            );`,
            [],
            () => resolve(),
            (_, error) => reject(error)
          );
        });
      });
    }
  }

  async getAll() {
    if (Platform.OS === 'web') {
      try {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
      } catch (error) {
        console.error('Error leyendo usuarios web:', error);
        return [];
      }
    } else {
      return new Promise((resolve, reject) => {
        this.db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM usuarios ORDER BY id DESC',
            [],
            (_, { rows }) => {
              resolve(rows._array || []);
            },
            (_, error) => reject(error)
          );
        });
      });
    }
  }

  async add(nombre) {
    if (Platform.OS === 'web') {
      const usuarios = await this.getAll();
      const nuevoUsuario = {
        id: Date.now(),
        nombre,
        fecha_creacion: new Date().toISOString()
      };
      usuarios.unshift(nuevoUsuario);
      localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
      return nuevoUsuario;
    } else {
      return new Promise((resolve, reject) => {
        this.db.transaction(tx => {
          tx.executeSql(
            'INSERT INTO usuarios(nombre) VALUES(?)',
            [nombre],
            () => {
              tx.executeSql(
                'SELECT last_insert_rowid() as id',
                [],
                (_, { rows }) => {
                  const id = rows._array[0].id;
                  resolve({
                    id,
                    nombre,
                    fecha_creacion: new Date().toISOString()
                  });
                },
                (_, error) => reject(error)
              );
            },
            (_, error) => reject(error)
          );
        });
      });
    }
  }
}

export default new DatabaseService();

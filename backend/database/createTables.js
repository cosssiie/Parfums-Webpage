import { getConnection } from './database.js';

const createTables = async () => {
  const connection = await getConnection();

  try {
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS perfume (
        id_perfume INT AUTO_INCREMENT PRIMARY KEY,
        name_perfume VARCHAR(255) NOT NULL,
        production_date DATE NOT NULL,
        shelf_life INT NOT NULL,
        description_perfume TEXT NOT NULL
      );
    `);

    await connection.execute(`
      CREATE TABLE IF NOT EXISTS price (
        id_price INT AUTO_INCREMENT PRIMARY KEY,
        id_perfume INT NOT NULL,
        volume INT NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        FOREIGN KEY (id_perfume) REFERENCES perfume(id_perfume) ON DELETE CASCADE
      );
    `);

    await connection.execute(`
      CREATE TABLE IF NOT EXISTS notes (
        id_notes INT AUTO_INCREMENT PRIMARY KEY,
        id_perfume INT NOT NULL,
        type ENUM('top', 'heart', 'base') NOT NULL,
        note VARCHAR(100) NOT NULL,
        FOREIGN KEY (id_perfume) REFERENCES perfume(id_perfume) ON DELETE CASCADE
      );
    `);

    console.log('Tables created successfully');
  } catch (err) {
    console.error('Error creating tables:', err);
  } finally {
    await connection.end();
  }
};

createTables();

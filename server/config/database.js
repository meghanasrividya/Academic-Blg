// server/config/database.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let sequelize;

if (process.env.DATABASE_URL) {
  // 🛰️ Use remote DB when DATABASE_URL is present (e.g. in production)
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgresql',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  // 💻 Local development fallback using config.json
  const configPath = path.join(__dirname, 'config.json');
  const configFile = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

  const env = process.env.NODE_ENV || 'development';
  const config = configFile[env];

  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      host: config.host,
      dialect: config.dialect,
      logging: false,
    }
  );
}

export default sequelize;

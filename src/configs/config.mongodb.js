'use strict';

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 3052,
  },
  db: {
    host: process.env.DEV_DB_HOST || '127.0.0.1',
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || 'ecommerce-gas',
  },
};

const pro = {
  app: {
    port: process.env.PRODUCT_APP_PORT || 3000,
  },
  db: {
    host: process.env.PRODUCT_DB_HOST || '127.0.0.1',
    port: process.env.PRODUCT_DB_PORT || 27017,
    name: process.env.PRODUCT_DB_NAME || 'dbProduction',
  },
};

const config = { dev, pro };
const env = process.env.NODE_ENV || 'dev';
console.log(`env::: ${env.trim()}`);
module.exports = config[env.trim()];

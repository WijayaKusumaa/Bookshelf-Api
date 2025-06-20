// src/server.js

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  // PENTING: Jalankan server SEBELUM mencoba menampilkan informasinya
  await server.start();

  // Baris ini HANYA akan berjalan SETELAH server.start() selesai
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
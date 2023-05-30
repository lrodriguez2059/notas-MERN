require('dotenv').config();
const app = require('./app');
require('./database');





async function main() {

  await  app.listen(app.get('port'));
  console.log(`listening on port ${app.get('port')}`);
}
// creamos una funcion principal para mantener una estructura del servidor, utilizamos Async Await para evitar callbacks

main();
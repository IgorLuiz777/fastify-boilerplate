import app from "./app";

const port = 3000;

app.listen({
  host: '0.0.0.0',
  port: port,
}).then(() => console.log('Servidor HTTP rodando. Porta: ' + port));

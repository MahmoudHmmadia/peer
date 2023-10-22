import express from "express";
import http from "http";
const app = express();
const server = http.createServer(app);
import { ExpressPeerServer } from "peer";
const expressPeerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/",
  corsOptions: {
    origin: true,
  },
});
app.use(expressPeerServer);
server.listen(process.env.PORT || 3500, () => {
  console.log("asd");
});

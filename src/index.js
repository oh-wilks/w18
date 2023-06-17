// 1. IMPORTACIONES
const express = require("express");
const app = express();
const PORT = 4000;

// 2. MIDDLEWARES
app.use(express.json());

// 3. RUTAS
app.get("/", (req, res) => {
  return res.json({
    msg: "Bienvenidos al API",
  });
});

app.use("/users", require("./routes/users.routes"));

// 4. SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor en linea en el puerto ${PORT}`);
});

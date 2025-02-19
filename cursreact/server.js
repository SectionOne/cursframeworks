import express from "express";
import cors from "cors"; // Importa el middleware cors

const app = express();
const PORT = 5000;

// Configura cors per permetre sol·licituds des de http://localhost:5175
app.use(cors({
  origin: "http://localhost:5175", // Permet sol·licituds des d'aquest origen
  methods: ["GET", "POST", "PUT", "DELETE"], // Mètodes HTTP permesos
  credentials: true, // Permet enviar credencials (cookies, headers d'autenticació, etc.)
}));

// Ruta per obtenir els usuaris
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Joan" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Pere" },
  ]);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionament a http://localhost:${PORT}`);
});
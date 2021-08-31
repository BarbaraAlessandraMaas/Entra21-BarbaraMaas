const express = require("express");
const app = express();
const PORT = 3000;

// Importando as rotas
const usersRoutes = require("./routes/usersRoutes");

// Definindo os middlewares
app.use(express.json());

// Definindo as rotas
app.use("/users", usersRoutes);

// Rotas da raiz "/"
app.get("/", (request, response) => {    
    response.send("Hello World");
});

app.post("/", (request, response) => {
    response.send("Método POST");
});

app.put("/", (request, response) => {
    response.send("Método PUT");
});

app.delete("/", (request, response) => {
    response.send("Método DELETE");
});

app.listen(PORT, () => console.log("O servidor está rodando!"));
const fsPromises = require("fs/promises");
const path = require("path");

(async () => {
    const user = await getUserByName("Pedro");
    user ? console.log(user) : console.log("Usuário não encontrado!")
    
})();

async function getUserByName(name) {
    const data = await fsPromises.readFile(path.resolve(__dirname, "questao_02.json"));
    const usuarios = JSON.parse(data);
    return usuarios.find(user => user.nome === name);
}
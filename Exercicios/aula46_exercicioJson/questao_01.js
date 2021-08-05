const fsPromises = require("fs/promises");
const path = require("path");
const os = require("os");

(async () => {
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "questao_01.txt"));
        let array = data.toString("utf-8").split(os.EOL);
        console.log(array.filter(nome => nome.startsWith("A")));
    } catch (e) {
        console.log(e.message);
    }
})();
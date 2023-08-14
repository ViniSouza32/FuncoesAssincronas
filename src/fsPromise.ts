import fs from "fs";
import path from "path";

const fsPromises = fs.promises;

async function main() {
  let retornoArquivo = await fsPromises.readFile(path.resolve('src/users.json'));

  console.log(retornoArquivo.toString());
}

main();
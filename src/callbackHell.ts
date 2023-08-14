import fs from "fs";
import path from "path";
import { test } from "node:test";

let users = [];

fs.readFile("src/users.json", function (error, data: Buffer): void {
  //de buffer pra string
  users = JSON.parse(data.toString());

  //adiciona 2 novos itens ao array
  users.push({ name: "Jonathan", age: 26, occupation: "Engenheiro Ambiental" });
  users.push({ name: "Maria", age: 19, occupation: "Desenvovedor" });

  //trasnforma array de objetos em texto
  let text = JSON.stringify(users);

  //atualiza o arquivo
  fs.writeFile(path.resolve("src/users.json"), text, function (error) {
    //de buffer pra string
    users = JSON.parse(data.toString());

    //adiciona 2 novos itens ao array
    users.push({
      name: "Jonathan",
      age: 26,
      occupation: "Engenheiro Ambiental",
    });
    users.push({ name: "Maria", age: 19, occupation: "Desenvovedor" });

    //trasnforma array de objetos em texto
    let text = JSON.stringify(users);

    //atualiza o arquivo
    fs.writeFile(path.resolve("src/users.json"), text, function (error) {
      //de buffer pra string
      users = JSON.parse(data.toString());

      //adiciona 2 novos itens ao array
      users.push({
        name: "Jonathan",
        age: 26,
        occupation: "Engenheiro Ambiental",
      });
      users.push({ name: "Maria", age: 19, occupation: "Desenvovedor" });

      //trasnforma array de objetos em texto
      let text = JSON.stringify(users);

      //atualiza o arquivo
      fs.writeFile(path.resolve("src/users.json"), text, function (error) {
        console.log(text);
      });
    });
  });
});
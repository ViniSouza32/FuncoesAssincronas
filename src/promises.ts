import fs, { copyFileSync } from "fs";
import path from "path";

console.log('ola aqui de cima');

function logar() {
  console.log('ola dentro da funcao');
}

console.log('ola apos a declaracao da funcao');

let testePromise = new Promise(function (resolve, reject) {
  if (true) {
    setTimeout(function () {
      resolve('ola dentro da promise');
    }, 3000);
  } else {
    reject('algo deu errado');
  }
});

testePromise.then(function (data) {
  //promise deu certo
  console.log(data);
}).catch(function (err) {
  //promise deu errado
  console.log(err);
})

logar();
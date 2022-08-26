import jwt from "jsonwebtoken";

const chave = "chaveSecreta";

const token = jwt.sign(
    {
        nome: "usuario",
        curso: "Segurança em Node.js"
    }, chave
);

const arr = token.split(".");
const tokenObj =  {
        header: arr[0], 
        payload: arr[1], 
        signature: arr[2]
    }

console.log(tokenObj);

const tokenDecodificado = jwt.verify(token, chave);

console.log(tokenDecodificado);
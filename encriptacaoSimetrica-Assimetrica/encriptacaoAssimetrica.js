import { generateKeyPairSync, publicDecrypt, privateDecrypt, publicEncrypt } from 'crypto';

const {privateKey, publicKey } = generateKeyPairSync('rsa',
    {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    }
)

console.log(publicKey, privateKey);

// ----------------------------------------------

const dadosCriptografados = publicEncrypt(publicKey, Buffer.from('mensagem'));

console.log(dadosCriptografados.toString('utf-8'));

// ----------------------------------------------

const dadosDecifrados = privateDecrypt(privateKey, dadosCriptografados);

console.log(dadosDecifrados.toString('utf-8'));
import { generateKeyPairSync, createSign, createVerify } from 'crypto';

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

let dados = "Esta string será assinada.";

//  Assinador:

const assinador = createSign('rsa-sha256');
assinador.update(dados);

const assinatura = assinador.sign(privateKey, 'hex');

console.log(`${assinatura}`);

// Exemplo de alteração do documento assinado -- Descomente para testar
// dados += "Alteração no documento";

// Envio do documento, assinatura e chave pública:

const verificador = createVerify('rsa-sha256');
verificador.update(dados);

const ehVerificado = verificador.verify(publicKey, assinatura, 'hex');

console.log("O documento " + (ehVerificado ? "é verificado." : "não é verificado."));
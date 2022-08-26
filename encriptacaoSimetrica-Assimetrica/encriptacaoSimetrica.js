import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

const mensagem = 'Exemplo';
const chave = randomBytes(32);
const initVector = randomBytes(16); // vetor de inicialização

const cifra = createCipheriv('aes256', chave, initVector);
const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex');

console.log(`Mensagem cifrada: ${mensagemCifrada}`);

const decifra = createDecipheriv('aes256', chave, initVector);
const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8');

console.log(`Mensagem decifrada: ${mensagemDecifrada.toString('utf-8')}`);

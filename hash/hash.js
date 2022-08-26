import { createHash } from 'crypto';

function criaHash (senha) {
    return createHash('sha256').update(senha).digest('hex');
}

console.log(criaHash('Uma string qualquer'));
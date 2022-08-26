import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashComSal (senha) {
    const tempero = randomBytes(16).toString('hex');
    const senhaHash = scryptSync(senha, tempero, 64).toString('hex');
    return `${tempero}:${senhaHash}`;
}

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }
    autentica(nome, senha){
        if (nome === this.nome){
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');

            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)

            if (hashesCorrespondem){
                console.log("Usuário autenticado com sucesso")
                return true;
            }
        }

        console.log("Usuário ou senha incorretos.")
        return false;
    }
}
const user = new Usuario('João', 'senhaSecreta');
console.log(user);
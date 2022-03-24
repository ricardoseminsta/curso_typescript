/*type User = {
    nome: string,
    idade: number
};*/

interface User {
    nome: string,
    idade: number
}

function resumo(usuario: User) {
    return `Olá ${usuario.nome}, voce tem ${usuario.idade} anos`;
}

resumo({
    nome: 'Ricardo',
    idade: 14
})
function mostrarTexto(
    texto: string,
    alinhamento: 'left' | 'right' | 'center'
    ) {
    return `<div style="text-align:${alinhamento}">${texto}</div>`;
}

mostrarTexto('Ricardo', 'left');
mostrarTexto('Ricardo', 'left')
// mostrarTexto('Ricardo', 'hahaha')

function temNome(nome: string): true | false {
    if(nome !== '') {
        return true;
    } else {
        return false;
    }
}

type Opcoes = {
    width: number,
    height: number
}

function configurar(props: Opcoes | 'auto') {

}

configurar({width: 100, height: 100});
configurar('auto');
configurar('automatico')
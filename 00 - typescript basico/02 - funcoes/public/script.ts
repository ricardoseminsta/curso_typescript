function firstLetterUpperCase(name: string): string {
    let firstLetter = name.charAt(0).toUpperCase();
    
    //return 90;
    return firstLetter + name.substring(1);
}

firstLetterUpperCase('90')

function somar(n1: number, n2: number): number {
    return n1 + n2;
}

let alguma = somar(90, 10)
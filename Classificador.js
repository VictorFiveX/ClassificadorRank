import prompt from 'readline';
import util from 'util';
const rl = prompt.createInterface({ input: process.stdin, output: process.stdout });
const question = util.promisify(rl.question).bind(rl);
const read = (msg) => question(`${msg?msg+'\n':''}`);


console.log("Digite o nome do Heroi");
let nome = await read();
console.log("Digite a quantidade de XP do Heroi");
let Xp = await  read();
let nivel = '';

if (Xp <= 1000){
    nivel = "Ferro";
}else if(Xp >= 1000 && Xp <= 2000){

    nivel = "Bronze";
}else if(Xp >= 2001 && Xp <= 5000){

    nivel = "Prata";
}else if(Xp >= 6001 && Xp <= 7000){

    nivel = "Ouro";
}else if(Xp >= 7001 && Xp <= 8000){

    nivel = "Ascendente";
}else if(Xp >= 8001 && Xp <= 10000){

    nivel = "Imortal";
}else if(Xp >= 10001){

    nivel = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

rl.close();
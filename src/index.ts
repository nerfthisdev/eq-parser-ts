import * as readline from 'readline';
import { Parser } from './parser';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startCLI() {
    rl.question('Введите данные для парсинга: ', (input) => { input });
}

startCLI();

export class Parser {
    static parseInput(input: string): any {
        return input.split(',').map(item => item.trim());
    }
}

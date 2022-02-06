export function splitIntoWords(sentence: string) {
    return (sentence

            .toLowerCase()
            .split(' ')
            .map(item => item.replace('!', ''))


    )
}

export function multiply(a: number, b: number) {
    return a * b;
}

export function sum(a: number, b: number) {
    return a + b;
}
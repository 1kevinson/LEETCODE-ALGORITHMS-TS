const java: string = 'JAVA';
const javascript: string = 'JAVASCRIPT';

export function getFavouriteLanguage(answer: string): string {
    switch (answer.toUpperCase()) {
        case java.toString():
            return `Your favourite language is ${java}`;
        case javascript.toString():
            return `Your favourite language is ${javascript}`;
        default:
            return 'wrong language...';
    }
}


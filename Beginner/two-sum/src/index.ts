export class TwoSum {

    public getIndice(array: number[]): number[] {
        const arrayOfIndiceNumbers: number[] = [];
        
        arrayOfIndiceNumbers.push(array.indexOf(array[1]));
        arrayOfIndiceNumbers.push(array.indexOf(array[3]));

        return arrayOfIndiceNumbers;
    }
}
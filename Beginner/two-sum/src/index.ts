export class TwoSum {
    getIndice(numbers: number[], target: number): number[] {
        let arrayOfIndices: number[] = [];

        if (numbers.length === 2) {
            arrayOfIndices.push(numbers.indexOf(numbers[0]), numbers.indexOf(numbers[1], 1))
            return arrayOfIndices;
        }

        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === target) {
                    arrayOfIndices.push(numbers.indexOf(numbers[i]), numbers.indexOf(numbers[j]));
                    break;
                }
            }
        }
        return arrayOfIndices;
    }

}
export default class Cell {
    value: number
    
    constructor(value: number) {
        this.value = value;
    }

    setValue(value: number) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }
}
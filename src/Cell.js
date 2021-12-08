'use strict';

export default class Cell {
    constructor(value) {
        this.value = value;
        //this.row = row;
        //this.col = col;
    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }
}
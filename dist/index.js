"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvWriter = void 0;
const fs_1 = require("fs");
class CsvWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',') + ('\n');
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv += '\n';
        // console.log('file save', filename);
    }
    formatRow(value) {
        return this.columns.map((col) => value[col]).join(',');
    }
    addRows(values) {
        let rows = values.map((r) => this.formatRow(r));
        this.csv += rows.join('\n');
    }
}
exports.CsvWriter = CsvWriter;

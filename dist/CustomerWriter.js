"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const customerWriter = new index_1.CsvWriter(['id', 'name', 'fidelityPoints', 'email']);
customerWriter.addRows([
    { id: 1, name: 'Pikachu', fidelityPoints: 2000, email: 'pika@gmail.com' },
    { id: 2, name: 'Snorlax', fidelityPoints: 2, email: 'snorlax@gmail.com' },
    { id: 3, name: 'Squirtel', fidelityPoints: 200000, email: 'caracara@gmail.com' }
]);
customerWriter.save('./data/customers.csv');

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const invoiceWriter = new index_1.CsvWriter(['amount', 'buyer', 'article']);
invoiceWriter.addRows([
    { amount: 50, buyer: 'Pika', article: 'Thunder' },
    { amount: 100, buyer: 'Snorlax', article: 'Rest' },
    { amount: 100, buyer: 'Squirtel', article: 'Some water' }
]);
invoiceWriter.save('./data/invoice.csv');
// invoiceWriter.delete('./data/invoice.csv')

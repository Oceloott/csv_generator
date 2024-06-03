import { CsvWriter } from "./index"


interface Invoice{
    amount: number
    buyer: string
    article: string
}


const invoiceWriter = new CsvWriter<Invoice>(['amount', 'buyer', 'article'])


invoiceWriter.addRows([
    {amount:50, buyer: 'Pika', article: 'Thunder'},
    {amount:100, buyer: 'Snorlax', article: 'Rest'},
    {amount:100, buyer: 'Squirtel', article: 'Some water'}
])


invoiceWriter.save('./data/invoice.csv')
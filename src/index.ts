import{ appendFileSync, unlinkSync, existsSync} from 'fs'


export class CsvWriter<T> {
    constructor(private columns: (keyof T)[]) {
        this.csv = this.columns.join(',') + ('\n')
    }
    private csv: string

    save(filename:string):void{
        appendFileSync(filename, this.csv)
        this.csv += '\n'
        // console.log('file save', filename);
    }

    delete(filname: string):void{
        if(existsSync(filname)){
            unlinkSync(filname)
        }else{
            console.log('file not found');
        }
    }

    private formatRow(value: T):string{
        return this.columns.map((col) => value[col]).join(',')
    }

    addRows(values: T[]):void {
        let rows = values.map((r) => this.formatRow(r))
        this.csv += rows.join('\n')
    }
}

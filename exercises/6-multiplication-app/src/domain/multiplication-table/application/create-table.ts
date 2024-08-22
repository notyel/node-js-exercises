
export interface ICreateTable {
    execute: (options: CreateTableOptions) => string
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements ICreateTable {
    execute({ base, limit = 10 }: CreateTableOptions) {
        // mejora la logica de headerMesagge y outputMessage
        const headerMesagge = `
        ===========================================
                Tabla del ${base}
        ===========================================\n`;

        let outputMessage = "";
        for (let i = 1; i <= limit; i++) {
            outputMessage += `${base} x ${i} = ${base * i}\n`
        }

        outputMessage = headerMesagge + outputMessage;
        return outputMessage;
    }
}
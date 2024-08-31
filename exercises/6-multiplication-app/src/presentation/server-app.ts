import { CreateTable } from "../domain/multiplication-table/application/create-table";
import { SaveFile } from "../domain/multiplication-table/application/save-file";

interface RunOptions {
    base: number,
    limit: number,
    showTable: boolean,
    fileName?: string,
    fileDestination?: string
}

export class ServerApp {
    static run({ base, limit, showTable, fileName, fileDestination }: RunOptions) {
        console.log("Servidor en ejecución...");

        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile()
        .execute({ 
            fileContent: table, 
            fileDestination: fileDestination,
            fileName: fileName
         });

        if (showTable) console.log(table);

        if (wasCreated) console.log("Archivo creado");
        else console.log("Archivo no creado");
    }
}
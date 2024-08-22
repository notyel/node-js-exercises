import { CreateTable } from "../domain/multiplication-table/application/create-table";
import { SaveFile } from "../domain/multiplication-table/application/save-file";

interface RunOptions {
    base: number,
    limit: number,
    showTable: boolean
}

export class ServerApp {
    static run({ base, limit, showTable }: RunOptions) {
        console.log("Server running...");

        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile().execute({ fileContent: table, fileDestination: "outputs" });

        if (showTable) console.log(table);

        if (wasCreated) console.log("File created");
        else console.log("File not created");
    }
}
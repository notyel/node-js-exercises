import fs from "fs";

export interface Options {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}

export interface ISaveFile {
    execute: (options: Options) => boolean
}

export class SaveFile implements ISaveFile {
    execute({ fileContent, fileDestination = "outputs", fileName = "table" }: Options): boolean {
        try {
            fs.mkdirSync(fileDestination, { recursive: true });
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

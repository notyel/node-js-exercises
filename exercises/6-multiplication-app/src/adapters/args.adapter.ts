import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const args = yargs(hideBin(process.argv))
    .options("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Base de la tabla de multiplicar"
    })
    .options("l", {
        alias: "limit",
        type: "number",
        default: 10,
        describe: "Límite de la tabla de multiplicar"
    })
    .options("s", {
        alias: "show",
        type: "boolean",
        default: false,
        describe: "Mostrar tabla de multiplicar"
    })
    .check((argv) => {
        if (argv.b < 1) throw "Error: la base debe ser mayor a 0";
        if (argv.l < 1) throw "Error: el limite debe ser mayor a 0";
        //if (argv.b < 1) throw "Error: la base debe ser numerica";
        return true;
    })
    .parseSync()

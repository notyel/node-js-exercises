import { args } from "./adapters/args.adapter";
import { ServerApp } from "./presentation/server-app";

(async () => {
    await main();
})();

async function main() {
    const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination } = args;
    ServerApp.run({ base, limit, showTable, fileName, fileDestination });
}
import { args } from "./adapters/args.adapter";
import { ServerApp } from "./presentation/server-app";


(async () => {
    await main();
})();

async function main() {
    const { b: base, l: limit, s: showTable } = args;
    ServerApp.run({ base, limit, showTable });
}


const path = require("path");
const util = require("util");
const { exec } = require("child_process");

const config = require('../config/main.config');
const { debug } = config;

const execPromise = util.promisify(exec);

// const useLegacy = process.argv.some((_arg) => _arg === '--legacy');

const createPackage = async(src, dest) => {
    try {
        console.log(`create package ${src} -> ${dest}`);

        const cmd = `${config.divineExe} -s "${src}" -d "${dest}" -g bg3 -a create-package`;

        debug && console.debug(cmd);

        const res = await execPromise(cmd);

        debug && console.debug(res);
    } catch (e) {
        console.log('unable to create package', e);
    }
}

const deploy = async() => {
    const finalPackage = path.join(config.paths.game.modsPath, `${config.modName}.pak`);

    console.log(`creating package ${finalPackage} from ${config.paths.src}`);

    const res = await createPackage(config.paths.src, finalPackage);

    debug && console.debug(res);
}

const main = async() => {
    console.log('start deploying the mod');
    // useLegacy && console.warn('\x1b[33m !!!RUNNING IN LEGACY MODE!!! \x1b[0m')
    await deploy();

    console.log('done')
}

(async() => { await main() })();
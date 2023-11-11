const fs = require("fs").promises;
const path = require("path");
const util = require("util");
const { exec } = require("child_process");

const config = require('../config/main.config');
const { debug } = config;

const execPromise = util.promisify(exec);

const convertLoca = async(srcFile, destFile) => {
    try {
        console.log(`convert loca ${srcFile} -> ${destFile}`);

        const cmd = `${config.divineExe} -s ${srcFile} -d ${destFile} -g bg3 -a convert-loca`;

        debug && console.debug(cmd);

        const res = await execPromise(cmd);

        debug && console.debug(res);
    } catch (e) {
        console.log('unable to convert loca', e);
    }
}

const convertResource = async(srcFile, destFile) => {
    try {
        console.log(`convert resource ${srcFile} -> ${destFile}`);

        const cmd = `${config.divineExe} -s ${srcFile} -d ${destFile} -g bg3 -a convert-resource`;

        debug && console.debug(cmd);

        const res = await execPromise(cmd);

        debug && console.debug(res);
    } catch (e) {
        console.log('unable to convert resource', e);
    }
}

const buildLocalization = async() => {
    console.log('building localization source files');
    for (localization of config.localizations) {
        const currentLocalizationPath = path.join(config.paths.mod.loca, localization);
        const srcFiles = await fs.readdir(currentLocalizationPath);

        if (config.cleanBeforeBuild) {
            const locaFiles = srcFiles.filter((file) => path.extname(file) === '.loca');

            debug && console.log('remove old shit (in case if we renamed the old files, and the a remianing in folder)');
            for (locaFile of locaFiles) {
                await fs.unlink(path.join(currentLocalizationPath, locaFile));
            }
        }

        const xmlFiles = srcFiles.filter((file) => path.extname(file) === '.xml');

        for (xmlFile of xmlFiles) {
            const [fileName, extName] = xmlFile.split('.');

            await convertLoca(
                path.join(currentLocalizationPath, xmlFile),
                path.join(currentLocalizationPath, `${fileName}.loca`),
            );
        }

        console.log(`builded .loca files for ${localization}`);
    }
};

const buildRootTemplates = async() => {
    console.log('building root tempaltes files');

    const srcFiles = await fs.readdir(config.paths.mod.rootTemplate);

    if (config.cleanBeforeBuild) {
        const lsfFiles = srcFiles.filter((file) => path.extname(file) === '.lsf');

        debug && console.log('remove old shit (in case if we renamed the old files, and the a remianing in folder)');
        for (lsffile of lsfFiles) {
            await fs.unlink(path.join(config.paths.mod.rootTemplate, lsffile));
        }
    }

    const lsxFiles = srcFiles.filter((file) => path.extname(file) === '.lsx');

    for (lsxfile of lsxFiles) {
        const [fileName, extName] = lsxfile.split('.');

        await convertResource(
            path.join(config.paths.mod.rootTemplate, lsxfile),
            path.join(config.paths.mod.rootTemplate, `${fileName}.lsf`),
        );
    }

    console.log(`builded .lsf root teamplte files`);
};

const main = async() => {
    console.log('start building mod files');

    await buildLocalization();
    await buildRootTemplates();

    console.log('done')
}

(async() => { await main() })();
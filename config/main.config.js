const path = require('path');

const rootPath = path.normalize(path.join(__dirname, '..'));

const modName = 'EAFemaleHalfPlate'; // change for each mod.

const config = {
    modName,
    localizations: ['English', 'Russian'],
    paths: {
        mod: {
            loca: path.join(rootPath, './src/Localization'),
            rootTemplate: path.join(rootPath, `./src/Public/${modName}/RootTemplates`),
        },

        game: {
            modsPath: "C:\\Users\\cyber\\AppData\\Local\\Larian Studios\\Baldur's Gate 3\\Mods",
        }
    },
    divineExe: path.normalize(process.env.DIVINE_EXE || 'P:\\Modding\\baldurgate\\tools\\ExportTool-v1.18.7\\Tools\\divine.exe'),
    debug: false,
    cleanBeforeBuild: true,
    rootPath,
};

module.exports = config;
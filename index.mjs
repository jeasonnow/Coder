import {lstatSync, readdirSync} from 'fs-extra';
import {join} from 'node:path';

const WORKSPACE_DIR = process.env.WORKSPACE;
const filterArg = process.argv[2];

const directoryFilter = (filename) => {
    return lstatSync(join(WORKSPACE_DIR, filename)).isDirectory();
};

const dirs = readdirSync(join(WORKSPACE_DIR)).filter(directoryFilter);
const items = dirs.filter(item => item.includes(filterArg)).map(item => ({
    title: `工程：${item}`,
    subtitle: item,
    arg: join(WORKSPACE_DIR, item),
}));


console.log(JSON.stringify({items}, null, '\t'));
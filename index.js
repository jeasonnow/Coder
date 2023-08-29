const fse = require('fs-extra');
const path = require('path');
const alfy = require('alfy');


const WORKSPACE_DIR = process.env.WORKSPACE;
const filterArg = process.argv[2];

const directoryFilter = (filename) => {
    return fse.lstatSync(path.join(WORKSPACE_DIR, filename)).isDirectory();
};

const dirs = fse.readdirSync(path.join(WORKSPACE_DIR)).filter(directoryFilter);
const items = dirs.filter(item => item.includes(filterArg)).map(item => ({
    title: `工程：${item}`,
    subtitle: item,
    arg: path.join(WORKSPACE_DIR, item),
}));


alfy.output(items);
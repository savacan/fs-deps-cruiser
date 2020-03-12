const path = require("path");
const exec = require('child_process')
const fs = require('fs');

const resolve = (relative) => path.resolve(__dirname, relative)

const formatToEsm = (result) => `
(() => {
    const result = \`${result}\`
    window.dot_result = result;
})()
`
const forceWriteSync = (dirPath, filename, data) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
    fs.writeFileSync(`${dirPath}/${filename}`, data);
}

const start = () => {
    const filePath = resolve("../src");
    const configFilePath = resolve("./config/vissualize-config.js")
    // dependency-cruiserのapiもあるみたいですが、成熟していないようなのでcommandを直接実行しています。
    const dotResult = exec.execSync(`npx depcruise --config ${configFilePath} --output-type dot ${filePath}`).toString();
    forceWriteSync(resolve("./dist"), 'dot-result.js', formatToEsm(dotResult));
}

start();
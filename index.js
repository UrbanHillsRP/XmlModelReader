const { writeFileSync } = require('fs');
var convert = require('xml-js');
const { program } = require('commander');
program
  .option('-x, --xml <xmlFile>','Xml File to found modelName','xml.xml')
  .option('-o, --out <outFile>','Txt File to put the list',`${Date.now()}.txt`)
program.parse(process.argv);

const options = program.opts();
var xml = require('fs').readFileSync('./'+ options.xml, 'utf8');
var result = JSON.parse(convert.xml2json(xml, {compact: true, spaces: 4}));

// writeFileSync('xml.json', result)
let textContent = ""
result.CVehicleModelInfo__InitDataList.InitDatas.Item.forEach(element => {
    textContent = textContent + `${element.modelName._text}\n`
});
writeFileSync(options.out, textContent)
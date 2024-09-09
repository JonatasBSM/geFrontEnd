import commander from 'commander';
import fs from 'fs';
import path from 'path';

const program = new commander.Command();

program
    .option('-n, --name <name>', 'Name of the component')
    .option('-d, --directory <directory>', 'Directory to generate the file in', 'components')
    .option('--crud', 'Generate CRUD actions', false);

program.parse(process.argv);

const { name, directory } = program.opts();

if (!name) {
    console.error('Please provide a name for the component');
    process.exit(1);
}

// Path to the template file
const indexTemplatePath = path.join(__dirname, '..', 'stubs', 'actions', 'index.stub');
// Path to the directory where the new file will be created
const outputDir = path.join(__dirname, '..', 'actions', directory);

// Ensure the directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Read the template and replace placeholders with the component name
const templateContent = fs.readFileSync(indexTemplatePath, 'utf-8');
let fileContent = templateContent.replace(/#name#/g, name);
fileContent = fileContent.replace(/#upperName#/, name.charAt(0).toUpperCase() + name.slice(1));

// Write the new component file
const outputPath = path.join(outputDir, `${name}.ts`);
fs.writeFileSync(outputPath, fileContent);

if(program.opts().crud) {

    const files = ['create', 'delete', 'list', 'update'];

    files.forEach(file => {
        const crudTemplatePath = path.join(__dirname, '..', 'stubs', 'actions', 'crud', `${file}.stub`);
        const crudContent = fs.readFileSync(crudTemplatePath, 'utf-8');
        let fileContent = crudContent.replace(/#name#/g, name);
        fileContent = fileContent.replace(/#upperName#/, name.charAt(0).toUpperCase() + name.slice(1));
        const crudOutputPath = path.join(outputDir, `${name}.ts`);
        fs.writeFileSync(crudOutputPath, fileContent);
    });

}
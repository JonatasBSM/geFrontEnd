import commander from 'commander';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const program = new commander.Command();

program
    .option('-n, --name <name>', 'Name of the component')
    .option('-d, --directory <directory>', 'Directory to generate the file in')
    .option('--crud', 'Generate CRUD actions', false);

program.parse(process.argv);

const { name, directory, crud } = program.opts();

if (!name) {
    console.error('Please provide a name for the component');
    process.exit(1);
}

// Path to the directory where the new file will be created

let outputDir = path.join(__dirname, '..', 'actions', name);

if(directory) {
    outputDir = path.join(__dirname, '..', 'actions', directory, name);
}

// Ensure the directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Read the template and replace placeholders with the component name

if(!crud) {
    const indexTemplatePath = path.join(__dirname, '..', 'stubs', 'actions', 'index.stub');
    const templateContent = fs.readFileSync(indexTemplatePath, 'utf-8');
    let fileContent = templateContent.replace(/#name#/g, name);
    fileContent = fileContent.replace(/#upperName#/g, name.charAt(0).toUpperCase() + name.slice(1));
    const outputPath = path.join(outputDir, 'index.ts');
    fs.writeFileSync(outputPath, fileContent);
}


if(crud) {

    const files = ['index', 'create', 'delete', 'list', 'update'];

    files.forEach(file => {
        const crudTemplatePath = path.join(__dirname, '..', 'stubs', 'actions', 'crud', `${file}.stub`);
        const crudContent = fs.readFileSync(crudTemplatePath, 'utf-8');
        let fileContent = crudContent.replace(/#name#/g, name);
        fileContent = fileContent.replace(/#upperName#/g, name.charAt(0).toUpperCase() + name.slice(1));
        const crudOutputPath = path.join(outputDir, `${file}.ts`);
        fs.writeFileSync(crudOutputPath, fileContent);
    });

}
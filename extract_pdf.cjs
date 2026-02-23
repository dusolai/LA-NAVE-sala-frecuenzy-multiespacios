const fs = require('fs');
const pdf = require('pdf-parse');

async function extractText(filePath) {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        let data;
        if (typeof pdf === 'function') {
            data = await pdf(dataBuffer);
        } else if (pdf.default && typeof pdf.default === 'function') {
            data = await pdf.default(dataBuffer);
        } else {
            console.log('pdf-parse keys:', Object.keys(pdf));
            throw new Error('pdf-parse is not a function');
        }
        console.log('--- CONTENT START ---');
        console.log(data.text);
        console.log('--- CONTENT END ---');
    } catch (error) {
        console.error('Error parsing PDF:', error);
    }
}

const filePath = process.argv[2];
if (!filePath) {
    console.error('Please provide a file path');
    process.exit(1);
}

extractText(filePath);

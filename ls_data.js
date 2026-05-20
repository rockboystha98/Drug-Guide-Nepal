import fs from 'fs';
import path from 'path';

const dataDir = './temp_repo/src/data';
const files = fs.readdirSync(dataDir);
console.log(files);

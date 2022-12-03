import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

function readInputFile(importMeta) {
    const __filename = fileURLToPath(importMeta.url);
    const __dirname = dirname(__filename);
    const path = join(__dirname, 'input');

    return readFileSync(path, 'utf-8');
}

export function loadInput(importMeta) {
    const rawInput = readInputFile(importMeta);
    return rawInput.split('\r\n');
}

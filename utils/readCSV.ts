import * as fs from 'fs';
import { resolve } from 'path';

export function readCSV(filePath: string) {
  const absolutePath = resolve(filePath);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');

  const lines = fileContent.trim().split('\n');
  const headers = lines[0].split(',');

  return lines.slice(1).map(line => {
    const values = line.split(',');
    const record: any = {};

    headers.forEach((header, index) => {
      record[header.trim()] = values[index].trim();
    });

    return record;
  });
};
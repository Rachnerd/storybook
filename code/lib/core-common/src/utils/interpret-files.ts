import fs from 'fs';

export const boost = new Set(['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs']);

function sortExtensions() {
  return [...Array.from(boost)];
}

const possibleExtensions = sortExtensions();

export function getInterpretedFile(pathToFile: string) {
  return possibleExtensions
    .map((ext) => (pathToFile.endsWith(ext) ? pathToFile : `${pathToFile}${ext}`))
    .find((candidate) => fs.existsSync(candidate));
}

export function getInterpretedFileWithExt(pathToFile: string) {
  return possibleExtensions
    .map((ext) => ({ path: pathToFile.endsWith(ext) ? pathToFile : `${pathToFile}${ext}`, ext }))
    .find((candidate) => fs.existsSync(candidate.path));
}
import { people } from '../../../data';
import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const currentPath = process.cwd();
  const PACKAGE_JSON = await fs.readFile(currentPath + '/node_modules/@prism-labs/utility-css/package.json', 'utf8');
  const TEXTFIELD_CSS = await fs.readFile(currentPath + '/node_modules/@prism-labs/utility-css/index.min.css', 'utf8');

  const files = {
    '/node_modules/@prism-labs/utility-css/package.json': {
      code: PACKAGE_JSON,
      hidden: true,
    },
    '/node_modules/@prism-labs/utility-css/index.min.css': {
      code: TEXTFIELD_CSS,
      hidden: true,
    },
  };

  res.status(200).json(files);
}

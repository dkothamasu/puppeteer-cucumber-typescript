import {PageHelper} from '../pages/pageHelper';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';

const imageBuilderScreenShotsDir = process.cwd() + '/image_builder/screenshots';
const page: PageHelper = new PageHelper();

/**
 * @param  {string} dir
 */
async function createDirectory(dir: string) {
    
    if (!fs.existsSync(dir)) {
        mkdirp.sync(dir);
    }
    await page.init();
    await page.open('http://www.google.com');
    await page.screenshot(imageBuilderScreenShotsDir + '/example.png');
}
createDirectory(imageBuilderScreenShotsDir);
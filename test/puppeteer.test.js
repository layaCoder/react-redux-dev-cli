require("babel-polyfill");
const puppeteer = require('puppeteer');

let page;
let browser;
const width = 1600;
const height = 900;

beforeAll(async () => {
    browser = await puppeteer.launch({
        args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
});

afterAll(() => {
    browser.close();
});


describe('jest and puppeteer test demo', () => {
    test('verify page width value', async () => {
        await page.goto('https://www.baidu.com');
        const dimensions = await page.evaluate(() => {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                deviceScaleFactor: window.devicePixelRatio
            }
        });
        expect(dimensions.width).toEqual(1600);
        expect(dimensions.height).toEqual(900);
    });
    test('save snapshot', async () => {
        let timeNow = new Date().toLocaleDateString();
        // await page.goto('https://www.baidu.com');
        await page.screenshot({ path: `./test/snapshots/${timeNow}.png` });
    });
});

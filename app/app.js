
'use strict';

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.google.com/')
  await page.type('input.gLFyf.gsfi', 'Eliud K');
  page.keyboard.press('Enter');
  await page.waitForSelector('div#resultStats');
  await page.screenshot({ path: 'eliudk.png', fullPage: true })
  await browser.close()
})()

import fs from 'fs'
import webdriver from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'
import chromium from 'chromium'
import 'chromedriver'

import * as utils from './utils/utils.js'

(async function start() {

  var start = new Date()
  var hrstart = process.hrtime()

  let options = new chrome.Options();
  options.setChromeBinaryPath(chromium.path);
  //options.addArguments('--headless');
  //options.addArguments('--disable-gpu');
  options.addArguments('--window-size=1280,960');

  const driver = await new webdriver.Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

  let testPath = process.argv.slice(2)

  const test = await import(`./${testPath}`)


  let complete = await test.start(driver)

  var end = new Date() - start,
    hrend = process.hrtime(hrstart)

  console.info('Test Executed Successfully in %ds', hrend[0], hrend[1] / 10000)

  await complete.quit()



})()

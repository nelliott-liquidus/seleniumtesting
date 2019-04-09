import assert from 'assert'
import * as utils from '../../../utils/utils.js'
import { BASE_URL, aliases } from '../config.js'
import { Builder, By, Key, until } from 'selenium-webdriver'

export async function start(driver) {

  try {

    await driver.get(BASE_URL)
    await driver.switchTo().frame('shopLocalPlatformFrame')
    utils.log('Hello Shoplocal!')

    let link = await utils.getElement(driver, By.partialLinkText('Categories'))
    await link.click()

    let firstListing = await utils.getElement(driver, By.partialLinkText('$10'))
    utils.log('Got first listing')

    await firstListing.click()
    await utils.takeScreenshot(driver, 'shoplocal-start-page')

  }

  catch(error) {

    utils.log(error, 'error')

  }

  return driver

}

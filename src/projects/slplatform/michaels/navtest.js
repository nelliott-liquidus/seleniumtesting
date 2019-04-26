import assert from 'assert'
import * as utils from '../../../utils/utils.js'
import { BASE_URL, aliases } from '../../../projects/slplatform/michaels/config.js'
import { Builder, By, Key, until } from 'selenium-webdriver'

export async function start(driver) {

  try {

    await driver.get(BASE_URL)
    await driver.switchTo().frame('shopLocalPlatformFrame')
    utils.log('Hello Shoplocal!')

    let link = await utils.getElement(driver, By.partialLinkText('Categories'))
    await link.click()

    let firstCategory = await utils.getElement(driver, By.partialLinkText('$10'))
    utils.log('Got first category')
		await firstCategory.click()
		
		let firstListing = await utils.getElement(driver, By.partialLinkText('Easter '))
    utils.log('Got scoop Easter Basket')

    await firstListing.click()
		await driver.wait(utils.takeScreenshot(driver, 'shoplocal-start-page'), 10000)
    await utils.takeScreenshot(driver, 'shopLocalPlatformFrame')

  }

	
  catch(error) {

    utils.log(error, 'error')

  }

  return driver

}

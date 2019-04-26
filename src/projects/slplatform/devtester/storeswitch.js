import assert from 'assert'
import * as utils from '../../../utils/utils.js'
import { BASE_URL, aliases } from '../../../projects/slplatform/devtester/config.js'
import { Builder, By, Key, until } from 'selenium-webdriver'

export async function start(driver) {

  try {

    await driver.get(BASE_URL)
    let config = await utils.getElement(driver, By.xpath("//option[contains(.,'shopluxe')]"))
		await config.click();
		utils.log('select shopluxe')
		
		let store = await utils.getElement(driver, By.className('storeref'))
		await store.sendKeys('003')
		utils.log('input storeref')

    let gobutton = await utils.getElement(driver, By.className('go'))
		await gobutton.click()
		utils.log('click go')
		
		await driver.switchTo().frame('shopLocalPlatformFrame')
		utils.log('goto iframe')

    let browseByPage = await utils.getElement(driver, By.className('Pages__ButtonNext-cjHRVk'))
		await browseByPage.click()
		utils.log('browse by page')
		
		let listing = await utils.getElement(driver, By.className('ImageMapper__Area-leJRxU'))
    await await driver.wait(listing.click(), 10000)
		utils.log('get listing')

		await driver.wait(utils.takeScreenshot(driver, 'shoplocal-start-page'), 10000)
    await utils.takeScreenshot(driver, 'ShopLocalIframeWrapper')

  }

	
  catch(error) {

    utils.log(error, 'error')

  }

  return driver

}

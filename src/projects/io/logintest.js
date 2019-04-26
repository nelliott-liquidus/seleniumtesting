import assert from 'assert'
import * as utils from '../../utils/utils.js'
import { BASE_URL, aliases } from '../../projects/io/config.js'
import { Builder, By, Key, until } from 'selenium-webdriver'

export async function start(driver) {

  try {

    await driver.get(BASE_URL)

    let username = await utils.getElement(driver, By.id('username'))
		await username.sendKeys('qaCbs')
		utils.log('username')
		let login = await utils.getElement(driver, By.id('password'))
		await login.sendKeys('ioportal')
		utils.log('pw')
		let loginButton = await utils.getElement(driver, By.id('login-button'))
		await loginButton.click()
    await driver.wait(utils.takeScreenshot(driver, 'onboarding'), 10000000)
  }

	
  catch(error) {
    utils.log(error, 'error')
  }

  return driver

}

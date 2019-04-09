import _ from 'lodash'
import chalk from 'chalk'
import moment from 'moment'
import fs from 'fs'
import { Builder, By, Key, until } from 'selenium-webdriver'

const log = (s, type) => {

  let col

  switch(type) {
    case 'error':
      col = chalk.rgb(255, 10, 0)
      break

    default:
      col = chalk.rgb(0, 255, 0)
      break
  }
  console.log(
    `[${col(
      type || 'test'
    )}] ${ s }`
  )
  _.isObject(s) || _.isArray(s) ? console.dir(s): ''
}


async function takeScreenshot(driver, name) {

  await driver.takeScreenshot().then((data) => {

    fs.writeFileSync(`${process.cwd()}\\output\\screenshots\\${name}.png`, data, 'base64')
    log('Screenshot is saved')

  })

}

async function getElement(driver, by){

  try {
    await driver.wait(until.elementLocated(by), 5000)
  }
  catch(error) {
    log(error, 'error')
  }
  return await driver.findElement(by)

}

export { log, takeScreenshot, getElement }

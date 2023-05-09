import { Builder, By, Key, until} from 'selenium-webdriver'
import assert from 'assert'

describe('Solicitar unirse', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Solicitar unirse', async function() {
    // Test name: Solicitar unirse
    // Step # | name | target | value | comment
    // 1 | open | http://localhost:5173/ |  | 
    await driver.get("http://localhost:5173/")
    // 2 | setWindowSize | 1280x680 |  | 
    await driver.manage().window().setRect({ width: 1280, height: 680 })
    // 3 | click | id=email |  | 
    await driver.findElement(By.id("email")).click()
    // 4 | type | id=email | testong-99999999T | 
    await driver.findElement(By.id("email")).sendKeys("testong-99999999T")
    // 5 | mouseDown | id=password |  | 
    {
      const element = await driver.findElement(By.id("password"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    // 6 | mouseUp | id=password-label |  | 
    {
      const element = await driver.findElement(By.id("password-label"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    // 7 | click | css=.MuiFormControl-root:nth-child(1) |  | 
    await driver.findElement(By.css(".MuiFormControl-root:nth-child(1)")).click()
    // 8 | mouseOver | css=.MuiButtonBase-root |  | 
    {
      const element = await driver.findElement(By.css(".MuiButtonBase-root"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 9 | type | id=password | testvolunteer | 
    await driver.findElement(By.id("password")).sendKeys("testvolunteer")
    // 10 | click | css=.MuiButtonBase-root |  | 
    await driver.findElement(By.css(".MuiButtonBase-root")).click()
    // 11 | click | css=.MuiTableRow-root:nth-child(3) path |  | 
    await driver.findElement(By.css(".MuiTableRow-root:nth-child(3) path")).click()
    // 12 | click | css=.MuiButton-root |  | 
    await driver.findElement(By.css(".MuiButton-root")).click()
    // 13 | click | css=.MuiPaper-root:nth-child(1) .MuiListItem-root:nth-child(4) .MuiTypography-root |  | 
    await driver.findElement(By.css(".MuiPaper-root:nth-child(1) .MuiListItem-root:nth-child(4) .MuiTypography-root")).click()
  })
})

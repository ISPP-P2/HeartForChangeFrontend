import { Builder, By, Key, until} from 'selenium-webdriver'
import assert from 'assert'
describe('Eliminar actividad', function() {
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
  it('Eliminar actividad', async function() {
    // Test name: Eliminar actividad
    // Step # | name | target | value | comment
    // 1 | open | http://localhost:5173/ |  | 
    await driver.get("http://localhost:5173/")
    // 2 | setWindowSize | 1280x680 |  | 
    await driver.manage().window().setRect({ width: 1280, height: 680 })
    // 3 | type | id=email | testong | 
    await driver.findElement(By.id("email")).sendKeys("testong")
    // 4 | type | id=password | testong | 
    await driver.findElement(By.id("password")).sendKeys("testong")
    // 5 | click | css=.MuiPaper-root:nth-child(1) .MuiListItem-root:nth-child(7) .MuiTypography-root |  | 
    await driver.findElement(By.css(".MuiPaper-root:nth-child(1) .MuiListItem-root:nth-child(7) .MuiTypography-root")).click()
    // 6 | mouseOver | css=.MuiTableRow-root:nth-child(1) .MuiButtonBase-root |  | 
    {
      const element = await driver.findElement(By.css(".MuiTableRow-root:nth-child(1) .MuiButtonBase-root"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 7 | click | css=.MuiTableRow-root:nth-child(1) .MuiButtonBase-root |  | 
    await driver.findElement(By.css(".MuiTableRow-root:nth-child(1) .MuiButtonBase-root")).click()
    // 8 | mouseOut | css=.MuiTableRow-root:nth-child(1) .MuiButtonBase-root |  | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 9 | mouseOver | css=.css-nuczcw-MuiButtonBase-root-MuiButton-root |  | 
    {
      const element = await driver.findElement(By.css(".css-nuczcw-MuiButtonBase-root-MuiButton-root"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 10 | click | css=.css-nuczcw-MuiButtonBase-root-MuiButton-root |  | 
    await driver.findElement(By.css(".css-nuczcw-MuiButtonBase-root-MuiButton-root")).click()
    // 11 | click | css=.MuiPaper-root:nth-child(1) .MuiListItem-root:nth-child(11) .MuiTypography-root |  | 
    await driver.findElement(By.css(".MuiPaper-root:nth-child(1) .MuiListItem-root:nth-child(11) .MuiTypography-root")).click()
    // 12 | sendKeys | id=password | ${KEY_ENTER} | 
    await driver.findElement(By.id("password")).sendKeys(Key.ENTER)
    // 13 | mouseOver | css=.MuiButtonBase-root |  | 
    {
      const element = await driver.findElement(By.css(".MuiButtonBase-root"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 14 | click | css=.MuiButtonBase-root |  | 
    await driver.findElement(By.css(".MuiButtonBase-root")).click()
  })
})

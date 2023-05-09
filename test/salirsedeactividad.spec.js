import { Builder, By, Key, until} from 'selenium-webdriver'
import assert from 'assert'
describe('Salirse de actividad', function() {
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
  it('Salirse de actividad', async function() {
    // Test name: Salirse de actividad
    // Step # | name | target | value | comment
    // 1 | open | http://localhost:5173/ |  | 
    await driver.get("http://localhost:5173/")
    // 2 | setWindowSize | 1280x680 |  | 
    await driver.manage().window().setRect({ width: 1280, height: 680 })
    // 3 | type | id=email | testong-99999999T | 
    await driver.findElement(By.id("email")).sendKeys("testong-99999999T")
    // 4 | click | id=password |  | 
    await driver.findElement(By.id("password")).click()
    // 5 | mouseOver | css=.MuiButtonBase-root |  | 
    {
      const element = await driver.findElement(By.css(".MuiButtonBase-root"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 6 | type | id=password | testvolunteer | 
    await driver.findElement(By.id("password")).sendKeys("testvolunteer")
    // 7 | click | css=.MuiButtonBase-root |  | 
    await driver.findElement(By.css(".MuiButtonBase-root")).click()
    // 8 | click | css=.MuiTableRow-root:nth-child(3) .MuiSvgIcon-root |  | 
    await driver.findElement(By.css(".MuiTableRow-root:nth-child(3) .MuiSvgIcon-root")).click()
    // 9 | click | css=.MuiPaper-root:nth-child(1) .MuiListItem-root:nth-child(3) .MuiTypography-root |  | 
    await driver.findElement(By.css(".MuiPaper-root:nth-child(1) .MuiListItem-root:nth-child(3) .MuiTypography-root")).click()
    // 10 | click | css=.MuiTableRow-root:nth-child(1) .MuiSvgIcon-root |  | 
    await driver.findElement(By.css(".MuiTableRow-root:nth-child(1) .MuiSvgIcon-root")).click()
    // 11 | mouseOver | css=.MuiTableRow-root:nth-child(1) .MuiSvgIcon-root |  | 
    {
      const element = await driver.findElement(By.css(".MuiTableRow-root:nth-child(1) .MuiSvgIcon-root"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 12 | click | css=.MuiButton-root |  | 
    await driver.findElement(By.css(".MuiButton-root")).click()
    // 13 | mouseOver | css=.MuiButton-root |  | 
    {
      const element = await driver.findElement(By.css(".MuiButton-root"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
  })
})

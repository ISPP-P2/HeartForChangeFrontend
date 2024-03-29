import { Builder, By, Key, until} from 'selenium-webdriver'
import assert from 'assert'

describe('Editar actividad', function() {
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
  it('Editar actividad', async function() {
    // Test name: Editar actividad
    // Step # | name | target | value | comment
    // 1 | open | http://localhost:5173/ |  | 
    await driver.get("http://localhost:5173/")
    // 2 | setWindowSize | 1280x680 |  | 
    await driver.manage().window().setRect({ width: 1280, height: 680 })
    // 3 | type | id=email | testong | 
    await driver.findElement(By.id("email")).sendKeys("testong")
    // 4 | type | id=password | testong | 
    await driver.findElement(By.id("password")).sendKeys("testong")
    // 5 | mouseOver | css=.MuiButtonBase-root |  | 
    {
      const element = await driver.findElement(By.css(".MuiButtonBase-root"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 6 | click | css=.MuiButtonBase-root |  | 
    await driver.findElement(By.css(".MuiButtonBase-root")).click()
    // 7 | click | css=.MuiPaper-root:nth-child(1) .MuiListItem-root:nth-child(7) .MuiTypography-root |  | 
    await driver.findElement(By.css(".MuiPaper-root:nth-child(1) .MuiListItem-root:nth-child(7) .MuiTypography-root")).click()
    // 8 | click | css=.MuiTableRow-root:nth-child(1) a > .MuiSvgIcon-root |  | 
    await driver.findElement(By.css(".MuiTableRow-root:nth-child(1) a > .MuiSvgIcon-root")).click()
    // 9 | click | css=.css-2nddcv-MuiButtonBase-root-MuiButton-root |  | 
    await driver.findElement(By.css(".css-2nddcv-MuiButtonBase-root-MuiButton-root")).click()
    // 10 | click | id=:rf: |  | 
    await driver.findElement(By.id(":rf:")).click()
    // 11 | click | id=:rf: |  | 
    await driver.findElement(By.id(":rf:")).click()
    // 12 | doubleClick | id=:rf: |  | 
    {
      const element = await driver.findElement(By.id(":rf:"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    // 13 | click | id=:rf: |  | 
    await driver.findElement(By.id(":rf:")).click()
    // 14 | mouseOver | css=.css-ugxt08-MuiButtonBase-root-MuiButton-root |  | 
    {
      const element = await driver.findElement(By.css(".css-ugxt08-MuiButtonBase-root-MuiButton-root"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 15 | type | id=:rf: | Pablo Benítez | 
    await driver.findElement(By.id(":rf:")).sendKeys("Pablo Benítez")
    // 16 | click | css=.css-ugxt08-MuiButtonBase-root-MuiButton-root |  | 
    await driver.findElement(By.css(".css-ugxt08-MuiButtonBase-root-MuiButton-root")).click()
    // 17 | click | css=.MuiPaper-root:nth-child(1) .MuiListItem-root:nth-child(11) .MuiTypography-root |  | 
    await driver.findElement(By.css(".MuiPaper-root:nth-child(1) .MuiListItem-root:nth-child(11) .MuiTypography-root")).click()
  })
})

import {
  expect,
  Page,
  Locator,
  Browser,
  BrowserContext,
} from "@playwright/test";

export class BaseEyes {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async seesUrl(url: string) {
    await expect(this.page.url()).toEqual(url);
    return this;
  }
  async seesPageTitle(title: string) {
    await expect(this.page.title()).toEqual(title);
  }
  async seesTextWithId(id: string, text: string) {
    await expect(this.page.locator(`#${id}`)).toHaveText(text);
    return this;
  }
  async seesTextWithClass(domClass: string, text: string) {
    await expect(this.page.locator(`.${domClass}`)).toHaveText(text);
    return this;
  }

  async seesValueWithId(id: string, value: string) {
    await expect(this.page.locator(`#${id}`)).toHaveValue(value);
    return this;
  }

  async doesNotseesTextWithId(id: string, text: string) {
    //negative assertions
    await expect(this.page.locator(`#${id}`)).not.toHaveText(text);
    return this;
  }
  async seesIdVisible(id: string) {
    await expect(this.page.locator(`#${id}`)).toBeVisible();
    return this;
  }
  async seesClassVisibile(clas: string) {
    await expect(this.page.locator(`.${clas}`)).toBeVisible();
    return this;
  }
  async seesDomVisible(domlabel: string) {
    await expect(this.page.locator(domlabel)).toBeVisible();
    return this;
  }

  async hasLengthForDom(domLabel: string, length: number) {
    await expect(this.page.locator(domLabel)).toHaveLength(length);
    return this;
  }
  async seesNumberOfElementsInDom(dom: string, count: number) {
    await expect(this.page.locator(dom)).toHaveCount(count);
    return this;
  }
  ///check weather it works or not
  // async seesTextInAgGridCell(rowId: string, colId: string, text: string) {
  //  const locator= await this.page.$(`${rowId}`);
  // const elementText= await expect(locator.$eval(`#${colId}`,element=>element.textContent));
  // await expect(elementText.toEqual(text));
  // }
  async seesIdContainText(id: string, text: string) {
    const innerText = await this.page.locator(`#${id}`).textContent();
    await expect(innerText).toContain(text);
  }

  async seesDomContainText(dom: string, text: string) {
    await expect(this.page.locator(dom)).toContainText(text);
  }
  async seesDomEnabled(dom: string) {
    await expect(this.page.locator(dom)).toBeEnabled();
    return this;
  }
  async seesDomDisabled(dom: string) {
    await expect(this.page.locator(dom)).toBeDisabled();
    return this;
  }

  async seesInputFieldEmptyWithId(id: string) {
    await expect(this.page.locator(`#${id}`)).toBeEmpty();
  }

  async seesFrameWithId(id: string) {
    const frame = await this.page.frameLocator(`#${id}`);
    return frame;
  }

  // async seesAlertTextWithId(id:string,text:string){
  //   this.page.on("dialog",async alert=>{
  //     const alertMessage=alert.message();
  //     await expect(alertMessage).toEqual(text);
  //     await alert.accept();
  //   })
  //   await (await this.page.$(`#${id}`)).click();
  // }

  async seesPathNameInUrl(path: string) {
    await expect(this.page).toHaveURL(path);
    return this;
  }
}

export class BaseHands {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async clickOnDomElement(dom: string) {
    await this.page.locator(dom).click();
    return this;
  }

  async clickOnContainElement(dom: string, text: string) {
    await this.page.locator(dom, { hasText: text }).click();
    return this;
  }

  async doubleClickOnDomElement(dom: string) {
    await this.page.locator(dom).dblclick();
    return this;
  }

  async clickOnDomElementWithText(text: string) {
    await this.page.locator(text).click();
    return this;
  }

  async clickOnDomElementWithIndex(dom: string, index: number) {
    const domIndex = await this.page.locator(dom).nth(index);
    await domIndex.click();
    return this;
  }

  async clickOnTextWithClassAndIndex(domClass: string, index: number) {
    const domIndex = await this.page.locator(`.${domClass}`).nth(index);
    await domIndex.click();
    return this;
  }

  async clickOnId(id: string) {
    await this.page.locator(`#${id}`).click();
    return this;
  }

  async doubleClickOnId(id: string) {
    await this.page.locator(`#${id}`).dblclick();
    return this;
  }

  async typeTextonId(id: string, text: string) {
    await this.page.locator(`#${id}`).type(text);
    return this;
  }

  async typeTextonDom(locatorName: string, locatorValue: string, text: string) {
    await this.page.locator(`${locatorName}[${locatorValue}]`).type(text);
    return this;
  }

  async clickOnDomElementWithClass(dom: string) {
    await this.page.locator(`.${dom}`).click();
    return this;
  }

  // async getTheChildWindow(dom:string){
  //   const[childWindow]=await Promise.all([
  //     await this.context.waitForEvent("page"),
  //     await (await this.page.$(dom)).click()
  //   ])
  //  const childTab=childWindow.bringToFront();
  //  return childTab;
  // }
}
export class BaseDependencies {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async visitUrl(url: string) {
    await this.page.goto(url);
    return this;
  }
}

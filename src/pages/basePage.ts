import log from "@wdio/logger";
import { testsConfig } from "../../config/tests.config";
const logger = log("@BasePage");

export default class BasePage {
  constructor() {
    logger.info("Base page constructor, page object model setup");
  }

  getElementByPartialText(tagName, text): WebdriverIO.Element {
    // tagName=em, text=Buy
    // $("em*=Buy")
    return $(`${tagName}*=${text}`);
  }

  getElementByText(tagName, text): WebdriverIO.Element {
    // tagName=em, text=Buy
    // $("em*=Buy")
    return $(`${tagName}=${text}`);
  }

  get cookieAccept(): WebdriverIO.Element {
    return this.getElementByText("button", "Accept");
  }

  //get rid of cookies
  handlingCookieAlert() {
    browser.execute(`document.cookie = "OptanonAlertBoxClosed=${new Date().toISOString()};";`)
    browser.refresh()
  }

  async acceptCookie() {
    try { //Optional Cookie popup
      browser.setTimeout({ 'implicit': 0 })
      const elements = await $$("//button[normalize-space()='Accept']")
      if (elements.length > 0 && elements[0].isClickable) {
        elements[0].click
      }
    } catch (ex) {
      // logger.error(error)
    }
    browser.setTimeout({ 'implicit': testsConfig.waitforTimeout })
  }

  /**
 * Wait for the given element to be enabled, displayed, or to exist
 * @param             selector                  Element selector
 * @param  {String}   ms                       Wait duration (optional, default 3000)
 * @param  {String}   falseState               Check for opposite state
 * @param  {String}   state                    State to check for (default
 *                                             existence)
 */
  async waitFor(selector, ms: string, falseState: string, state: string) {
    // Maximum number of milliseconds to wait, default 3000
    const intMs = parseInt(ms, 10) || 3000;

    // Command to perform on the browser object
    let command = 'waitForExist';

    let boolFalseState = !!falseState;
    let parsedState = '';

    if (falseState || state) {
      parsedState = state.includes(' ')
        ? state.split(/\s/)[state.split(/\s/).length - 1]
        : state;

      if (parsedState) {
        command = `waitFor${parsedState[0].toUpperCase()}`
          + `${parsedState.slice(1)}`;
      }
    }

    if (typeof falseState === 'undefined') {
      boolFalseState = false;
    }

    await $(selector)[command](intMs, boolFalseState);
  }

}


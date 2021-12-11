import { Given } from "cucumber";
import { millionMorePage } from "../pages/millionMorePage";
/**
 * Reusing code based on regex parameters in other feature files.
 */
Given(/^I open the url "([^"]*)?"$/, function (urlToLoad: string): void {
  browser.url(urlToLoad);
  browser.maximizeWindow()
  browser.pause(3000)
});

Given(/^I open the url "([^"]*)?" and accept cookies$/, function (urlToLoad: string): void {
  browser.url(urlToLoad);
  browser.maximizeWindow()
  millionMorePage.handlingCookieAlert();
  millionMorePage.acceptCookie();
});

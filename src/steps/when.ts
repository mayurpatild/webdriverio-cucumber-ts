import { When } from "cucumber";
import { millionMorePage } from "../pages/millionMorePage";
import { TIMEOUT_MS } from "../constants/globalConstants";
import { imageService } from "../support/imageService";
import { checkIfElementExists } from "../support/checkIfElementExists";

When(
  /^I (click) on the (link|button|element) "([^"]*)?"$/,
  function (action: string, type: string, selector: string): void {
    const selector2 = type === "link" ? `=${selector}` : selector;
    const method = "click";

    checkIfElementExists(selector2);

    $(selector2)[method]();
  }
);

When(
  /^I clicked "([^"]*)?" from model menu$/,
  async function (selector: string): Promise<void> {
    await (await millionMorePage.optionsOpen).click();
    (await millionMorePage.sideNavigationContainer).waitForDisplayed(TIMEOUT_MS);
    const element = await millionMorePage.getElementBySelector(selector);
    (await element).click();
  }
);

When(
  /^Page gets "([^"]*)?" capture "([^"]*)?" and save image as "([^"]*)?"$/,
  function (
    eventType: "loaded",
    screenShotType: string,
    fileName: string
  ): void {
    imageService.saveImage(screenShotType, fileName);
  }
);

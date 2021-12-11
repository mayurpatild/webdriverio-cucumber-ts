// import { expect } from "chai"
// import BasePage from "./basePage"

// class VideoPage extends BasePage {

//     get promortionImage() { return $('img[data-autoid="promotionBackgroundImage:image"]') }
//     get safetyLearnMoreLink() { return $('#PromotionBackgroundImage-1  a[data-autoid="promotionBackgroundImage:learnMore"]') }
//     get acceptBtn() { return $('button.accept-cookies-button') }
//     get introVid() { return $('#Video-1 button') }
//     get videoIframe() { return $('#Video-1 iframe') }
//     get player() { return $('#movie_player') }
//     get playPauseButton() { return $('.ytp-play-button') }
//     get videoTime() { return $('.ytp-time-current') }

//     redirectToDetails() {
//         this.promortionImage.scrollIntoView();
//         this.safetyLearnMoreLink.click();
//     }

//     clickSafetyVideoToBeplay() {
//         this.introVid.click();
//     }

//     verifyVideoPlayPauseAndTimeFrame() {
//         browser.switchToFrame(this.videoIframe)
//         expect(this.player).toHaveElementClass('playing-mode')
//         expect(this.playPauseButton).toBeClickable()
//         this.playPauseButton.click()
//         expect(this.player).toHaveElementClass('paused-mode')
//         expect(this.verifyVideoTimeframe).toHaveTextContaining('0:0')
//         browser.switchToParentFrame();
//     }

//     verifyVideoPausing() {
//         browser.switchToFrame(this.videoIframe)
//         expect(this.playPauseButton).toBeClickable()
//         this.playPauseButton.click()
//         expect(this.player).toHaveElementClass('paused-mode')
//         browser.switchToParentFrame();
//     }

//     verifyVideoTimeframe() {
//         browser.switchToFrame(this.videoIframe);
//         expect(this.verifyVideoTimeframe).toHaveTextContaining('0:0')
//         browser.switchToParentFrame();
//     }
// }

// module.exports = new VideoPage();
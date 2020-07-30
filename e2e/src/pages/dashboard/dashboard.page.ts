const helper = require('protractor-helper');
import {browser, element, by, protractor} from 'protractor';

export class DashboardPage {

  /* The fields needed to execute the tests*/
  selectFilter = element(by.css('select[id=filter-id'));
  selectFilterOptions = element.all(by.css('#filter-id option'));

  /**
   * get the base url when start the tests
   */
  getHome() {
    browser.get(browser.baseUrl);
  }

  /**
   * Makes the filter by clicking on a option of the select field
   * @param index the index of the item to be clicked
   */
  filter(index) {
    browser.sleep(5000);
    this.selectFilter.click();
    this.selectFilterOptions.get(index).click();
    this.selectFilter.sendKeys(protractor.Key.ESCAPE)
    browser.sleep(5000);
  }

}

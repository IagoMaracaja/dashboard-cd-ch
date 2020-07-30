import {DashboardPage} from '../../pages/dashboard/dashboard.page';
import {browser} from 'protractor';

const dashboardPage = new DashboardPage();

describe('', () => {

  beforeAll(() => {
    browser.waitForAngularEnabled(false);

    dashboardPage.getHome();
  });

  it('should change the filter option', function() {
    dashboardPage.filter(1);
  });

});

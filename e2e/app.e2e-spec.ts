import { AppangPage } from './app.po';

describe('appang App', () => {
  let page: AppangPage;

  beforeEach(() => {
    page = new AppangPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { NewWebstormPage } from './app.po';

describe('new-webstorm App', () => {
  let page: NewWebstormPage;

  beforeEach(() => {
    page = new NewWebstormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

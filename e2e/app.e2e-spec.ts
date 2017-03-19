import { SocialappPage } from './app.po';

describe('socialapp App', () => {
  let page: SocialappPage;

  beforeEach(() => {
    page = new SocialappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

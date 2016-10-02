import { TimberlandsPage } from './app.po';

describe('timberlands App', function() {
  let page: TimberlandsPage;

  beforeEach(() => {
    page = new TimberlandsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

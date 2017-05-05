import { QuickappsPage } from './app.po';

describe('quickapps App', function() {
  let page: QuickappsPage;

  beforeEach(() => {
    page = new QuickappsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

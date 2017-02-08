import { SortingTablePage } from './app.po';

describe('sorting-table App', function() {
  let page: SortingTablePage;

  beforeEach(() => {
    page = new SortingTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

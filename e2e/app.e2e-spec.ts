import { TiendaonlinePage } from './app.po';

describe('tiendaonline App', () => {
  let page: TiendaonlinePage;

  beforeEach(() => {
    page = new TiendaonlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

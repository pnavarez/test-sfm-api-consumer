import { SfmApiConsumerPage } from './app.po';

describe('sfm-api-consumer App', () => {
  let page: SfmApiConsumerPage;

  beforeEach(() => {
    page = new SfmApiConsumerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

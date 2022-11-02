import { newE2EPage } from '@stencil/core/testing';

describe('clr-block-expand', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-block-expand></clr-block-expand>');

    const element = await page.find('clr-block-expand');
    expect(element).toHaveClass('hydrated');
  });
});

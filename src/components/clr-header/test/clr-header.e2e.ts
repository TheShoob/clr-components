import { newE2EPage } from '@stencil/core/testing';

describe('clr-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-header></clr-header>');

    const element = await page.find('clr-header');
    expect(element).toHaveClass('hydrated');
  });
});

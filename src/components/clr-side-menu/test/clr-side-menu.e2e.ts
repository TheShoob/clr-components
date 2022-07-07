import { newE2EPage } from '@stencil/core/testing';

describe('clr-side-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-side-menu></clr-side-menu>');

    const element = await page.find('clr-side-menu');
    expect(element).toHaveClass('hydrated');
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('clr-popup-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-popup-btn></clr-popup-btn>');

    const element = await page.find('clr-popup-btn');
    expect(element).toHaveClass('hydrated');
  });
});

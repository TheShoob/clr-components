import { newE2EPage } from '@stencil/core/testing';

describe('clr-icon-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-icon-btn></clr-icon-btn>');

    const element = await page.find('clr-icon-btn');
    expect(element).toHaveClass('hydrated');
  });
});

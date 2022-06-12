import { newE2EPage } from '@stencil/core/testing';

describe('clr-slide', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-slide></clr-slide>');

    const element = await page.find('clr-slide');
    expect(element).toHaveClass('hydrated');
  });
});

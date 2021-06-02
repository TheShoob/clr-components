import { newE2EPage } from '@stencil/core/testing';

describe('clr-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-carousel></clr-carousel>');

    const element = await page.find('clr-carousel');
    expect(element).toHaveClass('hydrated');
  });
});

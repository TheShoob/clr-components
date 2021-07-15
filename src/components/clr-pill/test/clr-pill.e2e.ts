import { newE2EPage } from '@stencil/core/testing';

describe('clr-pill', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-pill></clr-pill>');

    const element = await page.find('clr-pill');
    expect(element).toHaveClass('hydrated');
  });
});

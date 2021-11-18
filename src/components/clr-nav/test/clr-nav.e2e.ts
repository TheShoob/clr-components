import { newE2EPage } from '@stencil/core/testing';

describe('clr-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-nav></clr-nav>');

    const element = await page.find('clr-nav');
    expect(element).toHaveClass('hydrated');
  });
});

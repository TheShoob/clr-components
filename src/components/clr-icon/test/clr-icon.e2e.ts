import { newE2EPage } from '@stencil/core/testing';

describe('clr-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-icon></clr-icon>');

    const element = await page.find('clr-icon');
    expect(element).toHaveClass('hydrated');
  });
});

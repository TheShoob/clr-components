import { newE2EPage } from '@stencil/core/testing';

describe('clr-expand-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-expand-link></clr-expand-link>');

    const element = await page.find('clr-expand-link');
    expect(element).toHaveClass('hydrated');
  });
});

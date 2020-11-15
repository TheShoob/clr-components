import { newE2EPage } from '@stencil/core/testing';

describe('clr-left-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-left-drawer></clr-left-drawer>');

    const element = await page.find('clr-left-drawer');
    expect(element).toHaveClass('hydrated');
  });
});

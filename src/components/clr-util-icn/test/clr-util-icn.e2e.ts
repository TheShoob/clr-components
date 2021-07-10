import { newE2EPage } from '@stencil/core/testing';

describe('clr-util-icn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-util-icn></clr-util-icn>');

    const element = await page.find('clr-util-icn');
    expect(element).toHaveClass('hydrated');
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('clr-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-footer></clr-footer>');

    const element = await page.find('clr-footer');
    expect(element).toHaveClass('hydrated');
  });
});

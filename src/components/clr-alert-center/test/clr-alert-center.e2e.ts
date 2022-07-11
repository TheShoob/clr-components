import { newE2EPage } from '@stencil/core/testing';

describe('clr-alert-center', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-alert-center></clr-alert-center>');

    const element = await page.find('clr-alert-center');
    expect(element).toHaveClass('hydrated');
  });
});

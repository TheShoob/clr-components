import { newE2EPage } from '@stencil/core/testing';

describe('clr-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-alert></clr-alert>');

    const element = await page.find('clr-alert');
    expect(element).toHaveClass('hydrated');
  });
});

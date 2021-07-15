import { newE2EPage } from '@stencil/core/testing';

describe('clr-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-card></clr-card>');

    const element = await page.find('clr-card');
    expect(element).toHaveClass('hydrated');
  });
});

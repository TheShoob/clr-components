import { newE2EPage } from '@stencil/core/testing';

describe('clr-drop-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-drop-link></clr-drop-link>');

    const element = await page.find('clr-drop-link');
    expect(element).toHaveClass('hydrated');
  });
});

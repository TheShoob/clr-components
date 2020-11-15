import { newE2EPage } from '@stencil/core/testing';

describe('clr-drop-expand', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clr-drop-expand></clr-drop-expand>');

    const element = await page.find('clr-drop-expand');
    expect(element).toHaveClass('hydrated');
  });
});

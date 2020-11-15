import { newSpecPage } from '@stencil/core/testing';
import { ClrPopupBtn } from './clr-popup-btn';

describe('clr-popup-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrPopupBtn],
      html: `<clr-popup-btn></clr-popup-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-popup-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-popup-btn>
    `);
  });
});

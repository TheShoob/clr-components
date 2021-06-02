import { newSpecPage } from '@stencil/core/testing';
import { ClrIconBtn } from '../clr-icon-btn';

describe('clr-icon-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrIconBtn],
      html: `<clr-icon-btn></clr-icon-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-icon-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-icon-btn>
    `);
  });
});

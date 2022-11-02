import { newSpecPage } from '@stencil/core/testing';
import { ClrExpandLink } from '../clr-expand-link';

describe('clr-expand-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrExpandLink],
      html: `<clr-expand-link></clr-expand-link>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-expand-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-expand-link>
    `);
  });
});

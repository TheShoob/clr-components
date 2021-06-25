import { newSpecPage } from '@stencil/core/testing';
import { ClrDropLink } from '../clr-drop-link';

describe('clr-drop-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrDropLink],
      html: `<clr-drop-link></clr-drop-link>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-drop-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-drop-link>
    `);
  });
});

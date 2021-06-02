import { newSpecPage } from '@stencil/core/testing';
import { ClrFooter } from '../clr-footer';

describe('clr-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrFooter],
      html: `<clr-footer></clr-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-footer>
    `);
  });
});

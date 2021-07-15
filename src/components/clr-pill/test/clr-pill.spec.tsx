import { newSpecPage } from '@stencil/core/testing';
import { ClrPill } from '../clr-pill';

describe('clr-pill', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrPill],
      html: `<clr-pill></clr-pill>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-pill>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-pill>
    `);
  });
});

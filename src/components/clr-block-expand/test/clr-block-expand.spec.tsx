import { newSpecPage } from '@stencil/core/testing';
import { ClrBlockExpand } from '../clr-block-expand';

describe('clr-block-expand', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrBlockExpand],
      html: `<clr-block-expand></clr-block-expand>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-block-expand>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-block-expand>
    `);
  });
});

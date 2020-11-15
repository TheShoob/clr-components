import { newSpecPage } from '@stencil/core/testing';
import { ClrDropExpand } from './clr-drop-expand';

describe('clr-drop-expand', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrDropExpand],
      html: `<clr-drop-expand></clr-drop-expand>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-drop-expand>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-drop-expand>
    `);
  });
});

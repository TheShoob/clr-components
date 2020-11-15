import { newSpecPage } from '@stencil/core/testing';
import { ClrLeftDrawer } from './clr-left-drawer';

describe('clr-left-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrLeftDrawer],
      html: `<clr-left-drawer></clr-left-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-left-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-left-drawer>
    `);
  });
});

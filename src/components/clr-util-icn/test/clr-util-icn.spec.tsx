import { newSpecPage } from '@stencil/core/testing';
import { ClrUtilIcn } from '../clr-util-icn';

describe('clr-util-icn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrUtilIcn],
      html: `<clr-util-icn></clr-util-icn>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-util-icn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-util-icn>
    `);
  });
});

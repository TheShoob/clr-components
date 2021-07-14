import { newSpecPage } from '@stencil/core/testing';
import { ClrIcon } from '../clr-icon';

describe('clr-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrIcon],
      html: `<clr-icon></clr-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-icon>
    `);
  });
});

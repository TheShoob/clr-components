import { newSpecPage } from '@stencil/core/testing';
import { ClrNav } from '../clr-nav';

describe('clr-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrNav],
      html: `<clr-nav></clr-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-nav>
    `);
  });
});

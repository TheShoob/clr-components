import { newSpecPage } from '@stencil/core/testing';
import { ClrSideMenu } from '../clr-side-menu';

describe('clr-side-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrSideMenu],
      html: `<clr-side-menu></clr-side-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-side-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-side-menu>
    `);
  });
});

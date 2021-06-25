import { newSpecPage } from '@stencil/core/testing';
import { ClrHeader } from '../clr-header';

describe('clr-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrHeader],
      html: `<clr-header></clr-header>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-header>
    `);
  });
});

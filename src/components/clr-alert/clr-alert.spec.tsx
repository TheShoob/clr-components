import { newSpecPage } from '@stencil/core/testing';
import { ClrAlert } from './clr-alert';

describe('clr-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrAlert],
      html: `<clr-alert></clr-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-alert>
    `);
  });
});

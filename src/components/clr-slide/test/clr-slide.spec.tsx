import { newSpecPage } from '@stencil/core/testing';
import { ClrSlide } from '../clr-slide';

describe('clr-slide', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrSlide],
      html: `<clr-slide></clr-slide>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-slide>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-slide>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { ClrCarousel } from '../clr-carousel';

describe('clr-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrCarousel],
      html: `<clr-carousel></clr-carousel>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-carousel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-carousel>
    `);
  });
});

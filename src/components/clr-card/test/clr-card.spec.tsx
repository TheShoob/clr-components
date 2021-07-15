import { newSpecPage } from '@stencil/core/testing';
import { ClrCard } from '../clr-card';

describe('clr-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrCard],
      html: `<clr-card></clr-card>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-card>
    `);
  });
});

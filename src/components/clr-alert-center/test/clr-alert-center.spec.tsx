import { newSpecPage } from '@stencil/core/testing';
import { ClrAlertCenter } from '../clr-alert-center';

describe('clr-alert-center', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClrAlertCenter],
      html: `<clr-alert-center></clr-alert-center>`,
    });
    expect(page.root).toEqualHtml(`
      <clr-alert-center>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clr-alert-center>
    `);
  });
});

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'clr-footer',
  styleUrl: 'clr-footer.scss',
  shadow: true,
})
export class ClrFooter {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

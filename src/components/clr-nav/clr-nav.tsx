import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'clr-nav',
  styleUrl: 'clr-nav.scss',
  shadow: true,
})
export class ClrNav {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

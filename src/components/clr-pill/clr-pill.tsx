import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'clr-pill',
  styleUrl: 'clr-pill.css',
  shadow: true,
})
export class ClrPill {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

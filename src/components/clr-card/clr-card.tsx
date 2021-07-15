import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'clr-card',
  styleUrl: 'clr-card.css',
  shadow: true,
})
export class ClrCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

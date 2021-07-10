import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'clr-carousel',
  styleUrl: 'clr-carousel.scss',
  shadow: true,
})
export class ClrCarousel {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

import { Component, Host, h, State, Listen, Method, Element } from '@stencil/core';

import Hammer from 'hammerjs';
import anime from 'animejs';
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

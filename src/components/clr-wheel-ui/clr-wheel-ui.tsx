import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'clr-wheel-ui',
  styleUrl: 'clr-wheel-ui.scss',
  shadow: true,
})
export class ClrWheelUi implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

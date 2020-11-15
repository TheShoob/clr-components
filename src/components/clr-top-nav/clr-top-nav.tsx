import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'clr-top-nav',
  styleUrl: 'clr-top-nav.scss',
  shadow: true,
})
export class ClrTopNav implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

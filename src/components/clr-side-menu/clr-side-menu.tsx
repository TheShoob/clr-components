import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'clr-side-menu',
  styleUrl: 'clr-side-menu.scss',
  shadow: true,
})
export class ClrSideMenu {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

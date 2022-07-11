import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'clr-alert-center',
  styleUrl: 'clr-alert-center.css',
  shadow: true,
})
export class ClrAlertCenter {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

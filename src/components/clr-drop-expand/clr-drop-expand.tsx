import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'clr-drop-expand',
  styleUrl: 'clr-drop-expand.scss',
  shadow: true,
})
export class ClrDropExpand implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

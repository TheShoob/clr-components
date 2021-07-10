import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'clr-util-icn',
  styleUrl: 'clr-util-icn.scss',
  shadow: true,
})
export class ClrUtilIcn {
  @Prop() kind: "info" | "success" | "error" = "info";
  getCSSClass = () => this.kind;

  render() {
    return (
      <Host>
        <button class={this.getCSSClass()}></button>
      </Host>
    );
  }

}

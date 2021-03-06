import { Component, Host, h, Prop } from '@stencil/core';
import test from './assets/test.svg';

@Component({
  tag: 'clr-util-icn',
  styleUrl: 'clr-util-icn.scss',
  shadow: true,
})
export class ClrUtilIcn {
  @Prop() size: "tiny" | "small" | "medium" | "large" | "full" = "tiny";
  getCSSClass = () => this.size;

  render() {
    return (
      <Host>
        <div class={this.getCSSClass()} innerHTML={test}></div>
      </Host>
    );
  }

}

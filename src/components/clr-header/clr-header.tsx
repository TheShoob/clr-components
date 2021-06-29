import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'clr-header',
  styleUrl: 'clr-header.scss',
  shadow: true,
})

export class ClrHeader {

  @Prop() src: string = "#";

  render() {
    return (
      <Host>
        <div class="logo">
          <slot name="logo">
            <img src={this.src} />
          </slot>
        </div>
        <nav><slot name="nav"></slot></nav>
        <slot name="icon"></slot>
        <slot name="btn"></slot>
      </Host>
    );
  }

}

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
        <div><slot name="icon"></slot></div>
        <div class="btn"><slot name="btn"></slot></div>
      </Host>
    );
  }

}

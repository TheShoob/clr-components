import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'clr-icon-btn',
  styleUrl: 'clr-icon-btn.scss',
  shadow: true,
})
export class ClrIconBtn {
  @Prop() text: string = "default text if no text in component";

  render() {
    return (
      <Host>
        <button>
          <slot name="icon"/>
          {this.text}
        </button>
      </Host>
    );
  }

}

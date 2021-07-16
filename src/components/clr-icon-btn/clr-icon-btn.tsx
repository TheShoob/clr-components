import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'clr-icon-btn',
  styleUrl: 'clr-icon-btn.scss',
  shadow: true,
})
export class ClrIconBtn {
  @Prop() text: string = "default text if no text in component";
  @Prop() ariaLabel: string = "a button";

  render() {
    return (
      <Host>
        <button aria-label={this.ariaLabel}>
          <slot name="icon"/>
          {this.text}
        </button>
      </Host>
    );
  }

}

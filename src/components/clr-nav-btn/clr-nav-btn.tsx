import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'clr-nav-btn',
  styleUrl: 'clr-nav-btn.scss',
  shadow: true
})
export class clrNavBtn {

  // Indicate that name should be a public property on the component
  @Prop() name: string;

  render() {
    return (
      <p>
        My name is {this.name}
      </p>
    );
  }
}
import { Component, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'clr-nav-btn',
  styleUrl: 'clr-nav-btn.scss',
  shadow: true
})
export class clrNavBtn {

  @State() on: boolean;
  @Listen('click', { capture: true })
  handleClick() {
    this.on = !this.on;
    //console.log('button got clicked')
  }

  render() {
    return (
      <button>
      </button>
    );
  }
}
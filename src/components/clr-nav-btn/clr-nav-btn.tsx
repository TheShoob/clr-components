import { Component, h, State, Listen} from '@stencil/core';

@Component({
  tag: 'clr-nav-btn',
  styleUrl: 'clr-nav-btn.scss',
  shadow: true
})
export class ClrNavBtn {
  @State() on: boolean = false;
  @Listen('openCheck' , { target: 'body' })
  openCheck(event:CustomEvent<boolean>) {
    //console.log(event.detail);
    if (event.detail == false) {
      this.on = false;
    } else {
      this.on = true;
    }
  }
  getCSSClass = () => (this.on ? 'on' : 'off');

  render() {
    return (
      <button id="navbtn" class={this.getCSSClass()} aria-label="open left navagation">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    );
  }
}
import { Component, h, State} from '@stencil/core';
//import {  } from '../clr-left-drawer/clr-left-drawer';

@Component({
  tag: 'clr-nav-btn',
  styleUrl: 'clr-nav-btn.scss',
  shadow: true
})
export class ClrNavBtn {
  @State() on: boolean = false;

  navBtnClick = () => {
    if (this.on ? true : '') {
      this.on = false;
    } else {
      this.on = true;
    }
  }

  getCSSClass = () => (this.on ? 'on' : 'off');

  render() {
    return (
      <button class={this.getCSSClass()} onClick={this.navBtnClick}>
      </button>
    );
  }
}
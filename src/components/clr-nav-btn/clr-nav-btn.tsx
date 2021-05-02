import { Component, h, State, Listen} from '@stencil/core';
//import {  } from '../clr-left-drawer/clr-left-drawer';

@Component({
  tag: 'clr-nav-btn',
  styleUrl: 'clr-nav-btn.scss',
  shadow: true
})
export class ClrNavBtn {
  @State() on: boolean = false;

  @Listen('mouseup', { target: 'window' })
  handleClick(ev) {
    let localName = ev.target.localName;
    if (localName === 'clr-left-drawer'){
      console.log('hi')
    }
  }

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
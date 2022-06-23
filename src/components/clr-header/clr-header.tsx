import { Component, Host, h, Prop, Element, State, Listen } from '@stencil/core';

@Component({
  tag: 'clr-header',
  styleUrl: 'clr-header.scss',
  shadow: true,
})

export class ClrHeader {
  @Prop() src: string = "#";
  @Element() host: HTMLElement;
  @State() childrenData: any = {};
  @State() mobile: boolean = false;

  componentWillLoad() { 
    let slotted = this.host.children;
    this.childrenData = { hasChildren: slotted && slotted.length > 0, numberOfChildren: slotted && slotted.length };
  }

  @Listen('mobileState' , { target: 'body' })
  mobileState(event:CustomEvent<boolean>) {
    if (event.detail == false) {
      //console.log(event.detail);
      this.mobile = false;
    } else {
      //console.log(event.detail);
      this.mobile = true;
    }
  }
  
  render() {
    if (this.mobile == false) {
      return (
        <Host>
          <slot name="logo"></slot>

          <slot name="nav"></slot>

          <slot name="icon"></slot>
        </Host>
      );
    } else {
      return (
        <Host>
          <slot name="logo"></slot>

          <slot name="nav"></slot>

          <slot name="icon"></slot>

          <slot name="btn"></slot>
        </Host>
      );
    }
  }
}

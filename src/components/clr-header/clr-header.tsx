import { Component, Host, h, Prop, Element, State } from '@stencil/core';


/*let gnw = function() {*/ // * get nav width
  //return document.getElementsByTagName('clr-left-drawer')[0].shadowRoot.querySelectorAll('nav')[0].offsetWidth;
  //return this.host.querySelectorAll('nav')[0].offsetWidth;
/*}*/

//console.log(gnw());
@Component({
  tag: 'clr-header',
  styleUrl: 'clr-header.scss',
  shadow: true,
})

export class ClrHeader {
  @Prop() src: string = "#";
  @Element() host: HTMLElement;
  @State() childrenData: any = {};

  componentWillLoad() { 
    let slotted = this.host.children;
    this.childrenData = { hasChildren: slotted && slotted.length > 0, numberOfChildren: slotted && slotted.length };
  
  }
  componentDidLoad(){
    console.log(this.host.querySelectorAll('nav')[0].offsetWidth)
  }

  render() {
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

import { Component, ComponentInterface, Host, h, Prop, Element, State } from '@stencil/core';
import anime from 'animejs';
@Component({
  tag: 'clr-drop-expand',
  styleUrl: 'clr-drop-expand.scss',
  shadow: true,
})



export class ClrDropExpand implements ComponentInterface {
  @Prop() text: string = "Text for the link";
  @Prop() href: string = "#";

  @Element() host: HTMLElement;
  @State() childrenData: any = {};

  componentWillLoad() {
    let slotted = this.host.children;
    this.childrenData = { hasChildren: slotted && slotted.length > 0, numberOfChildren: slotted && slotted.length };
  }

  //*ARROW AND EXPAND AREA OPEN/CLOSE
  openSub = () => {
    let expand = this.host.shadowRoot.querySelectorAll('.expand');
    let expandInnerHeight = this.host.shadowRoot.querySelectorAll('.expandInner')[0].clientHeight + 'px';

    anime({
      targets: expand,
      height: expandInnerHeight,
      overflow: 'visible',
      backgroundColor: '#333',
      easing: 'easeInOutQuad'
    });
  }
  //*

  render() {
      if (this.childrenData.hasChildren == true) {
        return (
          <Host>
            <div class="main-link">
              <a href={this.href}>{this.text}</a>
              <div class="arrow" onClick={this.openSub}></div>
            </div>

            <div class="expand">
              <div class="expandInner">
                <slot name="link"/>
              </div>
            </div>
          </Host> 
        )
      } else {
        return (
          <Host>
            <a href={this.href}>{this.text}</a>
          </Host> 
        )
      }
  }

}

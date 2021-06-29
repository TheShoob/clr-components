import { Component, Host, h, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'clr-drop-link',
  styleUrl: 'clr-drop-link.scss',
  shadow: true,
})

export class ClrDropLink {
  @Prop() text: string = "Text for the link";
  @Prop() href: string = "#";
  @Element() host: HTMLElement;
  @State() childrenData: any = {};

  componentWillLoad() {
    let slotted = this.host.children;
    this.childrenData = { hasChildren: slotted && slotted.length > 0, numberOfChildren: slotted && slotted.length };  
  }

  componentDidLoad() {
    let sub = this.host.querySelector<HTMLElement>('clr-drop-link clr-drop-link');
    if (sub != null) {
      let subWidth = sub.offsetWidth;
      let subSub = sub.shadowRoot.querySelector('div');
      subSub.style.left = "100%"
      subSub.style.top = "0%"
      subSub.style.minWidth = subWidth + 'px'
    }
  }

  render() {
    if (this.childrenData.hasChildren == true) {
      return (
        <Host>
          <a href={this.href}>{this.text}</a>
          <div class="drop">
            <slot name="link"/>
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

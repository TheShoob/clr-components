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

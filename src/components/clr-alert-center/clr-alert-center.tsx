import { Component, Host, h, Prop, State,Element } from '@stencil/core';

@Component({
  tag: 'clr-alert-center',
  styleUrl: 'clr-alert-center.scss',
  shadow: true,
})
export class ClrAlertCenter {
  @Prop() location: "top" | "bottom" = "top";
  @Element() host: HTMLElement;
  @State() childrenData: any = {};


  componentWillLoad() {
    let slotted = this.host.children;
    this.childrenData = { hasChildren: slotted && slotted.length > 0, numberOfChildren: slotted && slotted.length };  
  }

  getCSSClass = () => this.location ;

  render() {
    return (
      <Host>
        <div class={this.getCSSClass()}>
          <slot name="alert"></slot>
        </div>
      </Host>
    );
  }

}

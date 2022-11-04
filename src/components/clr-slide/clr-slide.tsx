import { Component, Host, h, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'clr-slide',
  styleUrl: 'clr-slide.scss',
  shadow: true,
})
export class ClrSlide {
  @Prop() title:string = '';
  @Prop() bgimg: string = "";
  @Prop() bgcolor: string = "";
  @State() childrenData: any = {};
  @State() bgrepeat: boolean = false;
  @Element() host: HTMLElement;

  componentWillLoad() {
    let slotted = this.host.querySelectorAll('[slot="info"]');
    this.childrenData = { hasChildren: slotted && slotted.length > 0, numberOfChildren: slotted && slotted.length };
  }


  render() {
    return (
      <Host>
        <div class="slide" style={{ 'background': 'var(' + this.bgcolor + ')', 'background-color': this.bgcolor, 'background-image': 'url(' + this.bgimg + ')', }}>
          <h2>{this.title}</h2>
          <slot name="img"/>
          <slot name="info"/>
        </div>
      </Host>
    );
  }

}

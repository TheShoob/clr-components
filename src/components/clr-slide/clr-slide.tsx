import { Component, Host, h, Prop, State, Element, Listen } from '@stencil/core';
let gww = () => { return window.innerWidth;} // * get window width
@Component({
  tag: 'clr-slide',
  styleUrl: 'clr-slide.scss',
  shadow: true,
})
export class ClrSlide {
  @Prop() title:string = '';
  @Prop() bgimg: string = "";
  @Prop() bgcolor: string = "";
  @Prop() justify: string = "left";
  @Prop() breakpoint: string = "600";

  @State() childrenData: any = {};
  @State() bgrepeat: boolean = false;
  @State() mobile: boolean = false;

  @Element() host: HTMLElement;
 

  componentWillLoad() {
    let slotted = this.host.querySelectorAll('[slot="info"]');
    this.childrenData = { hasChildren: slotted && slotted.length > 0, numberOfChildren: slotted && slotted.length };
  }

  @Listen('resize', { target: 'window'})
  windowWidth() {     // * the listener for window resize
      this.mobile = !this.mobile;
  }

  render() {
    if ((gww() >= Number(this.breakpoint))) {
      return (
        <Host>
          <div class="slide" style={{ 'background': 'var(' + this.bgcolor + ')', 'background-color': this.bgcolor, 'background-image': 'url(' + this.bgimg + ')', 'justify-content': this.justify }}>
            <slot name="img"/>
            <section>
              <h2>{this.title}</h2>
              <slot name="info"/>
            </section>
          </div>
        </Host>
      ); 
    } else if ((gww() <= Number(this.breakpoint))) {
      return (
        <Host>
          <div class="slide mobile" style={{ 'background': 'var(' + this.bgcolor + ')', 'background-color': this.bgcolor, 'background-image': 'url(' + this.bgimg + ')', 'justify-content': 'center' }}>
            
            <h2>{this.title}</h2>
            
            <section>
              <div>
                <slot name="img"/>
              </div>
              <slot name="info"/>
            </section>
          </div>
        </Host>
      );
    }
  }
}

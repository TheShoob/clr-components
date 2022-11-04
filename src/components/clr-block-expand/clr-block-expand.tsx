import { Component, Host, h, Prop, State, Element } from '@stencil/core';
import anime from 'animejs';

@Component({
  tag: 'clr-block-expand',
  styleUrl: 'clr-block-expand.scss',
  shadow: true,
})
export class ClrBlockExpand {
  @State() toggle: boolean = false;
  @State() childrenData: any = {};
  @Prop() bgimg: string = "";
  @Prop() bgcolor: string = "";
  @Prop() show: string = "";
  @Element() host: HTMLElement;


  componentWillLoad() {
    let slotted = this.host.querySelectorAll('[slot="body"]');
    this.childrenData = { hasChildren: slotted && slotted.length > 0, numberOfChildren: slotted && slotted.length };
  }


  //*ARROW AND EXPAND AREA OPEN/CLOSE
  toggleSub = () => {
    let arrow = this.host.shadowRoot.querySelectorAll('.arrow');
    let expand = this.host.shadowRoot.querySelector<HTMLElement>('.expand');
    let expandInnerHeight = this.host.shadowRoot.querySelectorAll('.expandInner')[0].clientHeight + 'px';
    this.toggle = !this.toggle;
    if (this.toggle == true){
      setTimeout(function(){
        expand.style.height = 'auto';
      }.bind(this), 350);
    } else if (this.toggle == false){
      expand.style.height = expandInnerHeight;
    }

    anime({
      targets: expand,
      height: this.toggle ? expandInnerHeight : this.show,
      duration: 300,
      easing: 'easeInOutQuad',
    });
    anime({
      targets: arrow,
      rotate: {
          value: this.toggle ? -180 : 0,
          duration: 300,
          easing: 'easeInOutQuad'
      },
    });

  }
  //*
  

  render() {
    return (
      <Host>
        <div class="block">
          <div class="header" style={{ 'background': 'var(' + this.bgcolor + ')', 'background-color': this.bgcolor, 'background-image': 'url(' + this.bgimg + ')', }}>
            <div class="info">
              <slot name="info"/>
            </div>
          </div>
          <br/>
          <div class="block-body">
            <div class="expand" style={{ 'height': this.show }}>
              <div class="expandInner">
                <slot name="body"/>
              </div>
            </div>
            <div class="fade" style={{ 'height': this.show, 'margin-top': '-' + this.show }}></div>
            <div class="arrowWrap" onClick={this.toggleSub}>
              <div class="arrow"></div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}

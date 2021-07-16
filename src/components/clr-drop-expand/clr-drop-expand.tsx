import { Component, ComponentInterface, Host, h, Prop, Element, State } from '@stencil/core';
import anime from 'animejs';
@Component({
  tag: 'clr-drop-expand',
  styleUrl: 'clr-drop-expand.scss',
  shadow: true,
})

export class ClrDropExpand implements ComponentInterface {
  @Prop() text: string = "Text for the link";
  @Prop() href: string = "";
  @Prop() url: string = "";

  @Element() host: HTMLElement;

  @State() toggle: boolean = false;
  @State() childrenData: any = {};

  componentWillLoad() {
    let slotted = this.host.children;
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
      height: this.toggle ? expandInnerHeight : '0px',
      duration: 300,
      easing: 'easeInOutQuad',
    });
    anime({
      targets: arrow,
      rotate: {
          value: this.toggle ? -90 : 0,
          duration: 300,
          easing: 'easeInOutQuad'
      },
    });

  }
  //*

  render() {
      if (this.childrenData.hasChildren == true && this.href !== "") {
        return (
          <Host>
            <div class="main-link">
              <a href={this.href} >{this.text}</a>
              <div class="arrowWrap" onClick={this.toggleSub}>
                <div class="arrow"></div>
              </div>
            </div>

            <div class="expand">
              <div class="expandInner">
                <slot name="link"/>
              </div>
            </div>
          </Host> 
        )
      } else if (this.childrenData.hasChildren == false && this.href !== ""){
        return (
          <Host>
            <div class="main-link">
              <a href={this.href}>{this.text}</a>
            </div>
          </Host> 
        )
      } else if (this.childrenData.hasChildren == true && this.url !== "") {
        return (
          <Host>
            <div class="main-link">
              <div><stencil-route-link url={this.url} >{this.text}</stencil-route-link></div>
              <div class="arrowWrap" onClick={this.toggleSub}>
                <div class="arrow"></div>
              </div>
            </div>

            <div class="expand">
              <div class="expandInner">
                <slot name="link"/>
              </div>
            </div>
          </Host> 
        )
      } else if (this.childrenData.hasChildren == false && this.url !== ""){
        return (
          <Host>
            <div class="main-link">
              <div><stencil-route-link url={this.url} >{this.text}</stencil-route-link></div>
            </div>
          </Host> 
        )
      }







  }

}

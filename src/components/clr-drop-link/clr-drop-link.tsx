import { Component, Host, h, Prop, State, Element } from '@stencil/core';
import anime from 'animejs';

@Component({
  tag: 'clr-drop-link',
  styleUrl: 'clr-drop-link.scss',
  shadow: true,
})

export class ClrDropLink {
  @Prop() text: string = "Text for the link";
  @Prop() href: string = "";
  @Prop() url: string = "";

  @Element() host: HTMLElement;

  @State() childrenData: any = {};
  @State() toggle: boolean = false;


  componentWillLoad() {
    let slotted = this.host.children;
    this.childrenData = { hasChildren: slotted && slotted.length > 0, numberOfChildren: slotted && slotted.length };  
  }

  componentDidLoad() {
    let sub = this.host.querySelector<HTMLElement>('clr-drop-link clr-drop-link');
    if (sub != null) {
      let subWidth = sub.offsetWidth;
      let subSub = sub.shadowRoot.querySelector<HTMLElement>('.drop');
      subSub.style.left = "100%"
      subSub.style.top = "0%"
      subSub.style.minWidth = subWidth + 'px'
    }

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
    if (this.childrenData.hasChildren == true && this.href !== "" && "ontouchstart" in document.documentElement == false) {
      return (
        <Host>
          <div class="dl">
            <a href={this.href}>{this.text}</a>
            <div class="drop">
              <slot name="link"/>
            </div>
          </div>
        </Host>
      )
    } else if (this.childrenData.hasChildren == false && this.href !== "" && "ontouchstart" in document.documentElement == false) {
      return (
        <Host>
          <div class="dl">
            <a href={this.href}>{this.text}</a>
          </div>
        </Host> 
      )
    }
    if (this.childrenData.hasChildren == true && this.url !== "" && "ontouchstart" in document.documentElement == false) {
      return (
        <Host>
          <div class="dl">
            <div><stencil-route-link url={this.url} >{this.text}</stencil-route-link></div>
            <div class="drop">
              <slot name="link"/>
            </div>
          </div>
        </Host>
      )
    } else if (this.childrenData.hasChildren == false && this.url !== "" && "ontouchstart" in document.documentElement == false) {
      return (
        <Host>
          <div class="dl">
            <div><stencil-route-link url={this.url} >{this.text}</stencil-route-link></div>
          </div>
        </Host> 
      )
    }


    if (this.childrenData.hasChildren == true && this.href !== "" && "ontouchstart" in document.documentElement == true) {
      return (
        <Host>
          <div class="el">
            <div class="expand-link">
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
          </div>
        </Host> 
      )
    } else if (this.childrenData.hasChildren == false && this.href !== "" && "ontouchstart" in document.documentElement == true) {
      return (
        <Host>
          <div class="el">
            <div class="expand-link">
              <a href={this.href}>{this.text}</a>
            </div>
          </div>
        </Host> 
      )
    }
    if (this.childrenData.hasChildren == true && this.url !== "" && "ontouchstart" in document.documentElement == true) {
      return (
        <Host>
          <div class="el">
            <div class="expand-link">
              <div class="btnWrap"><stencil-route-link url={this.url} >{this.text}</stencil-route-link></div>
              <div class="arrowWrap" onClick={this.toggleSub}>
                <div class="arrow"></div>
              </div>
            </div>

            <div class="expand">
              <div class="expandInner">
                <slot name="link"/>
              </div>
            </div>
          </div>
        </Host> 
      )
    } else if (this.childrenData.hasChildren == false && this.url !== "" && "ontouchstart" in document.documentElement == true) {
      return (
      <Host>
        <div class="el">
          <div class="main-link">
            <div class="btnWrap"><stencil-route-link url={this.url} >{this.text}</stencil-route-link></div>
          </div>
        </div>
      </Host> 
      )
    }

  }
}

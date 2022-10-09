import { Component, Host, h, Prop, State, Element } from '@stencil/core';
import anime from 'animejs';

@Component({
  tag: 'clr-card',
  styleUrl: 'clr-card.scss',
  shadow: true,
})
export class ClrCard {
  @Prop() maintitle: string = "";
  @Prop() subtitle: string = "";
  @Prop() href: string = "";
  @Prop() url: string = "";
  @Prop() src: string = "";
  @Prop() size: "quater" | "third" | "half" | "full" | "" = "quater";
  @State() toggle: boolean = false;
  @State() childrenData: any = {};
  @Element() host: HTMLElement;

  getSize = () => this.size;

  componentWillLoad() {
    let slotted = this.host.querySelectorAll('[slot="card-expand-body"]');
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
          value: this.toggle ? -180 : 0,
          duration: 300,
          easing: 'easeInOutQuad'
      },
    });

  }
  //*
  

  render() {
    if (this.childrenData.hasChildren == true) {
      return (
        <Host>
          <div class={this.getSize() + " card"}>
            <div class="img">
              <slot name="img"/>
            </div>
            <br/>
            <div class="card-body">
              <div class="card-title">{this.maintitle}</div>
              <div class="sub-title">{this.subtitle}</div>
              <slot name="card-body"/>

              <div class="expand">
                <div class="expandInner">
                  <slot name="card-expand-body"/>
                </div>
              </div>
              <div class="arrowWrap" onClick={this.toggleSub}>
                <div class="arrow"></div>
              </div>
            </div>
          </div>
        </Host>
      );

    } else {
      return (
        <Host>
          <div class={this.getSize() + " card"}>
            <div class="img">
              <slot name="img"/>
            </div>
            <br/>
            <div class="card-body">
              <div class="card-title">{this.maintitle}</div>
              <div class="sub-title">{this.subtitle}</div>
              <slot name="card-body"/>
              <div class="pad25"></div>
            </div>
          </div>
        </Host>
      );
    }
  }

}

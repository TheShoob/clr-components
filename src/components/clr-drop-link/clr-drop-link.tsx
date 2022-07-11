import { Component, Host, h, Prop, State, Element, Listen } from '@stencil/core';
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
  @Prop() target: string = "";


  @Element() host: HTMLElement;

  @State() childrenData: any = {};
  @State() toggle: boolean = false;
  @State() mobile: boolean = false;

  componentWillLoad() {
    let slotted = this.host.children;
    this.childrenData = { hasChildren: slotted && slotted.length > 0, numberOfChildren: slotted && slotted.length };  
  }

  componentDidRender() {
    this.desktopStyles();
  }

  @Listen('resize', { target: 'window'})
  windowWidth() {
    this.desktopStyles();
  } // * the listener for window resize

  @Listen('mobileState' , { target: 'body' }) // * the listener for mobile state
  mobileState(event:CustomEvent<boolean>) { // * Assigns mobile state
    if ((event.detail == true) /*|| ("ontouchstart" in document.documentElement == true)*/){
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }
  
  // ! ADD CHECK FOR MOUSE / POINTER EVENTS
  desktopStyles() { // * applies styles for desktop

    let sub = this.host.querySelector<HTMLElement>('clr-drop-link clr-drop-link')
    
    if (this.mobile == false) {//*  Desktop with submenu

      this.host.setAttribute("style", "padding: 0px 15px 0px 15px;")
      
     if (sub != null) {

        let subWidth = sub.offsetWidth
        let subSub = sub.shadowRoot.querySelector<HTMLElement>('.drop')
        subSub.style.left = "100%"
        subSub.style.top = "0%"
        subSub.style.minWidth = subWidth + 'px'
        sub.setAttribute("style", "padding: 0px 0px 0px 15px;") 

      } else {

        this.host.setAttribute("style", "padding: 0px 15px 0px 15px;")

      }

    } else if (this.mobile == true) {//*  Mobile with submenu
      
      this.host.setAttribute("style", "padding: 0px 0px 0px 0px;")      

    }

  }

  // * ARROW AND EXPAND AREA OPEN/CLOSE
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
    if (this.childrenData.hasChildren == true && this.href !== "" && this.mobile == false) { //* Desktop with href submenu
    return (
      <Host>
        <div class="dl">
          <a href={this.href} target={this.target}>{this.text}</a>
          <div class="drop">
            <slot name="link"/>
          </div>
        </div>
      </Host>
    )
    } else if (this.childrenData.hasChildren == false && this.href !== "" && this.mobile == false) { //* Desktop with href no submenu
      return (
        <Host>
          <div class="dl">
            <a href={this.href} target={this.target}>{this.text}</a>
          </div>
        </Host> 
      )
    } else if (this.childrenData.hasChildren == true && this.url !== "" && this.mobile == false) { //* Desktop with url submenu
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
    } else if (this.childrenData.hasChildren == false && this.url !== "" && this.mobile == false) { //* Desktop with url no submenu
      return (
        <Host>
          <div class="dl">
            <div><stencil-route-link url={this.url} >{this.text}</stencil-route-link></div>
          </div>
        </Host> 
      )
    } else if (this.childrenData.hasChildren == true && this.href !== "" && this.mobile == true) { //* Mobile with href submenu
      return (
        <Host>
          <div class="el">
            <div class="expand-link">
              <a href={this.href} target={this.target}>{this.text}</a>
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
    } else if (this.childrenData.hasChildren == false && this.href !== "" && this.mobile == true) { //* Mobile with href no submenu
      return (
        <Host>
          <div class="el">
            <div class="expand-link">
              <a href={this.href} target={this.target}>{this.text}</a>
            </div>
          </div>
        </Host> 
      )
    } else if (this.childrenData.hasChildren == true && this.url !== "" && this.mobile == true) { //* Mobile with url submenu
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
    } else if (this.childrenData.hasChildren == false && this.url !== "" && this.mobile == true) { //* Mobile with url no submenu
      return (
        <Host>
          <div class="el">
            <div class="expand-link">
              <div class="btnWrap"><stencil-route-link url={this.url} >{this.text}</stencil-route-link></div>
            </div>
          </div>
        </Host> 
      )
    }
  }
}

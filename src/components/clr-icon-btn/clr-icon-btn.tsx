import { Component, Host, h, Prop, Listen, Method, Element, Event, EventEmitter, State } from '@stencil/core';

let canvas = document.createElement("canvas");  
let context = canvas.getContext("2d");

@Component({
  tag: 'clr-icon-btn',
  styleUrl: 'clr-icon-btn.scss',
  shadow: true,
})

export class ClrIconBtn {
  @Element() host: HTMLElement;
  //@Element() el: HTMLElement;
  @Prop() text: string = "default text if no text in component";
  @Prop() ariaLabel: string = "a button";
  @Prop() href: string = "";
  @Prop() url: string = "";
  @Prop() target: string = "";
  @State() childrenData: any = {};

  @Prop({ mutable: true }) width: any = 0;

  @Event({bubbles:true, composed:true}) linkWidth: EventEmitter<any>
  //mobileStateHandler(width) {
    //width = this.host.offsetWidth;
    //this.linkWidth.emit(width.detail);
  //}

  componentWillLoad() {
  }

  componentDidLoad() {
    this.charCount();
    this.width = this.host.offsetWidth;
    this.linkWidth.emit(this.width);

    //console.log((e) => console.log(e.detail.name))
  }

  @Method() async charCount() {
    let longestWordLength = () => this.text.split(" ").sort(
      function(a, b) {
        return b.length - a.length;
      },
    );


    //let slotted = this.host.children;
    //this.childrenData = { hasChildren: slotted && slotted.length > 0, numberOfChildren: slotted && slotted.length };  
    //let fontSizeCalc:any = Number(getComputedStyle(this.el.shadowRoot.querySelector(".text")).fontSize.slice(0, -2));

    let iconWidth = this.host.shadowRoot.querySelector("slot").clientWidth;
    let text = this.host.shadowRoot.querySelector(".text");
    let fontSizeCalc:any = getComputedStyle(text).font;

    //console.log(iconWidth);
    context.font = fontSizeCalc;  
    let { width } = context.measureText(longestWordLength()[0]);  
    //console.log(width)
    width = Math.ceil(width)

   //console.log(longestWordLength()[0] + " | " + longestWordLength()[0].length + " | " + width + " | " + fontSizeCalc);

    
    if (this.host.shadowRoot.querySelector("a") != null) { //* check for A tag
      //console.log(Number(fontSizeCalc));
      if (this.host.shadowRoot.querySelector("a").clientWidth - iconWidth < Number(width)) {

        text.classList.remove("shown");
        text.classList.add("hidden");

      } else {

        text.classList.add("shown");
        text.classList.remove("hidden");

      }

    }

    if (this.host.shadowRoot.querySelector("div") != null) { //* check for DIV tag

      if (this.host.shadowRoot.querySelector("div").clientWidth - 24 < Number(width)) {

        text.classList.remove("shown");
        text.classList.add("hidden");

      } else {

        text.classList.add("shown");
        text.classList.remove("hidden");

      }

    }
    if (this.host.shadowRoot.querySelector("button") != null) { //* check for BUTTON tag

      if (this.host.shadowRoot.querySelector("button").clientWidth - 24 < Number(width)) {

        text.classList.remove("shown");
        text.classList.add("hidden");

      } else {

        text.classList.add("shown");
        text.classList.remove("hidden");

      }

    }
  }

  @Listen('resize', { target: 'window'})
  windowWidth() {
    this.charCount();
    //console.log(this.el.clientWidth);
  } // * the listener for window resize widthCheck()



 render() {
    if (this.href !== "") {       //* button with href and text

      return (
        <Host>
          <a class="wrap" href={this.href} target={this.target} aria-label={this.ariaLabel}>
            <slot name="icon"/>
            <span class="text shown">{this.text}</span>
            
          </a>
        </Host>
      );
     
    } else if (this.url !== "") { //* button with url

      return (
        <Host>
          <stencil-route-link url={this.url} >
            <div class="wrap" aria-label={this.ariaLabel}>
                <slot name="icon"/>
                <span class="text shown" >{this.text}</span>
            </div>
          </stencil-route-link>
        </Host>
      );

    } else {

      return (
        <Host>
          <button class="wrap" aria-label={this.ariaLabel}>
            <slot name="icon"/>
            <span class="text shown" >{this.text}</span>
          </button>
        </Host>
      );

    }
  }


 /* render() {
    if ((this.href !== "") && (this.textHidden == false)) {       //* button with href and text

      return (
        <Host>
          <a class="wrap" href={this.href} target={this.target} aria-label={this.ariaLabel}>
            <slot name="icon"/>
            {this.text}
          </a>
        </Host>
      );

    } else if ((this.href !== "") && (this.textHidden == true)) { //* button with href and text hidden

      return (
        <Host>
          <a class="wrap" href={this.href} target={this.target} aria-label={this.ariaLabel}>
            <slot name="icon"/>
          </a>
        </Host>
      );
     
    } else if ((this.url !== "") && (this.textHidden == false)) { //* button with url

      return (
        <Host>
          <stencil-route-link url={this.url} >
            <div class="wrap" aria-label={this.ariaLabel}>
                <slot name="icon"/>
                {this.text}
            </div>
          </stencil-route-link>
        </Host>
      );
     
    } else if ((this.url !== "") && (this.textHidden == true)) { //* button with url

      return (
        <Host>
          <stencil-route-link url={this.url} >
            <div class="wrap" aria-label={this.ariaLabel}>
                <slot name="icon"/>
            </div>
          </stencil-route-link>
        </Host>
      );

    } else if (this.textHidden == false) {

      return (
        <Host>
          <button class="wrap" aria-label={this.ariaLabel}>
            <slot name="icon"/>
            {this.text}
          </button>
        </Host>
      );

    } else if (this.textHidden == true){

      return (
        <Host>
          <button class="wrap" aria-label={this.ariaLabel}>
            <slot name="icon"/>
          </button>
        </Host>
      );

    }
  }*/





}

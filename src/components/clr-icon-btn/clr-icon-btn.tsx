import { Component, Host, h, Prop, State, Listen, Method, Element } from '@stencil/core';

let canvas = document.createElement("canvas");  
let context = canvas.getContext("2d"); 
@Component({
  tag: 'clr-icon-btn',
  styleUrl: 'clr-icon-btn.scss',
  shadow: true,
})

export class ClrIconBtn {
  @Element() el: HTMLElement;
  @Prop() text: string = "default text if no text in component";
  @Prop() ariaLabel: string = "a button";
  @Prop() href: string = "";
  @Prop() url: string = "";
  @Prop() target: string = "";
  //@State() textHidden: boolean = false;


  componentDidLoad() {
    this.widthCheck();
    //console.log(getComputedStyle(this.el.shadowRoot.querySelector(".wrap")).fontSize);


  }

  @Method() async widthCheck() {
    let longestWordLength = () => this.text.split(" ").sort(
      function(a, b) {
        return b.length - a.length;
      },
    );

    //let fontSizeCalc:any = Number(getComputedStyle(this.el.shadowRoot.querySelector(".text")).fontSize.slice(0, -2));
    let fontSizeCalc:any = getComputedStyle(this.el.shadowRoot.querySelector(".text")).font;

    context.font = fontSizeCalc;  
    let { width } = context.measureText(longestWordLength()[0]);  
    //console.log(width)
    width = Math.ceil(width)

   console.log(longestWordLength()[0] + " | " + longestWordLength()[0].length + " | " + width + " | " + fontSizeCalc);

    
    if (this.el.shadowRoot.querySelector("a") != null) { //* check for A tag
      //console.log(Number(fontSizeCalc));
      if (this.el.shadowRoot.querySelector("a").clientWidth - 24 < Number(width)) {

        this.el.shadowRoot.querySelector(".text").classList.remove("shown");
        this.el.shadowRoot.querySelector(".text").classList.add("hidden");

      } else {

        this.el.shadowRoot.querySelector(".text").classList.add("shown");
        this.el.shadowRoot.querySelector(".text").classList.remove("hidden");

      }

    }

    if (this.el.shadowRoot.querySelector("div") != null) { //* check for DIV tag

      if (this.el.shadowRoot.querySelector("div").clientWidth - 24 < Number(width)) {

        this.el.shadowRoot.querySelector(".text").classList.remove("shown");
        this.el.shadowRoot.querySelector(".text").classList.add("hidden");

      } else {

        this.el.shadowRoot.querySelector(".text").classList.add("shown");
        this.el.shadowRoot.querySelector(".text").classList.remove("hidden");

      }

    }
    if (this.el.shadowRoot.querySelector("button") != null) { //* check for BUTTON tag

      if (this.el.shadowRoot.querySelector("button").clientWidth - 24 < Number(width)) {

        this.el.shadowRoot.querySelector(".text").classList.remove("shown");
        this.el.shadowRoot.querySelector(".text").classList.add("hidden");

      } else {

        this.el.shadowRoot.querySelector(".text").classList.add("shown");
        this.el.shadowRoot.querySelector(".text").classList.remove("hidden");

      }

    }
  }

  @Listen('resize', { target: 'window'})
  windowWidth() {
    this.widthCheck();
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

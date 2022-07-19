import { Component, Host, h, Prop, State, Listen, Method, Element } from '@stencil/core';

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
  @State() textHidden: boolean = false;


  componentDidLoad() {
    this.widthCheck();
    //console.log(getComputedStyle(this.el.shadowRoot.querySelector(".wrap")).fontSize);


  }

  @Method() async widthCheck() {
    let longestWordLength = () => this.text.split(" ").sort(
      function(a, b) {
        return b.length - a.length;
      }
    );

    let fontSizeCalc:any = getComputedStyle(this.el.shadowRoot.querySelector(".wrap")).fontSize.slice(0, -2);
    //console.log(getComputedStyle(this.el).maxWidth);
    this.el.style.maxWidth = (this.text.length * fontSizeCalc) + 25 + "px";
    //console.log( this.text + " " + " " + this.text.length + " " + " " + fontSizeCalc + " " + " " + this.el.clientWidth + " " + " " + this.el.style.maxWidth );


    if (this.el.clientWidth < longestWordLength()[0].length * fontSizeCalc) {
      this.textHidden = true;
    } else {
      this.textHidden = false;
    }

  }

  @Listen('resize', { target: 'window'})
  windowWidth() {
    this.widthCheck();
    //console.log(this.el.clientWidth);
  } // * the listener for window resize widthCheck()

  render() {
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
  }





}

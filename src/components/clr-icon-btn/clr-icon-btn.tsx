import { Component, Host, h, Prop } from '@stencil/core';



@Component({
  tag: 'clr-icon-btn',
  styleUrl: 'clr-icon-btn.scss',
  shadow: true,
})
export class ClrIconBtn {
  @Prop() text: string = "default text if no text in component";
  @Prop() ariaLabel: string = "a button";
  @Prop() href: string = "";
  @Prop() url: string = "";
  @Prop() target: string = "";

  componentDidLoad() {
    let longestWordLength = () => this.text.split(" ").sort(
      function(a, b) {
        return b.length - a.length;
      }
    );

    console.log(longestWordLength()[0].length);

  }

  render() {
    if (this.href !== "") {       //* button with href 

      return (
        <Host>
          <a href={this.href} target={this.target} aria-label={this.ariaLabel}>
            <slot name="icon"/>
            {this.text}
          </a>
        </Host>
      );

    } else if (this.url !== "") { //* button with url

      return (
        <Host>
          <stencil-route-link url={this.url} >
            <div aria-label={this.ariaLabel}>
                <slot name="icon"/>
                {this.text}
            </div>
          </stencil-route-link>
        </Host>
      );
     
    } else {

      return (
        <Host>
          <button aria-label={this.ariaLabel}>
            <slot name="icon"/>
            {this.text}
          </button>
        </Host>
      );

    }
  }
}

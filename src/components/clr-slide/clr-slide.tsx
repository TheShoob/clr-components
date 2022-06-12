import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'clr-slide',
  styleUrl: 'clr-slide.scss',
  shadow: true,
})
export class ClrSlide {
  @Prop() bgURL: string = "background URL";
  @Prop() title: string = "Main Title";
  @Prop() content: string = "Main Content";
  @Prop() imgURL: string = "Image URL";

  render() {
    return (
      <Host>
        <slot>
          <div class="slide" style={{'background-image': 'url(' + this.bgURL + ')' }}>
            <h2>{this.title}</h2>
            <p>{this.content}</p>
            <img src={'"' + this.imgURL + '"'}></img>
          </div>
        </slot>
      </Host>
    );
  }

}

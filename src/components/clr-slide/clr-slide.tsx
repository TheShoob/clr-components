import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'clr-slide',
  styleUrl: 'clr-slide.scss',
  shadow: true,
})
export class ClrSlide {
  @Prop() bgURL:string = '/test_assets/bg-slide-1.png';
  @Prop() mainTitle:string = 'Main Title';
  @Prop() mainContent:string = 'Main Content';
  @Prop() imgURL:string = '';

  render() {
    return (
      <Host>
        <slot>
          <div class="slide" style={{'background-image': 'url(' + this.bgURL + ')' }}>
            <h2>{this.mainTitle}</h2>
            <p>{this.mainContent}</p>
            <img src={ this.imgURL }></img>
          </div>
        </slot>
      </Host>
    );
  }

}

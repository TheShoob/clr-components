import { Component, Host, h, Prop, Element, State, Method } from '@stencil/core';
import Hammer from 'hammerjs';
import anime from 'animejs';

let carousel = document.querySelectorAll('clr-carousel')[0];
let gcw = () => { return carousel.offsetWidth;} // * get carousel width 
let wrap = () => { return carousel.shadowRoot.childNodes[1].childNodes[0] as HTMLElement;}
let slidePosition = () => {
  var style = window.getComputedStyle(wrap());
  var matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m41;
}
let slideCalc = () => {
  return slideLength() * gcw() - gcw();
}
let negSlideCalc = () => { return Number("-" + slideCalc()) };


let slideLength = () => { return carousel.children.length }

let mc  = new Hammer(carousel, { // * main drag event
  inputClass: Hammer.TouchInput
});

@Component({
  tag: 'clr-carousel',
  styleUrl: 'clr-carousel.scss',
  shadow: true,
})
export class ClrCarousel {

  @State() childrenData: any = {};

  @Element() host: HTMLElement;

  componentWillLoad() { 
    let slotted = this.host.children;
    this.childrenData = { hasChildren: slotted && slotted.length > 0, numberOfChildren: slotted && slotted.length }
  }

  componentDidLoad() {
    this.dragSet();
    
  }

  dragSet() { // * setting the hammer listener
    mc.add(new Hammer.Pan({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 1,
    }));
  }

  drag() { // * dragging the slideWrap
    mc.on('panright pan panleft', function(ev) {

      //wrap().style.transform = "translateX(" + ev.deltaX + "px)";
      
      console.log(negSlideCalc());
      if (ev.isFinal && slidePosition() < 0 && ev.type == 'panright') {
        carousel.slidePrev();

      } else if ((ev.isFinal && slidePosition() > (negSlideCalc()) && ev.type == 'panleft')) {
        carousel.slideNext();

      }      
    });
  }

  @Method()
  slidePrev() { // * open drawer
    anime({
        targets:  wrap(),
        translateX: (slidePosition() + gcw()),
        easing: 'easeInQuad',
        duration: 400,
    });
  }

  @Method()
  slideNext() {// * close drawer
    anime({
        targets:  wrap(),
        translateX: (slidePosition() - gcw()),
        easing: 'easeOutQuad',
        duration: 400,
    });
  }

  @Prop() size: string = "small";

  render() {
    return (
      <Host>
        <div class={this.size + ' carousel'}>
          <main id='wrap' class="slide-wrap" onTouchMove={this.drag}>
            <slot name="slide"/>
          </main>
          <div class="controls">
            <div class="arrow left"></div>
            <div class="arrow right"></div>
            <div class="dots"></div>
          </div>
        </div>
      </Host>
    );
  }

}

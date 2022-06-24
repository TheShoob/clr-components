import { Component, Host, h, Prop, Element, State, Method } from '@stencil/core';
import Hammer from 'hammerjs';
import anime from 'animejs';

let carousel = document.querySelectorAll('clr-carousel')[0]; //* the carousel
let gcw = () => { return carousel.offsetWidth;} // * get carousel width 
let negGcw = () => { return Number("-" + gcw()) } //* negitive carousel width
let wrap = () => { return carousel.shadowRoot.childNodes[1].childNodes[0] as HTMLElement;} //* the carousel wrap
let slideLength = () => { return carousel.children.length } //* the number of slides
let slideCalc = () => { //* get the width of each slide
  return slideLength() * gcw() - gcw()
}
let negSlideCalc = () => { return Number("-" + slideCalc())} //* negitive slide width
let slidePosition = () => { //* get the position of current slide
  var style = window.getComputedStyle(wrap());
  var matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m41;
}
let slideTime = 400; //* the time it takes to slide
let dot = [];//* the dots
for (var i = 0; i < slideLength(); i++) { //* create the dots and add "on" class
  let slideNum = () => { return String(i + 1) }
  let dotID = (e) => {
    e.target.id;
    anime({
      targets:  wrap(),
      translateX: ("-" + (e.target.id - 1) * gcw()),
      easing: 'easeInQuad',
      duration: slideTime,
    });
    carousel.dotCheck();
  }
  if (Number(slideNum())  == (1)) {
    dot.push(<div id={slideNum()} class="dot on" key={i} onMouseDown={dotID}></div>)
  } else{
    dot.push(<div id={slideNum()} class="dot" key={i} onMouseDown={dotID}></div>)
  }
}

let mc  = new Hammer(carousel, { // * main-element drag event
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
    console.log(this.childrenData.numberOfChildren);
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
      if (ev.isFinal && slidePosition() < 0 && ev.type == 'panright') {
        carousel.slidePrev();

      } else if ((ev.isFinal && slidePosition() > (negSlideCalc()) && ev.type == 'panleft')) {
        carousel.slideNext();
      }      
    });
  }

  prev() { //* previous slide logic
    if (slidePosition() < 0 ) {
      carousel.slidePrev() 
    };
  }
  next() { //* next slide logic
    if (slidePosition() > (negSlideCalc())) {
      carousel.slideNext() 
    };
  }
  @Method() async slidePrev() { // * previous slide action
    anime({
        targets:  wrap(),
        translateX: (slidePosition() + gcw()),
        easing: 'easeInQuad',
        duration: slideTime,
    });
    carousel.dotCheck();
  }
  @Method() async slideNext() {// * next slide action
    anime({
        targets:  wrap(),
        translateX: (slidePosition() - gcw()),
        easing: 'easeOutQuad',
        duration: slideTime,
    });
    carousel.dotCheck();
  }
  @Method() async dotCheck() { // * checking the dot position
    setTimeout(() => {
      for (var i = 0; i < slideLength(); i++) {
          let dot = carousel.shadowRoot.querySelectorAll(".dots")[0].children;
          if (Number(dot[i].attributes.getNamedItem("id").value) == (slidePosition() - gcw()) / negGcw()) {
            dot[i].classList.add('on');
          } else {
            dot[i].classList.remove('on');
          }
      }
    }, slideTime + 20);
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
            <div class="arrowWrap">
              <div class="arrow left" onMouseDown={this.prev}></div>
            </div>
            <div class="dots">{dot}</div>
            <div class="arrowWrap">
              <div class="arrow right" onMouseDown={this.next}></div>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}

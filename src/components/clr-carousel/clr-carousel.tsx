import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import Hammer from 'hammerjs';
import anime from 'animejs';

let dot = [];//* the dots
let slideTime = 400; //* the time it takes to slide

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
    this.dotCount();
  }
  componentDidLoad() {
    this.drag();
  }

  /*mc = () => {
    let mc  = new Hammer(this, { // * main-element drag event
      inputClass: Hammer.TouchInput
    });
    return mc;
  }*/

  dotCount = () => {
    dot = [];//* the dots
    let slideLength = () => { return this.childrenData.numberOfChildren } //* the number of slides
    for (var i = 0; i < slideLength(); i++) { //* create the dots and add "on" class
      let slideNum = () => { return String(i + 1) }
      let dotID = (e) => {
        let carousel = this.host.shadowRoot.querySelectorAll('main')[0] //* the carousel slide wrap
        let gcw = () => { return carousel.offsetWidth;} // * get carousel width   
        e.target.id;
        anime({
          targets:  carousel,
          translateX: ("-" + (e.target.id - 1) * gcw()),
          easing: 'easeInQuad',
          duration: slideTime,
        });
        this.dotCheck();
      }
      if (Number(slideNum())  == (1)) {
        dot.push(<div id={slideNum()} class="dot on" key={i} onMouseDown={dotID}></div>)
      } else{
        dot.push(<div id={slideNum()} class="dot" key={i} onMouseDown={dotID}></div>)
      }
    }
  }

  slideNext = () => {// * next slide action
    let carousel = this.host.shadowRoot.querySelectorAll('main')[0] //* the carousel slide wrap
    let slidePosition = () => { //* get the position of current slide
      var style = window.getComputedStyle(carousel);
      var matrix = new WebKitCSSMatrix(style.transform);
      return matrix.m41;
    }
    let gcw = () => { return carousel.offsetWidth;} // * get carousel width 
    let slideLength = () => { return this.host.children.length } //* the number of slides
    let slideCalc = () => { //* get the width of each slide
      return slideLength() * gcw() - gcw()
    }
    let negSlideCalc = () => { return Number("-" + slideCalc())} //* negitive slide width

    if (slidePosition() > (negSlideCalc())) {
      anime({
        targets:  carousel,
        translateX: (slidePosition() - gcw()),
        easing: 'easeOutQuad',
        duration: slideTime,
    });
    } else if (slidePosition() <= (negSlideCalc())) {
      anime({
        targets:  carousel,
        translateX: '0px',
        easing: 'easeOutQuad',
        duration: slideTime,
    });
    }
    this.dotCheck();
  }

  slidePrev = () => { // * previous slide action
    let carousel = this.host.shadowRoot.querySelectorAll('main')[0] //* the carousel slide wrap
    let slidePosition = () => { //* get the position of current slide
      var style = window.getComputedStyle(carousel);
      var matrix = new WebKitCSSMatrix(style.transform);
      return matrix.m41;
    }
    let gcw = () => { return carousel.offsetWidth;} // * get carousel width 
    if (slidePosition() < 0 ) {
      anime({
        targets:  carousel,
        translateX: (slidePosition() + gcw()),
        easing: 'easeInQuad',
        duration: slideTime,
    });
    };
    this.dotCheck();
  }

  dotCheck = () => { // * checking the dot position
    // * negitive carousel width
    setTimeout(() => {
      let slideLength = () => { return this.childrenData.numberOfChildren } //* the number of slides
      for (var i = 0; i < slideLength(); i++) {
        let carousel = this.host.shadowRoot.querySelectorAll('main')[0] //* the carousel slide wrap
        let gcw = () => { return carousel.offsetWidth;} // * get carousel width   
        let negGcw = () => { return Number("-" + gcw()) } 
        let slidePosition = () => { //* get the position of current slide
          var style = window.getComputedStyle(carousel);
          var matrix = new WebKitCSSMatrix(style.transform);
          return matrix.m41;
        }
        if (this.childrenData.numberOfChildren > 1) {
            let dots = this.host.shadowRoot.querySelectorAll(".dots")[0].children;
          if (Number(dots[i].attributes.getNamedItem("id").value) == (slidePosition() - gcw()) / negGcw()) {
            dots[i].classList.add('on');
          } else {
            dots[i].classList.remove('on');
          }
        }
      }
    }, slideTime + 20);
  }

  dragSet = () => { // * setting the hammer listener

  }
  drag = () => { // * dragging the slideWrap
    let carousel = this.host.shadowRoot.querySelectorAll('main')[0] //* the carousel slide wrap
    let gcw = () => { return carousel.offsetWidth;} // * get carousel width 
    let slideLength = () => { return this.host.children.length } //* the number of slides

    let slideCalc = () => { //* get the width of each slide
      return slideLength() * gcw() - gcw()
    }
    let negSlideCalc = () => { return Number("-" + slideCalc())} //* negitive slide width
    let slidePosition = () => { //* get the position of current slide
      var style = window.getComputedStyle(carousel);
      var matrix = new WebKitCSSMatrix(style.transform);
      return matrix.m41;
    }
    let mc  = new Hammer(carousel, { // * main-element drag event
      inputClass: Hammer.TouchInput
    });
    mc.add(new Hammer.Pan({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 1,
    }));
    mc.on('panright pan panleft', function(ev) {
      //wrap().style.transform = "translateX(" + ev.deltaX + "px)";
      if (ev.isFinal && slidePosition() < 0 && ev.type == 'panright') {
        if (slidePosition() < 0 ) {
          anime({
            targets:  carousel,
            translateX: (slidePosition() + gcw()),
            easing: 'easeInQuad',
            duration: slideTime,
        });
        };
      } else if ((ev.isFinal && slidePosition() > (negSlideCalc()) && ev.type == 'panleft')) {
        if (slidePosition() > (negSlideCalc())) {
          anime({
            targets:  carousel,
            translateX: (slidePosition() - gcw()),
            easing: 'easeOutQuad',
            duration: slideTime,
        });
        } else if (slidePosition() <= (negSlideCalc())) {
          anime({
            targets:  carousel,
            translateX: '0px',
            easing: 'easeOutQuad',
            duration: slideTime,
        });
        }
      }      
    });
    this.dotCheck();      
  }

  @Prop() size: string = "small";

  render() {
    if (this.childrenData.hasChildren == true && this.childrenData.numberOfChildren > 1) {
      return (
        <Host>
          <div class={this.size + ' carousel'}>
            <main id='wrap' class="slide-wrap" onTouchMove={this.drag}>
              <slot name="slide"/>
            </main>
            <div class="controls">
              <div class="arrowWrap">
                <div class="arrow left" onMouseDown={this.slidePrev}></div>
              </div>
              <div class="dots">{dot}</div>
              <div class="arrowWrap">
                <div class="arrow right" onMouseDown={this.slideNext}></div>
              </div>
            </div>
          </div>
        </Host>
      );
    } else {
      return (
        <Host>
          <div class={this.size + ' carousel'}>
            <main id='wrap' class="slide-wrap" onTouchMove={this.drag}>
              <slot name="slide"/>
            </main>
          </div>
        </Host>
      );
    }
  }
}

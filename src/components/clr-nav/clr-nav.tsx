import { Component, Host, h, State, Listen, Method, Element } from '@stencil/core';
import Hammer from 'hammerjs';
import anime from 'animejs';

let drawer = document.getElementsByTagName('clr-nav')[0];
let mc = new Hammer(drawer, { // * main drag event
  inputClass: Hammer.TouchInput
});
let mc2 = new Hammer(window);// * for window swipe
let tabWidth = 600; // * for tablet layout
const oldWidth = window.innerWidth; // * get nav width
let gdw = function() { // * get drawer width
   return drawer.offsetWidth;
}
let gww = function() { // * get window width
  return window.innerWidth;
}
let heightNav100 = function() { // * set nav height
  drawer.getElementsByTagName('nav')[0].style.height = '100%';
}

@Component({
  tag: 'clr-nav',
  styleUrl: 'clr-nav.scss',
  shadow: true,
})
export class ClrNav {

  @Element() el: HTMLElement;

  dragSet() { // * setting the hammer listener
    mc.add(new Hammer.Pan({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 1,
    }));
    mc2.add(new Hammer.Pan({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 1,
    }));
  }

  componentDidLoad() { // * runs the above function on the element and sets the position
    this.dragSet();
    this.windowSwipe();
    this.drawerCheck();
  }

  @State() open: boolean = false;
  getCSSClass = () => (this.open ? 'open' : 'closed');

  @Method()
  drawerCheck() { // * checks if the drawer should be nav bar or drawer
    if ((oldWidth <= tabWidth) || (gww() <= tabWidth)) {
      drawer.setAttribute("style", "height:100vh; touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); transform: translateX(-" + gdw() + "px);");
    } else if ((oldWidth > tabWidth) || (gww() > tabWidth)) {
      drawer.setAttribute("style", "height:auto; touch-action: auto; user-select: auto; -webkit-user-drag: auto; -webkit-tap-highlight-color: auto; transform: translateX(0px);");
      if (("ontouchstart" in document.documentElement == false)){
        heightNav100(); // * sets inner slotted nav height 100%
      }
    }

  }
  
  @Method()
  drawerOpen() { // * open drawer
    anime({
        targets: 'clr-nav',
        translateX: '0px',
        easing: 'easeInQuad',
        duration: 400,
    });
    this.open = true;
  }

  @Method()
  drawerClose() {// * close drawer
    anime({
        targets: 'clr-nav',
        translateX: '-' + gdw(),
        easing: 'easeOutQuad',
        duration: 400,
    });
    this.open = false;
  }

  @Method()
  drawerMove() { // * toggles based on state
    if ((drawer.shadowRoot.querySelectorAll('nav')[0].classList.contains("open")) && (gww() < tabWidth)) {
      this.drawerClose();
    } else if (drawer.shadowRoot.querySelectorAll('nav')[0].classList.contains("closed")) {
      this.drawerOpen();
    }
  }

  @Listen('click', { target: 'window' })
  handleClick(ev) { // * the listener for the nav btn
    let localName = ev.target.localName;
    if ((localName === 'clr-nav-btn') && (gww() < tabWidth)){
      this.drawerMove()
    }
  }

  @Listen('resize', { target: 'window'})
  windowWidth() { // * the listener for window resize
    this.drawerCheck();

    if (((gww() == oldWidth)) || (gww() >= tabWidth)) {
      this.drawerOpen();
      return;
    }
    else if (((gww() < oldWidth) || (gww() > oldWidth)) && (gww() < tabWidth)) {
        setTimeout(function () {
          gdw();
          drawer.drawerClose();
        }, 200);
    }

  }

  @Listen('touchend', { target: 'window'})
  windowSwipe() { // * the listener for swiping the window
      mc2.on('panright pan panleft', function(ev) {
        if (ev.isFinal && ev.type === 'panright') {
            drawer.drawerOpen();
        } 
      });
  }
  
  drag() { // * dragging the drawer
    mc.on('panright pan panleft', function(ev) {

      drawer.style.transform = "translateX(" + ev.deltaX + "px)";
      var navMatch = ("-" + gdw()/2); // * half nav width

      
      if (drawer.style.transform > "translateX(" + 0 + "px)") {
        drawer.style.transform = "translateX(" + 0 + "px)";
      } else if (drawer.style.transform <= "translateX(" + "-" + 1 + "px)") {
        drawer.style.transform = "translateX(" + ev.deltaX + "px)";
      }
  
      if ((ev.isFinal) && (ev.deltaX >= navMatch)) {
          drawer.drawerOpen();
      } else if ((ev.isFinal) && (ev.deltaX <= navMatch)) {
          drawer.drawerClose();
          //navBtn().click();
      }
  
      if (ev.isFinal && ev.type == 'panright') {
          drawer.drawerOpen();
      } else if ((ev.isFinal && ev.type == 'panleft')) {
          drawer.drawerClose();
          //navBtn().click();
      }      
      
    });
    
  }

  render() {
      if (gww() <= tabWidth) {
      return (
        <Host>
          <nav class={'drawer ' + this.getCSSClass()} onTouchMove={this.drag}>
            <slot name="links"></slot>
          </nav>
        </Host>
      );
    } else {
      return (
        <Host>
          <nav>
            <slot name="links"></slot>
          </nav>
        </Host>
      );
    }
  }
}

import { Component, Host, h, State, Listen, Method } from '@stencil/core';
import Hammer from 'hammerjs';
import anime from 'animejs';

let oldWidth = window.innerWidth;
let drawer = document.getElementsByTagName('clr-left-drawer')[0];
let mc = new Hammer(drawer, { // * main drag event
  inputClass: Hammer.TouchInput
});
let mc2 = new Hammer(window); // * for window swipe
let gnw = function() { // * get nav width
   return document.getElementsByTagName('clr-left-drawer')[0].shadowRoot.querySelectorAll('nav')[0].offsetWidth;
}
let navBtn = function() {
  return document.getElementsByTagName('clr-nav-btn')[0].shadowRoot.querySelectorAll('button')[0];
}
@Component({
  tag: 'clr-left-drawer',
  styleUrl: 'clr-left-drawer.scss',
  shadow: true,
})

export class ClrLeftDrawer  {

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
    drawer.setAttribute("style", "position: fixed; top: 0px; left: 0px; z-index: 98; touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); transform: translateX(-" + gnw() + "px);");
  }

  @State() open: boolean = false;
  getCSSClass = () => (this.open ? 'open' : 'closed');
  
  @Method()
  drawerOpen() { // * open drawer
    anime({
        targets: 'clr-left-drawer',
        translateX: '0px',
        easing: 'easeInQuad',
        duration: 400,
    });
    this.open = true;
    //navBtn().click();
  }

  @Method()
  drawerClose() {// * close drawer
    anime({
        targets: 'clr-left-drawer',
        translateX: '-' + gnw(),
        easing: 'easeOutQuad',
        duration: 400,
    });
    this.open = false;
    //navBtn().click();
  }

  @Method()
  drawerMove() { // * toggles based on state
    if (drawer.shadowRoot.querySelectorAll('nav')[0].classList.contains("open")) {
      this.drawerClose();
    } else if (drawer.shadowRoot.querySelectorAll('nav')[0].classList.contains("closed")) {
      this.drawerOpen();
    }
  }

  @Listen('click', { target: 'window' })
  handleClick(ev) { // * the listener for the nav btn
    let localName = ev.target.localName;
    if (localName === 'clr-nav-btn'){
      this.drawerMove()
    }
  }

  @Listen('resize', { target: 'window'})
  windowWidth() { // * the listener for window resize
    var width = window.innerWidth;
    if ((width == oldWidth) || (width == oldWidth)) {
      return;
    }
    else if ((width < oldWidth) || (width > oldWidth)) {
        setTimeout(function () {
          gnw();
          drawer.drawerClose();
        }, 200);
    }
    oldWidth = window.innerWidth;
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
      var navMatch = ("-" + gnw()/2); // * half nav width

      
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
    return (
      <Host>
          <nav class={'drawer ' + this.getCSSClass()} onTouchMove={this.drag}>
              <slot></slot>
          </nav>
      </Host>
    );
  }

}

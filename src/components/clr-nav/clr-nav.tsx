import { Component, Host, h, State, Listen, Method, Element, Event, EventEmitter  } from '@stencil/core';
import Hammer from 'hammerjs';
import anime from 'animejs';

let drawer = document.getElementsByTagName('clr-nav')[0];
let mc = new Hammer(drawer, { // * nav drag event
  inputClass: Hammer.TouchInput
});
//let mc2 = new Hammer(window);// * for window swipe
let navBreakPoint = 0;
const oldWidth = window.innerWidth; // * get nav width
let gdw = () => { return drawer.offsetWidth;} // * get drawer width 
let gww = () => { return window.innerWidth;} // * get window width
let heightNav100 = () => { drawer.getElementsByTagName('nav')[0].setAttribute("style", "height:100%; position: relative;")} // * set nav height
let heightNavAuto = () => { drawer.getElementsByTagName('nav')[0].setAttribute("style", "height:auto; position: absolute; top:8px;")} // * set nav height
let drawerSetMobile = () => { 
  drawer.classList.add('mobile');
  drawer.setAttribute("style", "height:100vh; touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); transform: translateX(-" + gdw() + "px);");
} // * set nav height mobile
let drawerSetDesktop = () => {
  drawer.classList.remove('mobile');
   drawer.setAttribute("style", "height:auto; touch-action: auto; user-select: auto; -webkit-user-drag: auto; -webkit-tap-highlight-color: auto; transform: translateX(0px);");
} // * set nav height desktop
@Component({
  tag: 'clr-nav',
  styleUrl: 'clr-nav.scss',
  shadow: true,
})
export class ClrNav {

  @State() open: boolean = false;
  @State() mobile: boolean = false;

  getCSSClass = () => (this.open ? 'open' : 'closed');
  

  @Event({bubbles:true, composed:true}) openCheck: EventEmitter<boolean>;
  openCompletedHandler(open) {
    this.openCheck.emit(open);
  }
  @Event({bubbles:true, composed:true}) mobileState: EventEmitter<boolean>;
  mobileStateHandler(mobile) {
    this.mobileState.emit(mobile);
  }

  @Element() el: HTMLElement;

  dragSet() { // * setting the hammer listener
    mc.add(new Hammer.Pan({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 1,
    }));
    /*mc2.add(new Hammer.Pan({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 1,
    }));*/
  }

  componentDidLoad() { // * runs the above function on the element and sets the position
    var children = drawer.getElementsByTagName('nav')[0].children;
    for (var i = 0; i < children.length; i++) {
        navBreakPoint += children[i].clientWidth;
    }
    this.dragSet();
    this.drawerCheck();
    this.open = false;
    drawer.shadowRoot.querySelectorAll('nav')[0].classList.add("closed");
  }

  @Method() async drawerCheck() { // * checks if the drawer should be nav bar or drawer
    if ((gww() <= navBreakPoint)) {
      drawerSetMobile();
      this.mobile = true;
      this.mobileStateHandler(this.mobile);
    } else if ((gww() > navBreakPoint)) {
      drawerSetDesktop();
      this.mobile = false;
      this.mobileStateHandler(this.mobile);
      if (("ontouchstart" in document.documentElement == false)){
        heightNav100(); // * sets inner slotted nav height 100%
      } else {
        heightNavAuto(); // * sets inner slotted nav height auto
      }
    }
  }
  
  @Method() async drawerOpen() { // * open drawer
    anime({
        targets: 'clr-nav',
        translateX: '0px',
        easing: 'easeInQuad',
        duration: 400,
    });
    this.open = true;
    this.openCompletedHandler(this.open);
  }

  @Method() async drawerClose() {// * close drawer
    anime({
        targets: 'clr-nav',
        translateX: '-' + gdw(),
        easing: 'easeOutQuad',
        duration: 400,
    });
    this.open = false;
    this.openCompletedHandler(this.open);
  }

  @Method() async drawerMove() { // * toggles based on state
    if ((drawer.shadowRoot.querySelectorAll('nav')[0].classList.contains("open")) && (gww() < navBreakPoint)) {
      this.drawerClose();
    } else if (drawer.shadowRoot.querySelectorAll('nav')[0].classList.contains("closed")) {
      this.drawerOpen();
    }
  }

  @Listen('click', { target: 'window' })
  handleClick(ev) { // * the listener for the nav btn
    let localName = ev.target.localName;
    if ((localName === 'clr-nav-btn') && (gww() < navBreakPoint)){
      this.drawerMove()
    }
  }

  @Listen('resize', { target: 'window'})
  windowWidth() {     // * the listener for window resize
    this.mobile = !this.mobile;
    this.drawerCheck();


    if (((gww() == oldWidth)) || (gww() >= navBreakPoint)) {
    }
    else if (((gww() < oldWidth) || (gww() > oldWidth)) && (gww() < navBreakPoint)) {
        setTimeout(function () {
          gdw();
        }, 0);
    }
  }

 /*@Listen('touchend', { target: 'window'})
  windowSwipe() { // * the listener for swiping the window
    mc2.on('panright pan panleft', function(ev) {
      if (ev.isFinal && ev.type === 'panright') {
          drawer.drawerOpen();
      } 
    });
  }*/
  
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
      }
      if (ev.isFinal && ev.type == 'panright') {
          drawer.drawerOpen();
      } else if ((ev.isFinal && ev.type == 'panleft')) {
          drawer.drawerClose();
      }      
    });
  }

  render() {
      if (gww() <= navBreakPoint) {
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
          <nav class="">
            <slot name="links"></slot>
          </nav>
        </Host>
      );
    }
  }
}

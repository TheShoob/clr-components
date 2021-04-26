import { Component, Host, h, State, Listen, Method, Event, EventEmitter } from '@stencil/core';
import Hammer from 'hammerjs';
import anime from 'animejs';


let width_split = Math.floor(window.innerWidth / 2);
let oldWidth = window.innerWidth;
let navBtn = document.getElementsByTagName('clr-nav-btn')[0];
let drawer = document.getElementsByTagName('clr-left-drawer')[0];
let mc = new Hammer(drawer);

let mc2 = new Hammer(window);

let gnw = function() {
   return document.getElementsByTagName('clr-left-drawer')[0].shadowRoot.querySelectorAll('nav')[0].offsetWidth;
}

@Component({
  tag: 'clr-left-drawer',
  styleUrl: 'clr-left-drawer.scss',
  shadow: true,
})
export class ClrLeftDrawer  {

  componentDidLoad() {
    this.drag()
    drawer.setAttribute("style", "position: fixed; top: 0px; left: 0px; z-index: 98; touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); transform: translateX(-" + gnw() + "px);");
  }

  @State() open: boolean = false;
  getCSSClass = () => (this.open ? 'open' : 'closed');

 
  //@Event() drawerState: EventEmitter<DrawerState>;
  
  @Method()
  drawerOpen() {
    anime({
        targets: 'clr-left-drawer',
        translateX: '0px',
        easing: 'easeInQuad',
        duration: 400,
    });
    this.open = true;
    //this.drawerState.emit(open);
  }
  @Method()
  drawerClose() {
    anime({
        targets: 'clr-left-drawer',
        translateX: '-' + gnw(),
        easing: 'easeOutQuad',
        duration: 400,
    });
    this.open = false;

  }
  @Method()
  drawerMove() {
    if (drawer.shadowRoot.querySelectorAll('nav')[0].classList.contains("open")) {
      this.drawerClose();
    } else if (drawer.shadowRoot.querySelectorAll('nav')[0].classList.contains("closed")) {
      this.drawerOpen();
    }
  }
  @Listen('click', { target: 'window' })
  handleClick(ev) {
    let localName = ev.target.localName;
    if (localName === 'clr-nav-btn'){
      this.drawerMove()
    }
  }
  @Listen('resize', { target: 'window'})
  windowWidth() {
    var width = window.innerWidth;
    if ((width == oldWidth) || (width == oldWidth)) {
      return;
    }
    else if ((width < oldWidth) || (width > oldWidth)) {
      this.open = false;
        setTimeout(function () {
          gnw();
          drawer.drawerClose();
        }, 200);
    }
    oldWidth = window.innerWidth;
  }
  
  /*@Listen('touchstart', { target: 'window'})
  windowSwipe() {
    mc2.add(new Hammer.Pan({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 1,
    }));
    if (  this.open == false ) {

      mc2.on('panright pan panleft', function(ev) {

          if (ev.isFinal && ev.type == 'panright') {
            this.open = true;
            drawer.drawerCheck();
            drawer.drawerOpen();

        } 
        return;

      });
    }
  }*/
  drag() {
    mc.add(new Hammer.Pan({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 1,
    }));
    mc.on('panright pan panleft', function(ev) {
      console.log('the drage event activated');

      drawer.style.transform = "translateX(" + ev.deltaX + "px)";
      var navMatch = ("-" + width_split);
      
      if (drawer.style.transform > "translateX(" + 0 + "px)") {
        drawer.style.transform = "translateX(" + 0 + "px)";

      } else if (drawer.style.transform <= "translateX(" + "-" + 1 + "px)") {
        drawer.style.transform = "translateX(" + ev.deltaX + "px)";
      }
  
      if (ev.isFinal && ev.deltaX >= navMatch) {
          drawer.drawerOpen();

      } else if (ev.isFinal && ev.deltaX <= navMatch) {
          drawer.drawerClose();
      }
  
      if (ev.isFinal && ev.type == 'panright') {
          drawer.drawerOpen();

      } else if (ev.isFinal && ev.type == 'panleft') {
          drawer.drawerClose();
      }
      return;
      
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

import { Component, Host, h, State, Listen, Method } from '@stencil/core';
import Hammer from 'hammerjs';
import anime from 'animejs';


let width_split = Math.floor(window.innerWidth / 2);
let oldWidth = window.innerWidth;
let drawer = document.getElementsByTagName('clr-left-drawer')[0];
var mc = new Hammer(drawer, {
  inputClass: Hammer.TouchInput
});
let mc2 = new Hammer(window);
let gnw = function() {
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
  dragSet() {
    mc.add(new Hammer.Pan({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 1,
    }));
    mc2.add(new Hammer.Pan({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 1,
    }));
  }

  componentDidLoad() {
    console.log(this.open);

    this.dragSet()
    drawer.setAttribute("style", "position: fixed; top: 0px; left: 0px; z-index: 98; touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); transform: translateX(-" + gnw() + "px);");
  }

  @State() open: boolean = false;
  getCSSClass = () => (this.open ? 'open' : 'closed');
  
  @Method()
  drawerOpen() {
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
  drawerClose() {
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
        setTimeout(function () {
          gnw();
          drawer.drawerClose();
        }, 200);
    }
    oldWidth = window.innerWidth;
  }

  @Listen('touchstart', { target: 'window'})
  windowSwipe() {
    console.log(this.open);
    if (this.open == false) {
      mc2.on('panright pan panleft', function(ev) {
          if (ev.isFinal && ev.type === 'panright') {
            drawer.drawerMove();
        } 
      });
    }
  }

  drag() {
    mc.on('panright pan panleft', function(ev) {

      drawer.style.transform = "translateX(" + ev.deltaX + "px)";
      var navMatch = ("-" + width_split);
      
      if (drawer.style.transform > "translateX(" + 0 + "px)") {
        drawer.style.transform = "translateX(" + 0 + "px)";

      } else if (drawer.style.transform <= "translateX(" + "-" + 1 + "px)") {
        drawer.style.transform = "translateX(" + ev.deltaX + "px)";
      }
  
      if (ev.isFinal && ev.deltaX >= navMatch) {
          drawer.drawerMove();

      } else if ((ev.isFinal && ev.deltaX <= navMatch) && (navBtn().classList.contains("on"))) {
          drawer.drawerMove();
          navBtn().click();
      }
  
      if (ev.isFinal && ev.type == 'panright') {
          drawer.drawerMove();

      } else if ((ev.isFinal && ev.type == 'panleft') && (navBtn().classList.contains("on"))) {
          drawer.drawerMove();
          navBtn().click();
      }

      //return;
      
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

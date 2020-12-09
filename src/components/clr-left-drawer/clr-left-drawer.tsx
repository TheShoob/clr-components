import { Component, Host, h, State, Listen, Method, Element } from '@stencil/core';
import Hammer from 'hammerjs';
import anime from 'animejs';

let width_split = Math.floor(window.innerWidth / 2);
let drawer = document.getElementsByTagName('clr-left-drawer')[0];
let mc = new Hammer(drawer);
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
    console.log(gnw()); 
    document.getElementsByTagName('clr-left-drawer')[0].setAttribute("style", "position: fixed; top: 0px; left: 0px; z-index: 98; touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); transform: translateX(-" + gnw() + "px);");
  }
  @State() open: boolean;
  @Method()
  drawerOpen() {
    anime({
        targets: 'clr-left-drawer',
        translateX: '0px',
        easing: 'easeInQuad',
        duration: 400,
    });
  }
  @Method()
  drawerClose() {
    anime({
        targets: 'clr-left-drawer',
        translateX: '-' + gnw(),
        easing: 'easeOutQuad',
        duration: 400,
    });
  }
  @Method()
  drawerCheck() {
    if (this.open ? true : '') {
      this.open = false;
    } else {
      this.open = true;
    }
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
    let localName = ev.currentTarget.document.activeElement.localName;
    if (localName === 'clr-nav-btn'){
      this.drawerCheck();
      this.drawerMove()
      this.drag();
    }
  }

  drag() {
    mc.add(new Hammer.Pan({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 1,
    }));
    mc.on('panright pan panleft', function(ev) {

      drawer.style.transform = "translateX(" + ev.deltaX + "px)";
      var navMatch = ("-" + width_split);
      if (drawer.style.transform > "translateX(" + 0 + "px)") {
        drawer.style.transform = "translateX(" + 0 + "px)";
      } else if (drawer.style.transform <= "translateX(" + "-" + 1 + "px)") {
        drawer.style.transform = "translateX(" + ev.deltaX + "px)";
      }
  
      if (ev.isFinal && ev.deltaX >= navMatch) {
          var isDragging = false;
          this.open = true;
          drawer.drawerCheck();
          drawer.drawerOpen();

      } else if (ev.isFinal && ev.deltaX <= navMatch) {
          var isDragging = false;
          this.open = false;
          drawer.drawerCheck();
          drawer.drawerClose();

      }
  
      if (ev.isFinal && ev.type == 'panright') {
          var isDragging = false;
          this.open = true;
          drawer.drawerCheck();
          drawer.drawerOpen();

      } else if (ev.isFinal && ev.type == 'panleft') {
          var isDragging = false;
          this.open = false;
          drawer.drawerCheck();
          drawer.drawerClose();
      }
      return;
    });

  }
  getCSSClass = () => (this.open ? 'open' : 'closed');

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

import { Component, Host, h, State, Listen } from '@stencil/core';
import Hammer from 'hammerjs';

@Component({
  tag: 'clr-left-drawer',
  styleUrl: 'clr-left-drawer.scss',
  shadow: true,
})
export class ClrLeftDrawer  {
  
  @State() open: boolean;
  @Listen('click', { target: 'window' })
  handleClick(ev) {
    let localName = ev.currentTarget.document.activeElement.localName;
    if (localName === 'clr-nav-btn'){
      
      
      console.log('FUCK!!!!! it worked!!')
    }
  }

  openDrawer() {
    console.log('the button was clicked')
  }

  constructor() {
    document.getElementsByTagName('clr-left-drawer')[0].setAttribute("style", "position: fixed; top: 0px; left: 0px; z-index: 98; touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); transform: translateX(0px);");
  }

  drag() {
    let width_split = Math.floor(window.innerWidth / 2);
    let drawer = document.getElementsByTagName('clr-left-drawer')[0];
    let mc = new Hammer(drawer);

    mc.add(new Hammer.Pan({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 10,
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
          //var isDragging = false;
          //navOpen();
      } else if (ev.isFinal && ev.deltaX <= navMatch) {
          //var isDragging = false;
          //navClose();
      }
  
      if (ev.isFinal && ev.type == 'panright') {
          //var isDragging = false;
          //navOpen();
      } else if (ev.isFinal && ev.type == 'panleft') {
          //var isDragging = false;
          //navClose();
      }
      return;
    });
  }

  render() {
    return (
      <Host>
          <nav onTouchMove={this.drag} class="drawer">
              <slot></slot>
          </nav>
      </Host>
    );
  }

}

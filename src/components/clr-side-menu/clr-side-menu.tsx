import { Component, Host, h, Element, State, Prop, Listen } from '@stencil/core';
import anime from 'animejs';

const array = [];

const large = '56';
const medium = '31';
const small = '22';
const tiny = '18';

@Component({
  tag: 'clr-side-menu',
  styleUrl: 'clr-side-menu.scss',
  shadow: true,
})
export class ClrSideMenu {
  @Prop() side: string = 'left';
  @Prop() duration: number = 100;
  @Prop() expanded: boolean = false;
  @Prop() hidden: boolean = false;
  @Prop() hideMove: boolean = true || false;
  @Prop () size: string = 'large' || 'medium' || 'small' || 'tiny';
  @Prop () phase: string = 'one' || 'two' || 'three';
  @Prop({ mutable: true }) linkWidthValue: any = 0;
  @State() childrenData: any = {};
  @Element() host: HTMLElement;
  
  componentWillLoad() { 
    let slotted = this.host.children;
    this.childrenData = { hasChildren: slotted && slotted.length > 0, numberOfChildren: slotted && slotted.length }
  }

  componentDidLoad() {
    let getNav = this.host.shadowRoot.querySelector('nav')  //* the number of slides
    let navHeight = getNav.offsetHeight;
    getNav.style.marginTop = '-' + String(navHeight / 2) + 'px';
    array.sort( function(a, b) { return b - a; });
    console.log(array[0]);
    this.toggleExpand();
  }

  @Listen('linkWidth')
  linkWidth(event:CustomEvent<any>) {
    let linkWidthValue = () => event.detail;
    array.push(linkWidthValue())
  }

  hiddenToggle = () => {
    if (this.side == 'left') {
    anime({
      targets: this.host.shadowRoot.querySelector('nav'),
      marginLeft: this.hideMove ? '-' + String(Number(large) + 20) + 'px' : '-' + 0 + 'px',
      duration: this.duration,
      easing: 'easeInOutQuad',
    });
    } else if (this.side == 'right') {
      anime({
        targets: this.host.shadowRoot.querySelector('nav'),
        marginRight: this.hideMove ? '-' + String(Number(large) + 20) + 'px' : '-' + 0 + 'px',
        duration: this.duration,
        easing: 'easeInOutQuad',
      });
    }
    this.hideMove = !this.hideMove;
  }

  toggleLarge = () => {
    anime({
      targets: this.host.shadowRoot.querySelector('nav'),
      width: this.expanded ? (array[0] + 1) + 'px' : large + 'px',
      duration: this.duration,
      easing: 'easeInOutQuad',
    });
  }
  toggleMedium = () => {
    anime({
      targets: this.host.shadowRoot.querySelector('nav'),
      width: this.expanded ? (array[0] + 1) + 'px' : medium + 'px',
      duration: this.duration,
      easing: 'easeInOutQuad',
    });
  }
  toggleSmall = () => {
    anime({
      targets: this.host.shadowRoot.querySelector('nav'),
      width: this.expanded ? (array[0] + 1) + 'px' : small + 'px',
      duration: this.duration,
      easing: 'easeInOutQuad',
    });
  }
  toggleTiny = () => {
    anime({
      targets: this.host.shadowRoot.querySelector('nav'),
      width: this.expanded ? (array[0] + 1) + 'px' : tiny + 'px',
      duration: this.duration,
      easing: 'easeInOutQuad',
    });
  }

  @State() isTranslated: boolean = true;
  svgBtnToggleFull = () => {
    const iconRect = this.host.shadowRoot.querySelectorAll('button svg rect')
    const longRect = this.host.shadowRoot.querySelectorAll('button svg rect.cls-2')
    anime({
      targets: longRect,
      width: this.isTranslated ? '0px' : '23px',
      easing: 'easeInOutSine',
      duration: this.duration
    });
    anime({
      targets: iconRect,
      translateX: this.isTranslated ? '-15px' : '0px',
      easing: 'easeInOutSine',
      duration: this.duration,
      complete: () => {
        this.isTranslated = !this.isTranslated;
      }
    });
  }
  svgBtnToggleIcon = () => {
    const longRect = this.host.shadowRoot.querySelectorAll('button svg rect.cls-2')
    anime({
      targets: longRect,
      width: this.isTranslated ? '0px' : '23px',
      easing: 'easeInOutSine',
      duration: this.duration,
      complete: () => {
        this.isTranslated = !this.isTranslated;
      }
    });
  }



  toggleExpand = () => {

    /*const iconRect = this.host.shadowRoot.querySelectorAll('button svg rect')
    const iconRectOne = this.host.shadowRoot.querySelectorAll('button svg rect.cls-1')
    const longRect = this.host.shadowRoot.querySelectorAll('button svg rect.cls-2')*/
    /*const timeline = anime.timeline({
      loop: true
    });*/

    if ((this.size == 'large') && (this.hidden == true)) {
      this.hiddenToggle();
      this.toggleLarge();
      this.svgBtnToggleFull();
    } else if ((this.size == 'medium') && (this.hidden == true)) {
      this.hiddenToggle();
      this.toggleMedium();
      this.svgBtnToggleFull();

    } else if ((this.size == 'small') && (this.hidden == true)) {
      this.hiddenToggle();
      this.toggleSmall();
      this.svgBtnToggleFull();

    } else if ((this.size == 'tiny') && (this.hidden == true)) {
      this.hiddenToggle();
      this.toggleTiny();
      this.svgBtnToggleFull();
    }
    if ((this.size == 'large') && (this.hidden == false)) {
      this.toggleLarge();
      this.svgBtnToggleIcon();
    } else if ((this.size == 'medium') && (this.hidden == false)) {
      this.toggleMedium();
      this.svgBtnToggleIcon();
    } else if ((this.size == 'small') && (this.hidden == false)) {
      this.toggleSmall();
      this.svgBtnToggleIcon();
    } else if ((this.size == 'tiny') && (this.hidden == false)) {
      this.toggleTiny();
      this.svgBtnToggleIcon();
    }



    /*timeline.add({
      targets: iconRect,
      translateX: '-50px',
      easing: 'easeInOutSine',
      duration: 1000
    });
  
    timeline.add({
      targets: iconRectOne,
      translateX: '0px',
      easing: 'easeInOutSine',
      duration: 1000
    });
  
    timeline.add({
      targets: longRect,
      translateX: '0px',
      easing: 'easeInOutSine',
      duration: 1000
    });*/


    this.expanded = !this.expanded;

  }

  render() {
    if (this.side == 'left') {
      return (
        <Host>
          <nav class='left'>
            <div>
              <slot name="link"/>
            </div>
            <button onMouseDown={this.toggleExpand}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path class="cls" d="M43.66,2c2.4,0,4.34,1.95,4.34,4.34v37.31c0,2.4-1.95,4.34-4.34,4.34H6.34c-2.4,0-4.34-1.95-4.34-4.34V6.34c0-2.4,1.95-4.34,4.34-4.34h37.31M43.66,0H6.34C2.84,0,0,2.84,0,6.34v37.31c0,3.5,2.84,6.34,6.34,6.34h37.31c3.5,0,6.34-2.84,6.34-6.34V6.34c0-3.5-2.84-6.34-6.34-6.34h0Z"/>
                <rect class="cls-1" x="7.85" y="6.67" width="8" height="8"/>
                <rect class="cls-1" x="7.85" y="21" width="8" height="8"/>
                <rect class="cls-1" x="7.85" y="35.33" width="8" height="8"/>
                
                <rect class="cls-2" x="18.62" y="8.67" width="23.53" height="4"/>
                <rect class="cls-2" x="18.62" y="23" width="23.53" height="4"/>
                <rect class="cls-2" x="18.62" y="37.33" width="23.53" height="4"/>
              </svg>
            </button>
          </nav>
        </Host>
      );
    } else if (this.side == 'right') {
      return (
        <Host>
          <nav class='right'>
            <div>
              <slot name="link"/>
            </div>
            <button onMouseDown={this.toggleExpand}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path class="cls" d="M43.66,2c2.4,0,4.34,1.95,4.34,4.34v37.31c0,2.4-1.95,4.34-4.34,4.34H6.34c-2.4,0-4.34-1.95-4.34-4.34V6.34c0-2.4,1.95-4.34,4.34-4.34h37.31M43.66,0H6.34C2.84,0,0,2.84,0,6.34v37.31c0,3.5,2.84,6.34,6.34,6.34h37.31c3.5,0,6.34-2.84,6.34-6.34V6.34c0-3.5-2.84-6.34-6.34-6.34h0Z"/>
                <rect class="cls-1" x="7.85" y="6.67" width="8" height="8"/>
                <rect class="cls-1" x="7.85" y="21" width="8" height="8"/>
                <rect class="cls-1" x="7.85" y="35.33" width="8" height="8"/>
                
                <rect class="cls-2" x="18.62" y="8.67" width="23.53" height="4"/>
                <rect class="cls-2" x="18.62" y="23" width="23.53" height="4"/>
                <rect class="cls-2" x="18.62" y="37.33" width="23.53" height="4"/>
              </svg>
            </button>
          </nav>
        </Host>
      );
    }
  }

}

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
  @Prop() expanded: boolean = false;
  @Prop() hidden: boolean = false;
  @Prop() hideMove: boolean = true || false;
  @Prop () size: string = 'large' || 'medium' || 'small' || 'tiny';
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
      duration: 300,
      easing: 'easeInOutQuad',
    });
    } else if (this.side == 'right') {
      anime({
        targets: this.host.shadowRoot.querySelector('nav'),
        marginRight: this.hideMove ? '-' + String(Number(large) + 20) + 'px' : '-' + 0 + 'px',
        duration: 300,
        easing: 'easeInOutQuad',
      });
    }
    this.hideMove = !this.hideMove;
  }
  toggleLarge = () => {
    anime({
      targets: this.host.shadowRoot.querySelector('nav'),
      width: this.expanded ? (array[0] + 1) + 'px' : large + 'px',
      duration: 300,
      easing: 'easeInOutQuad',
    });
  }
  toggleMedium = () => {
    anime({
      targets: this.host.shadowRoot.querySelector('nav'),
      width: this.expanded ? (array[0] + 1) + 'px' : medium + 'px',
      duration: 300,
      easing: 'easeInOutQuad',
    });
  }
  toggleSmall = () => {
    anime({
      targets: this.host.shadowRoot.querySelector('nav'),
      width: this.expanded ? (array[0] + 1) + 'px' : small + 'px',
      duration: 300,
      easing: 'easeInOutQuad',
    });
  }
  toggleTiny = () => {
    anime({
      targets: this.host.shadowRoot.querySelector('nav'),
      width: this.expanded ? (array[0] + 1) + 'px' : tiny + 'px',
      duration: 300,
      easing: 'easeInOutQuad',
    });
  }


  toggleExpand = () => {

    if ((this.size == 'large') && (this.hidden == true)) {
      this.hiddenToggle();
      this.toggleLarge();

    } else if ((this.size == 'medium') && (this.hidden == true)) {
      this.hiddenToggle();
      this.toggleMedium();

    } else if ((this.size == 'small') && (this.hidden == true)) {
      this.hiddenToggle();
      this.toggleSmall();

    } else if ((this.size == 'tiny') && (this.hidden == true)) {
      this.hiddenToggle();
      this.toggleTiny();
    }
    if ((this.size == 'large') && (this.hidden == false)) {
      this.toggleLarge();

    } else if ((this.size == 'medium') && (this.hidden == false)) {
      this.toggleMedium();

    } else if ((this.size == 'small') && (this.hidden == false)) {
      this.toggleSmall();

    } else if ((this.size == 'tiny') && (this.hidden == false)) {
      this.toggleTiny();
    }
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
            <button onMouseDown={this.toggleExpand}></button>
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
            <button onMouseDown={this.toggleExpand}></button>
          </nav>
        </Host>
      );
    }
  }

}

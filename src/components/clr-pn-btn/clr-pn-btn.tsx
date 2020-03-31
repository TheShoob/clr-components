import { Component, h } from '@stencil/core';

@Component({
  tag: 'clr-pn-btn',
  styleUrl: 'clr-pn-btn.scss',
  shadow: true
})
export class clrPnBtn {

  constructor() {
    this.pre = this.pre.bind(this);
    this.nxt = this.nxt.bind(this);
    this.home = this.home.bind(this);

  }

  pre() {

    let loc = window.location.hash.toString();
    let locArr = [];

    let arr = [];
    let l = document.links;

    for(var i=0; i<l.length; i++) {
      if (l[i].getAttribute("href").charAt(0) == '#') {
        locArr.push(loc.substring(loc.indexOf('#')+1));
        arr.push(l[i].href.substring(l[i].href.lastIndexOf('#')+1));
      }

    }

    for(var i=0; i<l.length; i++) {

      if (locArr[i] == arr[i] && arr.indexOf(arr[i]) > 0) {
        var sub = Number(i = i - 1); // increase i by one
        location.href='#' + arr[sub];
        break;

      }
    }
  }

  nxt() {

    let loc = window.location.hash.toString();
    let locArr = [];

    let arr = [];
    let l = document.links;

    for(var i=0; i<l.length; i++) {
      if (l[i].getAttribute("href").charAt(0) == '#') {
        locArr.push(loc.substring(loc.indexOf('#')+1));
        arr.push(l[i].href.substring(l[i].href.lastIndexOf('#')+1));
      }
    }

    for(var i=0; i<l.length; i++) {

      let limit = arr.length - 1;
      if (locArr[i] == arr[i] && arr.indexOf(arr[i]) < limit) {
        var add = Number(i = i + 1); // increase i by one
        location.href='#' + arr[add];
        break;

      }
      console.log(limit);

    }

}

home() {
  let loc = window.location.hash.toString();
  let locArr = [];

  let arr = [];
  let l = document.links;

  for(var i=0; i<l.length; i++) {
    l[i].getAttribute("href");
    locArr.push(loc.substring(loc.indexOf('#')+1));
    arr.push(l[i].href.substring(l[i].href.lastIndexOf('#')+1));
  }
  location.href='#' + arr[0];
}

  render() {
    return (
      <div class="wrap">
        <button class="pre" onClick={this.pre}>pre</button>
        <button class="home" onClick={this.home}>home</button>
        <button class="next" onClick={this.nxt}>next</button>
      </div>
    );
  }
}
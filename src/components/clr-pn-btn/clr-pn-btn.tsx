import { Component, h } from '@stencil/core';

@Component({
  tag: 'clr-pn-btn',
  styleUrl: 'clr-pn-btn.scss',
  shadow: true
})
export class clrPnBtn {

  constructor() {
    this.pre = this.pre.bind(this);
  }

  pre() {

      let loc = window.location.hash.toString();
      let locArr = [];

      let arr = [];
      let l = document.links;

      for(var i=0; i<l.length; i++) {
        l[i].getAttribute("href");
        locArr.push(loc.substring(loc.indexOf('#')+1));
        arr.push(l[i].href.substring(l[i].href.indexOf('#')+1));

        if (locArr[i] == arr[i]) {
          console.log('yes:' + arr[i] + " " + arr.indexOf(arr[i]))
         } else {
          console.log('no');
        }


      }
      //console.log(l[0].getAttribute("href"));
      //console.log(loc);
      console.log(locArr);
      console.log(arr);

      

  }

  render() {
    return (
      <div class="wrap">
        <button class="pre" onClick={this.pre}>pre</button>
        <button class="home">home</button>
        <button class="next">next</button>
      </div>
    );
  }
}
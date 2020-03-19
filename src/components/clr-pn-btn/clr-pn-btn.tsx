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

      let l = document.links;
      let loc = window.location.hash.split('#');
      var arr = []
      for(var i=0; i<l.length; i++) {
        //arr.push(l[i].href);
        l[i].getAttribute("href");
        console.log(arr[i]);

        /*if (links.startsWith('#'))  {
            console.log("HI")

        }*/
        //console.log(arr.push(l[i].href));
      }



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
import { Component, State, Prop, h, Listen } from '@stencil/core';

@Component({
  tag: 'clr-popup-btn',
  styleUrl: 'clr-popup-btn.scss',
  shadow: true,
})
export class ClrPopupBtn {
  @Prop() text: string = "default text if no text in component";
  @Prop() kind: "info" | "success" | "error" = "info";
  @State() open: boolean;
  @Listen('click', { capture: true })
  handleClick() {
    this.open = !this.open;
  }
  handleAcknowledge = () => {
    this.open = true;
  }
  //getCSSClass = () => this.kind + (this.acknowledged ? " acknowledged" : "");
  getCSSClass = () => this.kind + (this.open ? " open" : "");

  render() {
    return (
      <div class={this.getCSSClass()}>
        <p>{this.text} {this.open ? "on" : "off"}</p>
        <button onClick={this.handleAcknowledge}>acknowledge</button>
      </div>
    )
  }

}

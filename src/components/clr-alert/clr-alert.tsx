import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'clr-alert',
  styleUrl: 'clr-alert.scss',
  shadow: true,
})
export class ClrAlert  {
  @Prop() text: string = "default text if no text in component";
  @Prop() kind: "info" | "success" | "warning" | "error" = "info";
  @State() acknowledged: boolean = false;
  handleAcknowledge = () => {
    this.acknowledged = true;
  }
  getCSSClass = () => this.kind + (this.acknowledged ? " acknowledged" : "");
  render() {
    return (
      <p class={this.getCSSClass()}>
        {this.text}
        <button onClick={this.handleAcknowledge}>x</button>
      </p>
    )
  }

}

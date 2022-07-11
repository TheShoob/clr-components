import { Component, h, Prop } from '@stencil/core';
import test from './assets/test.svg';
import doc from './assets/doc.svg';

@Component({
  tag: 'clr-icon',
  styleUrl: 'clr-icon.scss',
  scoped: true,
})

export class ClrIcon {

  @Prop() size: "tiny" | "small" | "medium" | "large" | "full" = "tiny";
  @Prop() kind;

  getCSSClass = () => this.size;
  getKind = () => this.kind;

  render() {
    if (this.kind == 'doc')
    return (
      <div class={this.getCSSClass()} innerHTML={doc}></div>
    ); else if (this.kind == 'test')
    return (
      <div class={this.getCSSClass()} innerHTML={test}></div>
    );
  }

}
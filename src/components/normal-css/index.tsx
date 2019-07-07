import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'normal-css',
  styleUrl: './normal-css.css'
})
export class NormalCss {
  @Prop()
  greeting: string = 'Hello';
  render() {
    return (
      <div class="normal-css">
        <span class="normal-greeting">{this.greeting}</span> - <slot />
      </div>
    );
  }
}

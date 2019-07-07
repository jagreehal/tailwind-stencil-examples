import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'shadow-css-using-variables',
  styleUrl: './shadow-css-using-variables.css',
  shadow: true
})
export class ShadowCss {
  @Prop()
  greeting: string = 'Hello';
  render() {
    return (
      <div class="shadow-class">
        <span class="shadow-greeting">{this.greeting}</span> - <slot />
      </div>
    );
  }
}

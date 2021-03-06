import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'scoped-css',
  styleUrl: './scoped-css.css',
  scoped: true
})
export class ScopedCss {
  @Prop()
  greeting: string = 'Hello';
  render() {
    return (
      <div class="scoped-class">
        <span class="scoped-greeting">{this.greeting}</span> - <slot />
      </div>
    );
  }
}

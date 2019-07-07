import { Component, Prop, h } from '@stencil/core';

const CardPill = ({ text }) => <span class="c-card__pill">#{text}</span>;

@Component({
  tag: 'themed-card',
  styleUrl: 'themed-card.css',
  shadow: true
})
export class DumbCard {
  @Prop() pills: string;
  @Prop() cardDescription: string;

  render() {
    return (
      <div class="c-card">
        <img
          class="c-card__image"
          src="http://placekitten.com/g/300/300"
          alt="Kitty!"
        />
        <div class="c-card__body">
          <div class="c-card__title">
            <slot name="title" />
          </div>
          <p class="c-card__description">
            <slot />
          </p>
        </div>
        <div class="c-card__pills">
          {this.pills
            ? this.pills.split(',').map(text => <CardPill text={text} />)
            : undefined}
        </div>
      </div>
    );
  }
}

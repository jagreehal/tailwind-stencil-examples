import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'themed-card',
  styleUrl: 'themed-card.css',
  shadow: true
})
export class DumbCard {
  @Prop() cardTitle: string;
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
          <div class="c-card__title">The Coldest Sunset</div>
          <p class="c-card__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="c-card__pills">
          <span class="c-card__pill">#photography</span>
          <span class="c-card__pill">#travel</span>
          <span class="c-card__pill">#winter</span>
        </div>
      </div>
    );
  }
}
// <div class="c-card">
//   <header class="c-card__header">
//     <h3 class="c-card__title">{this.cardTitle}</h3>
//     <p class="c-card__description">{this.cardDescription}</p>
//   </header>
//   <div class="c-card__body">
//     <slot />
//   </div>
// </div>;

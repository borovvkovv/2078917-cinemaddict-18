import { createElement } from '../render.js';

const createAvatarTemplate = () => (`
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
`);

export default class AvatarView {

  getTemplate() {
    return createAvatarTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

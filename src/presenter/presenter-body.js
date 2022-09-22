import { render } from '../render.js';
import { RenderPosition } from '../render.js';
import PopupView from '../view/popup-view.js';

export default class PresenterBody {
  init = (container) => {
    this.container = container;
    render(new PopupView(), container, RenderPosition.AFTEREND);

  };
}

import { render } from '../render.js';
import ProfileView from '../view/profile-view.js';
import AvatarView from '../view/avatar-view.js';
import RatingView from '../view/rating-view.js';

export default class PresenteHeader {

  init = (container) => {
    this.container = container;
    this.profile = new ProfileView();

    render(this.profile,this.container);
    render(new RatingView(), this.profile.getElement());
    render(new AvatarView(), this.profile.getElement());
  };
}

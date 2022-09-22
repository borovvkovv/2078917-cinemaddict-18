import { render } from '../render.js';
import StatisticsView from '../view/statistics-view.js';

export default class PresenterFooter {
  init = (container) => {
    render(new StatisticsView(),container);
  };
}

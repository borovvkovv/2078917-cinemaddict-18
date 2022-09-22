import { render } from '../render.js';
import SortView from '../view/sort-view.js';
import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmsListExtraView from '../view/films-list-extra-view.js';
import ListFilterView from '../view/list-filter-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreView from '../view/show-more-view.js';

export default class PresenteMain {

  films = new FilmsView();
  filmsList = new FilmsListView();
  filmsListContainer = new FilmsListContainerView();

  init = (container) => {
    this.container = container;
    let filmsListExtra = new FilmsListExtraView();
    let extraContainer = new FilmsListContainerView();

    render(new ListFilterView(), this.container);
    render(new SortView(), this.container);

    render(this.films,this.container);
    render(this.filmsList, this.films.getElement());
    render(this.filmsListContainer,this.filmsList.getElement());
    for (let i = 0;i < 5;i++) {
      render(new FilmCardView(),this.filmsListContainer.getElement());
    }
    render(new ShowMoreView(),this.filmsList.getElement());

    render(filmsListExtra, this.films.getElement());
    render(extraContainer,filmsListExtra.getElement());
    render(new FilmCardView(), extraContainer.getElement());
    render(new FilmCardView(), extraContainer.getElement());

    filmsListExtra.removeElement();
    filmsListExtra = new FilmsListExtraView();
    render(filmsListExtra, this.films.getElement());
    extraContainer.removeElement();
    extraContainer = new FilmsListContainerView();
    render(extraContainer, filmsListExtra.getElement());
    render(new FilmCardView(), extraContainer.getElement());
    render(new FilmCardView(), extraContainer.getElement());
  };
}

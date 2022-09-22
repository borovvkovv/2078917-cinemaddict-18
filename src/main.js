import PresenterHeader from './presenter/presenter-header.js';
import PresenteMain from './presenter/presenter-main.js';
import PresenterFooter from './presenter/presenter-footer.js';
import PresenterBody from './presenter/presenter-body.js';

const siteMainElement = document.querySelector('.main');
const siteMainHeader = document.querySelector('.header');
const siteMainFooter = document.querySelector('.footer');
const statistics = siteMainFooter.querySelector('.footer__statistics');

const presenterHeader = new PresenterHeader();
presenterHeader.init(siteMainHeader);

const presenterMain = new PresenteMain();
presenterMain.init(siteMainElement);

const presenterFooter = new PresenterFooter();
presenterFooter.init(statistics);

const presenterBody = new PresenterBody();
presenterBody.init(siteMainFooter);

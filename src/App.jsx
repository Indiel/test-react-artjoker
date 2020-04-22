import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './containers/home-page';
import NewsPage from './containers/news-page';

import NewsDetails from './components/news-details/news-details';
import Modal from './components/modal/modal';

import AuthorizationPage from './containers/authorization-page';
import ProfilePage from './containers/profile-page';
import Footer from './components/footer/footer';

class ModalSwitch extends React.Component {
  // eslint-disable-next-line react/destructuring-assignment
  previousLocation = this.props.location;

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillUpdate(nextProps) {
    const { location } = this.props;

    if (
      nextProps.history.action !== 'POP'
      && (!location.state || !location.state.modal)
    ) {
      this.previousLocation = location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(location.state
      && location.state.modal
      && this.previousLocation !== location);
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route path="/" component={HomePage} exact />
          <Route path="/news" component={NewsPage} exact />
          <Route path="/authorization" component={AuthorizationPage} />
          <Route path="/profile" component={ProfilePage} />

          <Route
            path="/news/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <NewsDetails itemId={id} />;
            }}
          />
        </Switch>
        {isModal
          ? (
            <Route
              path="/news/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <Modal itemId={id} />;
              }}
            />
          ) : null}
      </div>
    );
  }
}

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Header />

        <main className="main">
          <div className="wrapper main__wrapper">
            <HashRouter>
              <Route component={ModalSwitch} />
            </HashRouter>
          </div>
        </main>

        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;

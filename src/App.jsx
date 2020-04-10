import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './containers/home-page';
import NewsPage from './containers/news-page';
import NewsDetails from './components/news-details/news-details';
import AuthorizationPage from './containers/authorization-page';
import ProfilePage from './containers/profile-page';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Header />

        <main className="main">
          <div className="wrapper main__wrapper">
            <Route path="/" component={HomePage} exact />
            <Route path="/news" component={NewsPage} exact />
            <Route
              path="/news/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <NewsDetails itemId={id} />;
              }}
            />
            <Route path="/authorization" component={AuthorizationPage} />
            <Route path="/profile" component={ProfilePage} />
          </div>
        </main>

        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;

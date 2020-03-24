import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import usersService from './services/users-service';
import { fetchUsers } from './actions/actions';

import Header from './components/header/header';
import HomePage from './containers/home-page';
import NewsPage from './containers/news-page';
import NewsDetails from './components/news-details/news-details';
import AuthorizationPage from './containers/authorization-page';
import ProfilePage from './containers/profile-page';
import Footer from './components/footer/footer';

class App extends React.Component {
  componentDidMount() {
    const { getFetchUsers } = this.props;
    usersService.getUsers()
      .then((data) => {
        getFetchUsers(data);
      });
  }

  render() {
    const { isSingIn } = this.props;
    return (
      <div className="App">
        <BrowserRouter>
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
              <Route
                path="/profile"
                render={() => { return (<ProfilePage isSingIn={isSingIn} />); }}
              />
            </div>
          </main>

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSingIn: state.login.isSingIn };
};

const mapDispatchToProps = (dispatch) => {
  return { getFetchUsers: (users) => { dispatch(fetchUsers(users)); } };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

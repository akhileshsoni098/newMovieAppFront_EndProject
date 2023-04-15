import { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./actions/auth";
//  import setAuthToken from "./utils/setAuthToken";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/layout/Dashboard";
import UserProfile from "./pages/UserProfile";
import Navbar from "./Navbar/Navbar";
import PrivateRoute from "./components/routing/PrivateRoute";
import UpdateProfile from "./pages/updateProfile"
import Watchlist from "./pages/WatchList";
import { removeFromWatchList } from "./scripts/dashboard";
import { addWatchList } from "./scripts/dashboard";
import ReviewForm from "./pages/Reviews";
import "./App.css";

function App() {
  useEffect(() => {
    store.dispatch(loadUser()); 
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <section>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Watchlist" component={Watchlist} />
            <Route exact path="/UpdateProfile" component={UpdateProfile} />


            <Route exact path="/addWatchlist" component={addWatchList} />
            <Route exact path="/removeFromWatchList" component={removeFromWatchList} />

            <Route exact path="/ReviewForm" component={ReviewForm} />
            <Route exact path="/UserProfile" component={UserProfile} />
          </Switch>
        </section>
      </Fragment>
    </Provider>
  );
}

export default App;

import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import LoginPage from './pages/login/login';
import CheckoutPage from "./pages/checkout/checkout";
import Header from './components/header/header';

import { auth, createUserProfileDocument } from "./firebase/firebase";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

function App({ setCurrentUser, currentUser }) {
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                });

            } else {
                setCurrentUser(userAuth);
            }
        });

        return () => {
            unsubscribe();
        }
    }, []);

    const signOut = event => {
        event.preventDefault();

        auth
            .signOut()
            .then(() => {
                setCurrentUser(null);
            });
    }

    return (
        <>
            <Header signOut={signOut} />
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/login' render={() => currentUser ? <Redirect to="/" /> : <LoginPage />} />
                <Route exact path='/checkout' component={CheckoutPage} />
                <Route path='/shop' component={ShopPage}/>
            </Switch>
        </>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

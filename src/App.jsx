import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import LoginPage from './pages/login/login';
import Header from './components/header/header';

import { auth, createUserProfileDocument } from "./firebase/firebase";

function App() {
    const [currentUser, setCurrentUser] = useState(null);

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
            <Header currentUser={currentUser} signOut={signOut} />
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path='/login' component={LoginPage}/>
            </Switch>
        </>
    );
}

export default App;

import React from 'react';
import style from './log.module.css';
import { Navigate } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { loginWithProvider } from './redux/actions';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCgmLrDf4mM13hD6f47Yeq8KE7IvnwusC4",
    authDomain: "legal-tech1111.firebaseapp.com",
    projectId: "legal-tech1111",
    storageBucket: "legal-tech1111.appspot.com",
    messagingSenderId: "1037769772117",
    appId: "1:1037769772117:web:919ee3a58c4809fafe18dc",
    measurementId: "G-G0WCGL9H5B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

const Log = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleSignIn = (provider) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const credentials = { email: user.email, displayName: user.displayName, uid: user.uid };
                dispatch(loginWithProvider(credentials));
            })
            .catch((error) => {
                console.error(error);
            });
    };

    if (user) {
        return <Navigate to="/Home" />;
    }

    return (
        <div className={style.global}>
            <div className={style.card}>
                <Row>
                    <Col>
                        <h2>Sign Up</h2>
                        <div className={style.botones}>
                            <div className={style.usuarios}>
                                <Button>Create User</Button>
                            </div>
                            <div className={style.facebook}>
                                <Button onClick={() => handleSignIn(facebookProvider)} variant='primary' className="submit">Sign in with Facebook</Button>
                            </div>
                            <div className={style.github}>
                                <Button onClick={() => handleSignIn(githubProvider)} variant='dark' className="submit">Sign in with GitHub</Button>
                                {/* falta colocar que cuado te registres de mande a la home */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Log;

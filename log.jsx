import React, { useState } from 'react';
import style from './log.module.css';
import { Navigate } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Log = () => {
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

    // Inicializar Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const [loggedIn, setLoggedIn] = useState(false);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const { email, displayName, uid } = user;
                const credentials = {
                    email,
                    displayName,
                    uid
                };
                // Aquí puedes hacer algo con las credenciales si es necesario
                // Por ejemplo, guardarlas en el estado o en el almacenamiento local
                // Luego, redirige al usuario a la página Home
                setLoggedIn(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // Si el usuario está autenticado, redirige a la página Home
    if (loggedIn) {
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
                            <button>Creat User</button>
                        </div>
                        <div className={style.google}>
                            <Button onClick={handleGoogleSignIn} variant='danger' className="submit">Sign in with Google</Button>
                        </div>  
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Log;

import React from 'react'
import Button from '@material-ui/core/Button';
import styles from './Home.module.css';
import {Link} from 'react-router-dom';


function Home() {
    return (
        <div className={styles.home}>
            <Link to="/">
                <Button size="large" className={styles.button} variant="contained">Home</Button>
            </Link>
            <Link to="/signup">
                <Button size="large" className={styles.button} variant="contained">Sign Up</Button>
            </Link>
            <Link to="signin">
                <Button size="large" className={styles.button} variant="contained" color="secondary">
                Sign in
                </Button>
            </Link>

        </div>
    )
}

export default Home

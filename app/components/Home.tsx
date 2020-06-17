import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import path from 'path';

export default function Home() {
  return (
    <div className={styles.container} data-tid="container">
      <p>{path.resolve()}</p>
      <Link to={routes.DISCOVER}>to Discover</Link>
    </div>
  );
}

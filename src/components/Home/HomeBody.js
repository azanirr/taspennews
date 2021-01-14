import React from 'react';
import styles from './HomeBody.module.css';
import MainBody from './MainBody';
import AddNews from './AddNews';

function HomeBody (props) {

    return(
        <div className={styles.Container}>
            <MainBody news={props.news}/>
            <AddNews news={props.news} />
        </div>
    )
}

export default HomeBody;
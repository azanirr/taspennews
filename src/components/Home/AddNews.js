import React from 'react';
import styles from './AddNews.module.css';
import moment from 'moment';
import {Link} from 'react-router-dom';

function AddNews (props) {

    const { news } = props;

    return (
        <div className={styles.Container}>
            <div className={styles.Ads}>

            </div>
            <div className={styles.NewsContainer}>
                {news?.length > 0 ?
                news.map(list => {
                    let date = moment(list.date).format("DD MMMM, YYYY");
                    let data = list.desc[0];
                    data = data.substr(0, 100);
                    data = data.substr(0, Math.min(data.length, data.lastIndexOf(" ")));
                    return(
                    <div className={styles.News} key={list.id}>
                        <div>
                            <Link to={"/detail/" + list.id}>
                                <img src={list.image} alt="Other"></img>
                            </Link>
                        </div>
                        <div>
                            <h1>{list.type}</h1>
                            <p>{data}</p>
                            <p className={styles.Date}>{date}</p>
                        </div>
                    </div>
                    )
                })
                : "there is no News"}
            </div>
        </div>
    )
}

export default AddNews;
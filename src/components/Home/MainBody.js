import React from 'react';
import styles from './MainBody.module.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Link} from 'react-router-dom';

function MainBody (props){

    const {news} = props;

    return (
        <div className={styles.Container}>
            <div className={styles.NewsTop}>
                <button>National</button>
                <div>
                    <p>Komisaris Taspen Raih Bintang Tanda Jasa</p>
                </div>
            </div>
            <div className={styles.ContainerNews}>
                {news?.length > 0 ?
                news.map(list => {
                    let data = list.desc[0];
                    data = data.substr(0, 150);
                    data = data.substr(0, Math.min(data.length, data.lastIndexOf(" "))) + ".....";
                    return(
                        <div className={styles.News} key={list.id}>
                            <img src={list.image} alt="News Pic" title="Header News"></img>
                            <h1>{list.type}</h1>
                            <Link to={"/detail/" + list.id}>
                                <h2>{list.title}</h2>
                            </Link>
                            <p>{data}</p>
                            <Link to={"/detail/" + list.id}>
                                <button>
                                    Read More <ArrowForwardIosIcon className={styles.Icon}/>
                                </button>
                            </Link>
                        </div>  
                    )
                })
                : "there is no News"}       
            </div>
        </div>
    )
}

export default MainBody;
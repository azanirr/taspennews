import React from 'react';
import moment from 'moment';
import styles from './DetailBody.module.css';
import { useParams } from "react-router-dom";

function DetailBody(props) { 

    const { id } = useParams();

    const idNews = Number(id);

    const [data, setData] = React.useState([]);
    
    const {news} = props;

    React.useEffect(() => {
        const filtered = news.filter(filter => filter.id === idNews);
        setData(filtered);
    }, [idNews, news])


    return(
        <>
           {data.map(list => {      
                let date = moment(list.date).format("HH:mm | DD MMMM, YYYY");
                return(
                    <div className={styles.Container} key={list.id}>
                        <img src={list.image} alt={list.title}></img>
                        <h1>{list.type}</h1>
                        <h2>{list.title}</h2>
                        <p className={styles.Date}>{date}</p>
                        {list?.desc.map((para, i) => {
                            return(
                                <p key={i}>{para}</p>
                            )
                        })} 
                    </div>
               )
           })}
        </>
    )
}

export default DetailBody;
import React from 'react';
import Navbar from '../components/Navbar/Navbar'; 
import DetailBody from '../components/DetailBody/DetaiBody';

function DetailNews(props){

    return(
        <div>
            <Navbar />
            <DetailBody news={props.news}/>
        </div>
    )
}

export default DetailNews;
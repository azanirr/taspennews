import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HomeBody from '../components/Home/HomeBody';

function Home(props) {
    
    return(
        <div>
            <Navbar />
            <HomeBody news={props.news}/>
        </div>
    )
}

export default Home;
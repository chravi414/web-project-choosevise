import React from 'react';
import { Container, Grid } from '@material-ui/core';
import './Home.css'




const Home = () => {
    return (
        <>
            <Container class='container-page'>
                <Grid class='grid-item'>
                   <div class="menu-items">
                       <text class="menu-text">Catogeries</text>
                       <img class="img-plus"src="https://icons-for-free.com/iconfiles/png/512/add+character+increase+math+plus+sign+icon-1320184998988139546.png"></img>
                    </div>
                    <div class="menu-items">
                       <text class="menu-text">Offers</text>
                       <img class="img-plus"src="https://icons-for-free.com/iconfiles/png/512/add+character+increase+math+plus+sign+icon-1320184998988139546.png"></img>
                    </div>
                    <div class="menu-items">
                       <text class="menu-text">Brands</text>
                       <img class="img-plus"src="https://icons-for-free.com/iconfiles/png/512/add+character+increase+math+plus+sign+icon-1320184998988139546.png"></img>
                    </div>  

    
                </Grid>
                <Grid class='grid-item'>
    
                </Grid>
            </Container>
        </>
    );
}

export default Home;

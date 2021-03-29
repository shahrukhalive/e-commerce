import React from 'react';
import  './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Event_March/HeroPC_1500x600._CB657121219_.jpg" alt=""/>

                    <div className="home__row">
                        <Product id = "1234"
                         title="Laptop" 
                        price={10000}
                         image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
                         rating={2}
                        />
                            
                        <Product id="12345"
                        title="shoes" 
                        price={10000}
                         image="https://m.media-amazon.com/images/I/81zc8i+8qfL._AC_UL320_.jpg"
                         rating={2}/>
                        

                    </div>

                    <div className="home__row">

                        <Product title="mobile" 
                        price={10000}
                         image="https://m.media-amazon.com/images/I/61m1Dot5KCL._AC_UY218_.jpg"
                         rating={2}/>

                        <Product  title="mobile" 
                        price={10000}
                         image="https://m.media-amazon.com/images/I/61-L1c9vvmL._AC_UY218_.jpg"
                         rating={2}/>

                        <Product  title="mobile" 
                        price={10000}
                         image="https://m.media-amazon.com/images/I/81yFtoIcL2L._AC_UY218_.jpg"
                         rating={2}/> 
                        
                    </div>

                    <div className="home__row">
                        {/*product */}
                    </div>
            </div>  
        </div>
    );
}

export default Home;


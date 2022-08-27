import React from 'react';
import "./Home.css"

const Home = () => {
    return (
          <>
                <section className='HomeBox'>
                      <img
                            src='https://i.ibb.co/m9z4kgZ/Myproject.png'
                            alt=''
                            className='responsive'
                      />
                      <div className='HomeSubBox'>
                            <h3>Avijit Kundu</h3>
                            <h1>Web Developer</h1>
                            <p>
                                  Hello! I am Web Developer from United States,
                                  New York. I have rich experience in web site
                                  design and building, also I am good at
                                  wordpress. I love to talk with you about our
                                  unique.
                            </p>
                      </div>
                </section>
          </>
    );
};

export default Home;
import React from 'react'
import './../css/home.scss'
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

function Home() {
  return (
    <div>


      <div className='banner'>
        <Fade left>
          <div className='overlay'>
            <h1>Looking for parking. <br /> <span>You have came to right place</span></h1>
          </div>
        </Fade>
      </div>

      <div className='container mt-5'>
        <section className='my-5'>
          <h2>How Rent A Spot Works</h2>


          <Rotate top left >
            <div className='row mt-4'>
              <div className='col-md-4 text-center'>
                <div className='card p-4'>
                  <img src='./map.avif' className='services-card-icon'></img>
                  <div className='mt-4'>
                    <h3>Search</h3>
                    <p className='mt-3'>Search for a parking spot according to your needs.</p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center'>
                <div className='card p-4'>
                  <img src='./book.png' className='services-card-icon'></img>
                  <div className='mt-4'>
                    <h3>Book</h3>
                    <p className='mt-3'>Reserved Parking spot and pay desired amount..</p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center'>
                <div className='card p-4'>
                  <img src='./parking.png' className='services-card-icon'></img>
                  <div className='mt-4'>
                    <h3>Park</h3>
                    <p className='mt-3'>Follow the provided instructions and park your car.</p>
                  </div>
                </div>
              </div>
            </div>
          </Rotate>
        </section>


        <Rotate top right>

          <section className='my-5'>
            <h2 className='mt-5'>Testimonial</h2>
            <div className='row'>
              <div className='col-md-6'>
                <div className='testimonial-card p-3 rounded text-center'>
                  <img src='./profile-1.png' />
                  <p className='mt-4 mb-3'>"I recently used Rent A Spot, a parking booking website, and I was thoroughly impressed with the service. The ParkVista Smart Mobility Solutions Hub  was user-friendly and easy to navigate, allowing me to quickly find and book a parking spot for my trip. The process was seamless, and I received a confirmation email from ParkVista Smart Mobility Solutions Hub with all the necessary details. On the day of my arrival, the ParkVista Smart Mobility Solutions Hubparking lot was well-maintained and had ample space. I highly recommend ParkVista Smart Mobility Solutions Hub to anyone in need of convenient and reliable parking options."</p>
                  <span><strong>Rishi</strong> </span>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='testimonial-card p-3 rounded text-center'>
                  <img src='./profile-1.png' />
                  <p className='mt-4 mb-3'>"I cannot express how grateful I am for ParkVista Smart Mobility Solutions Hub, the parking booking website. ParkVista Smart Mobility Solutions Hub has made the process incredibly convenient and stress-free. With just a few clicks on the ParkVista Smart Mobility Solutions Hub website, I can compare prices and book a parking spot in advance. ParkVista Smart Mobility Solutions Hub provides detailed information about each parking facility, including reviews from other users, which helped me make informed decisions. On multiple occasions, I arrived at my destination to find a reserved spot waiting for me"</p>
                  <span><strong>Rishi</strong> </span>
                </div>
              </div>
            </div>
          </section>
        </Rotate>
      </div>
    </div>
  )
}

export default Home
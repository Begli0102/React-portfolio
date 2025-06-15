import React from 'react'
import { Link } from 'react-router-dom'
// import ReactTypingEffect from 'react-typing-effect';
import './Projects.css'

import urlshortener from '../../images/urlshortener.png'
import cars from '../../images/cars.PNG'
import parfumes from '../../images/perfumes.PNG'
import image from '../../images/image.png'
import words from '../../images/words.png'

const Projects = () => {
  return (
    <section id='projects'>
      <div className='projects container'>
        <div className='project-header'>
          <h1 className='section-title'>
            Resent <span>Projects</span>{' '}
          </h1>
        </div>
        <div className='all-projects'>
          <div className='project-items'>
            <div className='project-info'>
              <h1>Car-Market</h1>
              <p>
                In this application, users can search for the vehicle they want
                using the search engine and view detailed information about it.
                If they wish, they can increase or decrease the number of cars.
                This app will attract your attention with these and many more
                features. All data was obtained from Rapid API.
              </p>
            </div>
            <div className='project-img'>
              <img
                className='image_project'
                src={cars}
                width='500px'
                height='300px'
                alt='alt'
              />
            </div>
            <div className='details'>
              <a href='https://car-show-gamma-ecru.vercel.app/'>
                <button>Live</button>
              </a>
              <a href='https://github.com/Begli0102/car_show'>
                <button>Code</button>
              </a>
            </div>
          </div>

          <div className='project-items'>
            <div className='project-info'>
              <h1>BK-perfumes</h1>
              <p>
                BK-perfumes is an e-commerce application, built with Next.js. In
                this application users can see the information about perfumes,
                add them to cart,see the total price and delete them.
              </p>
            </div>
            <div className='project-img'>
              <img
                className='image_project'
                src={parfumes}
                width='500px'
                height='300px'
                alt='alt'
              />
            </div>
            <div className='details'>
              <a href='https://bk-perfumes.vercel.app/'>
                <button>Live</button>
              </a>
              <a href='https://github.com/Begli0102/BK_perfume_next.js'>
                <button>Code</button>
              </a>
            </div>
          </div>

          <div className='project-items'>
            <div className='project-info'>
              <h1>Image app</h1>
              <p>
                Image app is an application which allows users to search for an
                image and get a list of images related to the search. The user
                can view information (number of views, downloads, likes
                etc)about those images. All the informations are fetched from
                pixabay API
              </p>
            </div>
            <div className='project-img'>
              <img
                className='image_project'
                src={image}
                width='500px'
                height='300px'
                alt='alt'
              />
            </div>
            <div className='details'>
              <a href='https://imageeapp.netlify.app'>
                <button>Live</button>
              </a>
              <a href='https://github.com/Begli0102/image-app'>
                <button>Code</button>
              </a>
            </div>
          </div>

          <div className='project-items'>
            <div className='project-info'>
              <h1>Word typing game</h1>
              <p>
                It is an application built with React. In this app a user can
                type as many words as he/she can in 30 seconds. Each typed word
                is counted and is placed in a corresponding place. When the time
                is up, the user can see the correct and misspelled words in the
                sidebar.
              </p>
            </div>
            <div className='project-img'>
              <img
                className='image_project'
                src={words}
                width='500px'
                height='300px'
                alt='alt'
              />
            </div>
            <div className='details'>
              <a href='https://randomwordgame.netlify.app/'>
                <button>Live</button>
              </a>

              <a href='https://github.com/Begli0102/wordGame'>
                <button>Code</button>
              </a>
            </div>
          </div>

          <div className='project-items'>
            <div className='project-info'>
              <h1>Url Shortener</h1>
              <p>
                A URL shortening web app was built using JavaScript and React,
                integrate with the shrtcode API. URL shortening is a technique
                on the Web in which URL may be made substantially shorter and
                still direct to the required page. This is achieved by using a
                redirect that links to the web page that has a long URL.
              </p>
            </div>
            <div className='project-img'>
              <img
                className='image_project'
                src={urlshortener}
                width='500px'
                height='300px'
                alt='alt'
              />
            </div>
            <div className='details'>
              <a href='https://url-shortener11.netlify.app/'>
                <button>Live</button>
              </a>

              <a href='https://github.com/Begli0102/URLshortener'>
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

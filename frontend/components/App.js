import React,{useState, useEffect} from 'react'
import axios from "axios";
import styled from "styled-components";

const StyledCard = styled.div
    'border: 1px solid black;'


const api_key = 'DEMO_KEY'
const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`


function App() {
    const [apod, setApod] = useState()

    useEffect(() =>{
        function fetchphoto () {
            axios.get(url)
                .then(res => {
                    console.log(res.data)
                    setApod(res.data)
                })
                .catch(err => {
                    console.log(err.message)
                })
        }
        fetchphoto()
      //   setApod({
      //       "date": "2024-01-26",
      //       "explanation": "silon Tauri lies 146 light-years away. A K-type red giant star, epsilon Tau is cooler than the Sun, but with about 13 times the solar radius it has nearly 100 times the solar luminosity. A member of the Hyades open star cluster the giant star is known by the proper name Ain, and along with brighter giant star Aldebaran, forms the eyes of Taurus the Bull. Surrounded by dusty, dark clouds in Taurus, epsilon Tau is also known to have a planet. Discovered by radial velocity measurements in 2006, Eps...",
      //       "hdurl": "https://apod.nasa.gov/apod/image/2401/Ain_4096.jpg",
      //       "media_type": "image",
      //       "service_version": "v1",
      //       "title": "Epsilon Tauri: Star with Planet",
      //       "url": "https://apod.nasa.gov/apod/image/2401/Ain_1024.jpg"
      //   })
    },[])
    if(!apod) return 'Fetching Photo of the Day...'
  return (
      <section>
          <div className='card'>
              <h2>{apod.title}</h2>
              <br />
              <p>{apod.explanation}</p>
              <br />
              <figure>
                  <img src={apod.url}/>
              </figure>
              <br />
              <figcaption>Awesome picture taken on {apod.date} 🚀</figcaption>
          </div>
      </section>
  )
}

export default App

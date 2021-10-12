import './Home.css'
import { Layout } from '../../components'
import {Link} from 'react-router-dom'

export default function Home(props) {
  return (
    <Layout user={props.user}>
      <div className='header-img'>
        <img src='https://res.cloudinary.com/dfryxohde/image/upload/v1633665679/SOUND/iStock-1145059454_2_dqa8zb.jpg' alt='stereo' />
        <div>
          <h1><b>Turn Up the Volume</b></h1>
          <h4><b>Find top brand audio products on Sound</b></h4>
          <Link to='/products'><button>SHOP NOW</button></Link>
        </div>
      </div>
      <div className='body-imgs'>
        <Link to='/products'><img src='https://res.cloudinary.com/dfryxohde/image/upload/v1633665085/SOUND/stereo-sound-speaker-neon-colored-background_77190-6921_zaopj2.jpg' alt='stereo' /></Link>
        <Link to='/products'><img src='https://res.cloudinary.com/dfryxohde/image/upload/v1633665086/SOUND/nikolai-chernichenko-QOLyehGXRyA-unsplash_ras0gy.jpg' alt='soundboard' /></Link>
        <Link to='/products'><img src='https://res.cloudinary.com/dfryxohde/image/upload/v1633665085/SOUND/studio-microphone-pop-shield-mic-empty-recording-studio_43263-2762_vxhez0.jpg' alt='microphone' /></Link>
        <Link to='/products'><img src='https://res.cloudinary.com/dfryxohde/image/upload/v1633665087/SOUND/fausto-sandoval-w5m3PIGvkqI-unsplash_p7lewj.jpg' alt='headphone' /></Link>
      </div>
    </Layout>
  )
}

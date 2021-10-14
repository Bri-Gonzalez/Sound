import './Home.css'
import { Layout } from '../../components'
import {Link} from 'react-router-dom'

export default function Home(props) {
  return (
    <Layout user={props.user}>
      <div className='header-img'>
        <img src='https://res.cloudinary.com/dfryxohde/image/upload/v1634240694/SOUND/iStock-1145059454_3_tfe4vr.jpg' alt='stereo' />
        <div className='slogan-container'>
          <h1><b>Turn Up the Volume</b></h1>
          <h4><b>Find top brand audio products on Sound</b></h4>
          <Link to='/products'><button className='shop-now-btn'>SHOP NOW</button></Link>
        </div>
      </div>
      <div className='body-imgs'>
        <Link to='/products' className='body-imgs-link'><img src='https://res.cloudinary.com/dfryxohde/image/upload/v1634141563/SOUND/stereo-sound-speaker-neon-colored-background_77190-6921_h84lhk.png' alt='stereo'/></Link>
        <Link to='/products' className='body-imgs-link'><img src='https://res.cloudinary.com/dfryxohde/image/upload/v1633665086/SOUND/nikolai-chernichenko-QOLyehGXRyA-unsplash_ras0gy.jpg' alt='soundboard' /></Link>
        <Link to='/products' className='body-imgs-link'><img src='https://res.cloudinary.com/dfryxohde/image/upload/v1633665085/SOUND/studio-microphone-pop-shield-mic-empty-recording-studio_43263-2762_vxhez0.jpg' alt='microphone' /></Link>
        <Link to='/products' className='body-imgs-link'><img src='https://res.cloudinary.com/dfryxohde/image/upload/v1633665087/SOUND/fausto-sandoval-w5m3PIGvkqI-unsplash_p7lewj.jpg' alt='headphone' /></Link>
      </div>
    </Layout>
  )
}

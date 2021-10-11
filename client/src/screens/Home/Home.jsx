import './Home.css'
import { Layout } from '../../components'

export default function Home(props) {
  return (
    <Layout user={props.user}>
      <div className='header-img'>
        <img src='https://res.cloudinary.com/dfryxohde/image/upload/v1633665679/SOUND/iStock-1145059454_2_dqa8zb.jpg' alt='stereo image' />
      </div>
      <div className='body-imgs'>
        <img src='https://res.cloudinary.com/dfryxohde/image/upload/v1633665085/SOUND/stereo-sound-speaker-neon-colored-background_77190-6921_zaopj2.jpg' alt='stereo image' />
        <img src='https://res.cloudinary.com/dfryxohde/image/upload/v1633665086/SOUND/nikolai-chernichenko-QOLyehGXRyA-unsplash_ras0gy.jpg' alt='soundboard image' />
        <img src='https://res.cloudinary.com/dfryxohde/image/upload/v1633665085/SOUND/studio-microphone-pop-shield-mic-empty-recording-studio_43263-2762_vxhez0.jpg' alt='microphone image' />
        <img src='https://res.cloudinary.com/dfryxohde/image/upload/v1633665087/SOUND/fausto-sandoval-w5m3PIGvkqI-unsplash_p7lewj.jpg' alt='headphone image' />
      </div>
    </Layout>
  )
}

import db from '../db/connection.js'
import Product from '../models/product.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {
  
  await db.dropDatabase()

  //USERS
  const user1 = new User({
    fistname: 'axel',
    lastname: 'mora',
    email: 'axel@email.com',
    password_digest: await bcrypt.hash('!a$ecureP@ssw0Rd55!', 11)
  })
  await user1.save()

  const user2 = new User({
    firstname: 'lynda',
    lastname: 'chicon',
    email: 'lynda@email.com',
    password_digest: await bcrypt.hash('!$h0pp3R1', 11)
  })
  await user2.save()

  const user3 = new User({
    firstname: 'hidetaka',
    lastname: 'miyazaki',
    email: 'yearone@email.com',
    password_digest: await bcrypt.hash('!$eller4Lif3', 11)
  })
  await user3.save()

  const user4 = new User({
    firstname: 'behnam',
    lastname: 'hosseini',
    email: 'behnam@email.com',
    password_digest: await bcrypt.hash('L0v32!p4int', 11)
  })
  await user4.save()


  //PRODUCTS
  const products = [
    {
      name: 'AT2020USB+',
      price: '149.00',
      details: 'Equipped with a USB output, the AT2020USB+ is designed for digitally capturing music or any acoustic audio source using your favorite recording software. The microphone offers the critically acclaimed, award-winning sound of the AT2020, with studio-quality articulation and intelligibility perfect for singer/songwriters, podcasters, voice-over artists, field recorders, and home studio recorders.',
      imgURL: 'https://res.cloudinary.com/dfryxohde/image/upload/v1633703321/SOUND/axel-mencia-5SoYbzKhqfA-unsplash_oe0qpo.jpg',
      email: 'axel@email.com'
    },
    {
      name: 'SRS-XB01',
      price: '34.99',
      details: 'Turn up the beat with this Sony Bluetooth compact portable speaker. The compact and splash-proof design goes wherever you do and delivers up to six hours of loud, detailed audio per charge. This Sony Bluetooth compact portable speaker features EXTRA BASS technology for rich, thumping low notes that get people moving.',
      imgURL: 'https://res.cloudinary.com/dfryxohde/image/upload/v1633703324/SOUND/lynda-sanchez--WB52caEpmI-unsplash_yiih8r.jpg',
      email: 'lynda@email.com'
    },
    {
      name: 'Sony ZX Series Wired',
      price: '19.99',
      details: 'These Sony ZX Series MDRZX110/BLK headphones feature neodymium magnets and 30mm drivers for powerful, reinforced sound. Enjoy your favorite songs with lush bass response thanks to the Acoustic Bass Booster technology.',
      imgURL: 'https://res.cloudinary.com/dfryxohde/image/upload/v1633703322/SOUND/yearone-oplCWB9A0bI-unsplash_bdogyk.jpg',
      email: 'yearone@email.com'
    },
    {
      name: 'ATR2100 USB',
      price: '79.95',
      details: 'The ATR2100-USB is designed to take you from the stage to the studio and beyond. This rugged handheld microphone offers two outputs, USB output for digital recording, and an XLR output that connects with a sound system’s conventional microphone input for use in live performance. The microphone plugs right into your computer’s USB port, and functions seamlessly with your favorite recording software. The microphone is ideal for live performance, podcasting, home studio recording, field recording, and voiceover use.',
      imgURL: 'https://res.cloudinary.com/dfryxohde/image/upload/v1633703322/SOUND/susan-wilkinson-HmM-xEHdFaU-unsplash_em1dfe.jpg',
      email: 'susan@email.com'
    },
    {
      name: 'Soundcore Liberty Air 2 Pro',
      price: '129.99',
      details: 'Soundcore Liberty Air 2 Pro are an incredibly advanced pair of wireless earbuds. With up to 26 hours of total play time off of one charge, you can experience your favorite music at all times of the day. Purenote technology allows for a higher quality listening experience, active noise cancelling technology cancels out outside noises intelligently, while HearID provides EQ customization. All three come together to make sure your listening experience is truly yours.',
      imgURL: 'https://res.cloudinary.com/dfryxohde/image/upload/v1633703321/SOUND/behnam-norouzi-XGIulH5L8lU-unsplash_okhtbk.jpg',
      email: 'behnam@email.com'
    },
    {
      name: 'Apple AirPods',
      price: '159.00',
      details: 'Powered by the Apple H1 headphone chip, AirPods deliver a faster and more stable wireless connection to your devices — up to 2x faster when switching between active devices, and a 1.5x faster connection time for phone calls. The H1 chip also drives voice-enabled Siri access and delivers up to 30 percent lower gaming latency. So whether you’re playing games, listening to music, or enjoying podcasts, you’ll experience higher-quality sound.',
      imgURL: 'https://res.cloudinary.com/dfryxohde/image/upload/v1633703321/SOUND/salman-hossain-saif-KcbD8QoBGIk-unsplash_khfyrz.jpg',
      email: 'salman@email.com'
    },
    {
      name: 'Sony WH-CH700N',
      price: '86.99',
      details: 'Add music to your day with these Sony wireless headphones. Their noise cancelling technology uses artificial intelligence to adapt to your environment and reduce background sounds for enjoyable listening. The Quick Charging battery on these over-ear Sony wireless headphones provides up to 35 hours of playback for convenience.',
      imgURL: 'https://res.cloudinary.com/dfryxohde/image/upload/v1633703321/SOUND/kiran-ck-LSNJ-pltdu8-unsplash_ndnjnc.jpg',
      email: 'kiran@email.com'
    },
    {
      name: 'HIGHLINE BOBBY S',
      price: '4,998.00',
      details: 'Stein Music’s smallest hornloudspeaker of the High Line family, with similar qualities as the big ones and an astonishing price/performance ratio. The High Line “Bobby” S is a compact full range hornspeaker with 80 watt sinusoidal power handling.',
      imgURL: 'https://res.cloudinary.com/dfryxohde/image/upload/v1633703321/SOUND/con-se-VHFFZCDDxQ8-unsplash_qhw8te.jpg',
      email: 'carlos@email.com'
    }
  ]

  await Product.insertMany(products)
  console.log('Created users & products!')

  db.close()
}

insertData()
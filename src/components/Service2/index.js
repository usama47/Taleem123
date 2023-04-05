import React from 'react'
import { Link } from 'react-router-dom'
import videoImage from '../../images/video.png'
import pdfImage from '../../images/pdf.png'
import audioImage from '../../images/audio.png'
import shortVideos from '../../images/service/shortvideos.png'
import './style.css'

const Service2 = (props) => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  const serviceWrap = [
    {
      simg: videoImage,
      title: "Taleem Ul Quran (Video)",
      link: "/videos"
    },
    {
      simg: audioImage,
      title: "Taleem Ul Quran (Audio)",
      link: "/audios"
    },
    {
      simg: pdfImage,
      title: "Taleem Ul Quran (PDF)",
      link: "/pdf"
    },
    {
      simg: shortVideos,
      title: "Short Videos",
      link: "/shorts"
    },
  ]

  return (
    <div className={`service-area-2 ${props.serviceClass}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wpo-section-title">
              <h2>Taleeem Ul Quran Presents</h2>
              <hr />
              <p> <i>Alhamdulillah,</i>  we are rapidly digitalizing <strong> Taleem Ul Quran </strong> in Audio, Videos and PDF formats. </p>
              <p>
                This amazing Tafseer of Holy Quran enlightens  and relates teachings of Salaf Saleheen with current affairs.
              </p>
            </div>
          </div>
        </div>
        <div className="service-wrap">
          <div className="row">
            {serviceWrap.map((item, i) => (
              <div className="col-lg-4 col-md-6 col-sm-6 custom-grid col-12" key={i}>
                <div className="service-single-item">
                  <div className="service-single-img">
                    <Link onClick={ClickHandler} to={item.link}><img src={item.simg} alt="" /></Link>
                  </div>
                  <div className="service-text">
                    <h2><Link onClick={ClickHandler} to={item.link}>{item.title}</Link></h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service2;
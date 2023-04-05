import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Homepage from '../HomePage'
import AboutPage from '../AboutPage'
import ServicePage from '../ServicePage'
import ServiceSinglePage from '../ServiceSinglePage'
import EventPage from '../EventPage'
import EventPageSingle from '../EventPageSingle'
import DonatePage from '../DonatePage'
import ErrorPage from '../ErrorPage'  
import ContactPage from '../ContactPage' 
import AudioFiles from '../AudioFiles'
import VideoFiles from '../VideoFiles'
import PdfFiles from '../PdfFiles'
import ShortVideos from '../ShortVideos'
import SurahDetails from '../SurahDetails'


const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
          <Routes>
            <Route exact path='/' element={<Homepage/>} />
            <Route path='/home' element={<Homepage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/services' element={<ServicePage/>} />
            <Route path='/service-single' element={<ServiceSinglePage/>} />
            <Route path='/event' element={<EventPage/>} />
            <Route path='/event-single' element={<EventPageSingle/>} />
            <Route path='/donate' element={<DonatePage/>} />
            <Route path='/404' element={<ErrorPage/>} />
            <Route path='/contact' element={<ContactPage/>} />

            <Route path='/audios' element={<AudioFiles/>} />
            <Route path='/videos' element={<VideoFiles/>} />
            <Route path='/pdf' element={<PdfFiles/>} />

            <Route path='/shorts' element={<ShortVideos/>} />
            <Route path='/audios/:surahNumber' element={<SurahDetails/>} />
          </Routes>
      </Router>
      
    </div>
  );
}

export default AllRoute;

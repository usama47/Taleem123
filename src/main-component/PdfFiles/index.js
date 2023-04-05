import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
// import PageTitle from '../../components/pagetitle'
import SurahList from '../../components/SurahList'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const PdfFiles =() => {
    return(
        <Fragment>
            <Navbar/>
            {/* <PageTitle pageTitle={'Audio Tafseer'} pagesub={'Audio Tafseer'}/>  */}
            <SurahList formate={"PDF"}/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PdfFiles;

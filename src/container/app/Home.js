import React, {useRef, useState} from 'react';
import 'antd/dist/antd.css'
import {
    MenuFoldOutlined,
    PlusOutlined
} from '@ant-design/icons'
import {
    StyledWrapper,
    StyledHeader,
    StyledTopbar,
    StyledJumbortron,
    StyledService,
    StyledNews,
    StyledFooter,
    StyledNavbar,
    StyledMenu,
    StyledMenu3,
} from './homeStyled.js'
// import fontawesome from '@fortawesome/fontawesome'
// import { faUser, faKey } from '@fortawesome/fontawesome-free-solid'
import {
    Link
} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Fade from 'react-reveal';

import HomeData from '../data/home-data'

function Home() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
     });
    const openRef = useRef(null)
    const activeRef = useRef(null)
    const handleClick = () => {
        const open = openRef.current;
        open.classList.toggle("is-nav-open");
    }
    const handleActiveClick = () => {
        const navbox = activeRef.current;
        navbox.classList.toggle("active");
        
    }
    
  return (
    <StyledWrapper>
        <StyledHeader>
            <StyledNavbar>
                <div className="brand">
                    <h1>familymart</h1>
                </div>
                <StyledMenu>
                    <ul className="nav">
                        {HomeData[0].navtitle.map((title, index) => {
                            return (
                                <li className="nav_item">
                                    <a href="#!" className="nav_link">{title.title}</a>
                                    <div className="menu2">
                                        <div className="title">{title.title}</div>
                                        <div className="navbarhide">
                                            <button className="navbar-hide">
                                                <i className="fas fa-bars"></i>
                                            </button>
                                        </div>
                                        <ul className="extend">
                                            {HomeData[0].navtitle[index].inside.map((item, index) => {
                                                return (
                                                    <li className="extend_item">
                                                        <div className="unfold"></div>
                                                        <Link to="" className="extend_link">{item.item}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </StyledMenu>
            </StyledNavbar>
            <StyledMenu3 ref={openRef} className="open">
                <section className="menu3-container">
                    <button className="close-btn" onClick={handleClick}>
                        <span></span>
                        <span></span>
                    </button>
                      <div className="nav-container">
                        <ul className="nav">
                            <li className="nav_item">
                                <Link to="" className="nav_link">????????????</Link>
                            </li>
                            <li className="nav_item">
                                <Link to="" className="nav_link">????????????</Link>
                            </li>
                            <li className="nav_item">
                                <Link to="" className="nav_link">????????????</Link>
                            </li>
                            <li className="nav_item">
                                <Link to="Mall" className="nav_link">????????????</Link>
                            </li>
                        </ul>
                      {HomeData[0].navtitle.map((title, index) => {
                            return (
                                <div ref={activeRef} className="navbox" onClick={handleActiveClick}>
                                    <div className="nav-title">
                                        <div className="icon-add"><PlusOutlined /></div>
                                        {title.title}
                                    </div>
                                    <div className="nav-content">
                                        {HomeData[0].navtitle[index].inside.map((item, index) => {
                                            return (
                                                <p>{item.item}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </StyledMenu3>
        </StyledHeader>
        <StyledTopbar>
              <div className="container">
                <MenuFoldOutlined className="nav__icon" onClick={handleClick} />
                  
                <ul className="nav">
                    <li className="nav_item">
                        <Link to="" className="nav_link">????????????</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="" className="nav_link">????????????</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="" className="nav_link">????????????</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="Mall" className="nav_link">????????????</Link>
                    </li>
                </ul>
            </div>
        </StyledTopbar>
        <StyledJumbortron>
            <div className="container">
                <OwlCarousel items={1} className="owl-theme" loop autoplay autoplayTimeout={5000} autoplayHoverPause margin={8}>
                    <div className="item">
                        <img alt="" src="assets/img/jum1.jpg"></img>
                    </div>
                    <div className="item">
                        <img alt="" src="assets/img/jum2.jpg"></img>
                    </div>
                    <div className="item">
                        <img alt="" src="assets/img/jum3.jpg"></img>
                    </div>
                    <div className="item">
                        <img alt="" src="assets/img/jum4.jpg"></img>
                    </div>
                    <div className="item">
                        <img alt="" src="assets/img/jum5.jpg"></img>
                    </div>
                    <div className="item">
                        <img alt="" src="assets/img/jum6.jpg"></img>
                    </div>
                    <div className="item">
                        <img alt="" src="assets/img/jum7.jpg"></img>
                    </div>
                    <div className="item">
                        <img alt="" src="assets/img/jum8.jpg"></img>
                    </div>
                </OwlCarousel>
            </div>
        </StyledJumbortron>  
        <StyledService>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <Fade left>
                            <Link to="/">
                                <div className="news_one">
                                    <h2 className="title">????????????</h2>
                                    <div className="image-container2">
                                        <div className="image2 service1 margin10"></div>
                                    </div>
                                </div>
                            </Link>
                        </Fade>
                        <Fade left>
                            <Link to="/">
                                <div className="news_one">
                                    <h2 className="title">????????????</h2>
                                    <div className="image-container2">
                                        <div className="image2 service2"></div>
                                    </div>
                                </div>
                            </Link>
                        </Fade>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Fade left>
                            <Link to="/">
                                <div className="news_one">
                                    <h2 className="title">???????????????</h2>
                                    <div className="image-container2">
                                        <div className="image2 service3"></div>
                                    </div>
                                </div>
                            </Link>
                        </Fade>
                        <Fade left>
                            <Link to="/">
                                <div className="news_one">
                                    <h2 className="title">????????????</h2>
                                    <div className="image-container2">
                                        <div className="image2 service4"></div>
                                    </div>
                                </div>
                            </Link>
                        </Fade>
                    </div>
                    <Fade right>
                        <Tabs>
                            <TabList>
                            <Tab>??????</Tab>
                            <Tab>??????</Tab>
                            </TabList>

                            <TabPanel>
                                <OwlCarousel items={1} className="owl-theme tabs1" loop autoplay autoplayTimeout={5000} autoplayHoverPause>
                                    <div className="item">
                                        <div className="image-container2">
                                            <Link to="/" className="image2 service5">
                                                <div className="des">Q????????????????????????</div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="image-container2">
                                            <Link to="/" className="image2 service6">
                                                <div className="des">Fami ???????????????</div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="image-container2">
                                            <Link to="/" className="image2 service7">
                                                <div className="des">????????????????????????</div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="image-container2">
                                            <Link to="/" className="image2 service8">
                                                <div className="des">17:00 ????????????</div>
                                            </Link>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </TabPanel>
                            <TabPanel>
                            <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={5000} autoplayHoverPause>
                                    <div className="item">
                                        <div className="image-container2">
                                            <Link to="/" className="image2 service9"></Link>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="image-container2">
                                            <Link to="/" className="image2 service10"></Link>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="image-container2">
                                            <Link to="/" className="image2 service11"></Link>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="image-container2">
                                            <Link to="/" className="image2 service12"></Link>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </TabPanel>
                        </Tabs>
                    </Fade>
                </div>
            </div>
        </StyledService>
        <StyledNews>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                            <Fade bottom>
                                <div>
                                    <div className="news_one">
                                        <h2>????????????</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            {HomeData[1].news.map((image, index) => {
                                                return (
                                                    <div className="item">
                                                        <div className="image-container3">
                                                            <div className={image.class}></div>
                                                        </div>
                                                        <h3>{image.name}</h3>
                                                    </div>
                                                )
                                            })}
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Fade bottom>
                            <div>
                                <div className="ones news_one">
                                    <h2>????????????</h2>
                                    <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                        <div className="item">
                                            <div className="image-container3">
                                                <div className="image3 Feature"></div>
                                            </div>
                                            <h3>{HomeData[1].feature[0].name}</h3>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Fade bottom>
                            <div>
                                <div className="ones news_one">
                                    <h2>????????????</h2>
                                    <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                        <div className="item">
                                            <div className="image-container3">
                                                <div className="image3 play"></div>
                                            </div>
                                            <h3>{HomeData[1].play[0].name}</h3>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Fade bottom>
                            <div>
                                <div className="news_one">
                                    <h2>????????????</h2>
                                    <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                        {HomeData[1].activity.map((image, index) => {
                                            return (
                                                <div className="item">
                                                    <div className="image-container3">
                                                        <div className={image.class}></div>
                                                    </div>
                                                    <h3>{image.name}</h3>
                                                </div>
                                            )
                                        })}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Fade bottom>
                            <div>
                                <div className="news_one">
                                    <h2>????????????</h2>
                                    <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                        {HomeData[1].pre.map((image, index) => {
                                            return (
                                                <div className="item">
                                                    <div className="image-container3">
                                                        <div className={image.class}></div>
                                                    </div>
                                                    <h3>{image.name}</h3>
                                                </div>
                                            )
                                        })}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Fade bottom>
                            <div>
                                <div className="news_one">
                                    <h2>??????????????????</h2>
                                    <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                        {HomeData[1].relation.map((image, index) => {
                                            return (
                                                <div className="item">
                                                    <div className="image-container3">
                                                        <div className={image.class}></div>
                                                    </div>
                                                    <h3>{image.name}</h3>
                                                </div>
                                            )
                                        })}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Fade bottom>
                            <div>
                                <div className="ones news_one">
                                    <h2>????????????</h2>
                                    <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                        <div className="item">
                                            <div className="image-container3">
                                                <div className="image3 discount"></div>
                                            </div>
                                            <h3>{HomeData[1].play[0].name}</h3>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Fade bottom>
                            <div>
                                <div className="news_one">
                                    <h2>???????????????</h2>
                                    <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                        {HomeData[1].noticboard.map((image, index) => {
                                            return (
                                                <div className="item">
                                                    <div className="image-container3">
                                                        <div className={image.class}></div>
                                                    </div>
                                                    <h3>{image.name}</h3>
                                                </div>
                                            )
                                        })}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Fade bottom>
                            <div>
                                <div className="news_one">
                                    <h2>??????????????????</h2>
                                    <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                        {HomeData[1].relation.map((image, index) => {
                                            return (
                                                <div className="item">
                                                    <div className="image-container3">
                                                        <div className={image.class}></div>
                                                    </div>
                                                    <h3>{image.name}</h3>
                                                </div>
                                            )
                                        })}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </StyledNews>
        <StyledFooter>
            <div className="container">
                <div className="row">
                    {HomeData[2].fmapp.map((fmapp, index) => {
                        return (
                            <div className="col-lg-5 col-md-4">
                                <div className="space">
                                    <h3 className="title">{fmapp.title}</h3>
                                    <div className="news_two">
                                        <Link to="/" className="fmapp">
                                            <div className="image-container4">
                                                <div className={fmapp.class}></div>
                                            </div>
                                        </Link>
                                        <h3 className="para">??????????????????</h3>
                                        <Link to="/" className="fmapp">
                                            <div className="image-container4">
                                                <div className="image4 app2"></div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {HomeData[2].apps.map((app, index) => {
                        return (
                            <div className="col-lg-55 col-md-55">
                                <div className="news_three">
                                    <Link to="/">
                                        <div className="fmapp">
                                            <div className="image-container4">
                                                <div className={app.class}></div>
                                            </div>
                                        </div>
                                    </Link>
                                    <h5 className="para">{app.title}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="preview">
                    <h2 className="para">
                        FamilyMart ????????????????????????????????????
                        ??????????????? ??????????????????
                    </h2>
                    <h2 className="para">104????????????????????????????????????61???7F  TEL:02-25239588  ???????????? 0800-221-363</h2>
                    <h2 className="para">Copyright&copy;2013FamilyMart All rights reserved.</h2>
                </div>
            </div>
        </StyledFooter>
    </StyledWrapper>
  );
}

export default Home;

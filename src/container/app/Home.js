import React, {useRef, useState} from 'react';
import 'antd/dist/antd.css'
import {
    MenuFoldOutlined,
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

import HomeHeader from '../data/home-header'

function Home() {
    const openRef = useRef(null)
    const left0Ref = useRef(null)
    const handleClick = () => {
        const open = openRef.current;
        open.classList.toggle("is-nav-open")
        const nav__icon = left0Ref.current;
        nav__icon.classList.toggle("left0")
    }
  return (
    <StyledWrapper>
        <StyledHeader>
            <MenuFoldOutlined ref={left0Ref} className="nav__icon" onClick={handleClick} />
            <StyledNavbar ref={openRef} className="open">
                <div className="brand">
                    <h1>familymart</h1>
                </div>
                <StyledMenu>
                    <ul className="nav">
                        <li className="nav_item">
                            <a href="#!" className="nav_link">最新活動</a>
                            <div className="menu2">
                                <div className="title">最新活動</div>
                                <div className="navbarhide">
                                    <button className="navbar-hide">
                                        <i className="fas fa-bars"></i>
                                    </button>
                                </div>
                                <ul className="extend">
                                    {HomeHeader[0].activity.map((item, index) => {
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
                        <li className="nav_item">
                            <a href="#!" className="nav_link">新品情報</a>
                            <div className="menu2">
                                <div className="title">新品情報</div>
                                <div className="navbarhide">
                                    <button className="navbar-hide">
                                        <i className="fas fa-bars"></i>
                                    </button>
                                </div>
                                <ul className="extend">
                                    {HomeHeader[0].newproduct.map((item, index) => {
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
                        <li className="nav_item">
                            <a href="#!" className="nav_link">FamilPort</a>
                            <div className="menu2">
                                <div className="title">FamilPort</div>
                                <div className="navbarhide">
                                    <button className="navbar-hide">
                                        <i className="fas fa-bars"></i>
                                    </button>
                                </div>
                                <ul className="extend">
                                    {HomeHeader[0].familport.map((item, index) => {
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
                        <li className="nav_item">
                            <a href="#!" className="nav_link">便利服務</a>
                            <div className="menu2">
                                <div className="title">便利服務</div>
                                <div className="navbarhide">
                                    <button className="navbar-hide">
                                        <i className="fas fa-bars"></i>
                                    </button>
                                </div>
                                <ul className="extend">
                                    {HomeHeader[0].familport.map((item, index) => {
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
                        <li className="nav_item">
                            <a href="#!" className="nav_link">會員中心</a>
                            <div className="menu2">
                                <div className="title">會員中心</div>
                                <div className="navbarhide">
                                    <button className="navbar-hide">
                                        <i className="fas fa-bars"></i>
                                    </button>
                                </div>
                                <ul className="extend">
                                    {HomeHeader[0].member.map((item, index) => {
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
                        <li className="nav_item">
                            <a href="#!" className="nav_link">全家相關網站</a>
                            <div className="menu2">
                                <div className="title">全家相關網站</div>
                                <div className="navbarhide">
                                    <button className="navbar-hide">
                                        <i className="fas fa-bars"></i>
                                    </button>
                                </div>
                                <ul className="extend">
                                    {HomeHeader[0].websites.map((item, index) => {
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
                        <li className="nav_item">
                            <a href="#!" className="nav_link">各項查詢</a>
                            <div className="menu2">
                                <div className="title">各項查詢</div>
                                <div className="navbarhide">
                                    <button className="navbar-hide">
                                        <i className="fas fa-bars"></i>
                                    </button>
                                </div>
                                <ul className="extend">
                                    {HomeHeader[0].search.map((item, index) => {
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
                    </ul>
                </StyledMenu>
                <StyledMenu3>
                        <button className="close-btn">
                            <span></span>
                            <span></span>
                        </button>
                        <section className="menu3-container">
                            <div className="nav-container">
                                <div className="nav-box">
                                    <div className="nav-title"><div className="icon-add"></div>最新活動</div>
                                    <div className="nav-content">
                                        {HomeHeader[0].activity.map((item, index) => {
                                            return (
                                                <p>{item.item}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="nav-box">
                                    <div className="nav-title"><div className="icon-add"></div>新品情報</div>
                                    <div className="nav-content">
                                        {HomeHeader[0].newproduct.map((item, index) => {
                                            return (
                                                <p>{item.item}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="nav-box">
                                    <div className="nav-title"><div className="icon-add"></div>FamilPort</div>
                                    <div className="nav-content">
                                        {HomeHeader[0].familport.map((item, index) => {
                                            return (
                                                <p>{item.item}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="nav-box">
                                    <div className="nav-title"><div className="icon-add"></div>便利服務</div>
                                    <div className="nav-content">
                                        {HomeHeader[0].convenient.map((item, index) => {
                                            return (
                                                <p>{item.item}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="nav-box">
                                    <div className="nav-title"><div className="icon-add"></div>會員中心</div>
                                    <div className="nav-content">
                                        {HomeHeader[0].member.map((item, index) => {
                                            return (
                                                <p>{item.item}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="nav-box">
                                    <div className="nav-title"><div className="icon-add"></div>全家相關網站</div>
                                    <div className="nav-content">
                                        {HomeHeader[0].websites.map((item, index) => {
                                            return (
                                                <p>{item.item}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="nav-box">
                                    <div className="nav-title"><div className="icon-add"></div>各項查詢</div>
                                    <div className="nav-content">
                                        {HomeHeader[0].search.map((item, index) => {
                                            return (
                                                <p>{item.item}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </StyledMenu3>
            </StyledNavbar>
        
        </StyledHeader>
        <StyledTopbar>
            <div className="container">
                <Link to="/" className="brand">
                    <h1>familymall</h1>
                </Link>
                <ul className="nav">
                    <li className="nav_item">
                        <Link to="" className="nav_link">企業網站</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="" className="nav_link">加盟網站</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="" className="nav_link">人氣資源</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="Mall" className="nav_link">全家商場</Link>
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
                    <div className="col-lg-3 col-md-6">
                        <Fade left>
                            <Link to="/">
                                <div className="news_one">
                                    <h2 className="title">店鋪查詢</h2>
                                    <div className="image-container2">
                                        <div className="image2 service1 margin10"></div>
                                    </div>
                                </div>
                            </Link>
                        </Fade>
                        <Fade left>
                            <Link to="/">
                                <div className="news_one">
                                    <h2 className="title">代收查詢</h2>
                                    <div className="image-container2">
                                        <div className="image2 service2"></div>
                                    </div>
                                </div>
                            </Link>
                        </Fade>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Fade left>
                            <Link to="/">
                                <div className="news_one">
                                    <h2 className="title">全家店到店</h2>
                                    <div className="image-container2">
                                        <div className="image2 service3"></div>
                                    </div>
                                </div>
                            </Link>
                        </Fade>
                        <Fade left>
                            <Link to="/">
                                <div className="news_one">
                                    <h2 className="title">宅配服務</h2>
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
                            <Tab>影片</Tab>
                            <Tab>圖片</Tab>
                            </TabList>

                            <TabPanel>
                                <OwlCarousel items={1} className="owl-theme tabs1" loop autoplay autoplayTimeout={5000} autoplayHoverPause>
                                    <div className="item">
                                        <div className="image-container2">
                                            <Link to="/" className="image2 service5">
                                                <div className="des">Q彈多汁高優質蛋白</div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="image-container2">
                                            <Link to="/" className="image2 service6">
                                                <div className="des">Fami 隨買跨店取</div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="image-container2">
                                            <Link to="/" className="image2 service7">
                                                <div className="des">為何她如此受歡迎</div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="image-container2">
                                            <Link to="/" className="image2 service8">
                                                <div className="des">17:00 友善時光</div>
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
                    <div className="col-lg-4">
                        <div className="space">
                            <Fade bottom>
                                <div>
                                    <div className="news_one">
                                        <h2>新品上市</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            {HomeHeader[1].news.map((image, index) => {
                                                return (
                                                    <div className="item">
                                                        <div className="image-container3">
                                                            <div className={image.id}></div>
                                                        </div>
                                                        <h3>{image.name}</h3>
                                                    </div>
                                                )
                                            })}
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div className="ones news_one">
                                        <h2>特色商品</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            <div className="item">
                                                <div className="image-container3">
                                                    <div className="image3 Feature"></div>
                                                </div>
                                                <h3>{HomeHeader[1].feature[0].name}</h3>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div className="ones news_one">
                                        <h2>玩樂生活</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            <div className="item">
                                                <div className="image-container3">
                                                    <div className="image3 play"></div>
                                                </div>
                                                <h3>{HomeHeader[1].play[0].name}</h3>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="space">
                            <Fade bottom>
                                <div>
                                    <div className="news_one">
                                        <h2>熱門活動</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            {HomeHeader[1].activity.map((image, index) => {
                                                return (
                                                    <div className="item">
                                                        <div className="image-container3">
                                                            <div className={image.id}></div>
                                                        </div>
                                                        <h3>{image.name}</h3>
                                                    </div>
                                                )
                                            })}
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div className="news_one">
                                        <h2>預購精選</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            {HomeHeader[1].pre.map((image, index) => {
                                                return (
                                                    <div className="item">
                                                        <div className="image-container3">
                                                            <div className={image.id}></div>
                                                        </div>
                                                        <h3>{image.name}</h3>
                                                    </div>
                                                )
                                            })}
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div className="news_one">
                                        <h2>生活關係企業</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            {HomeHeader[1].relation.map((image, index) => {
                                                return (
                                                    <div className="item">
                                                        <div className="image-container3">
                                                            <div className={image.id}></div>
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
                    <div className="col-lg-4">
                        <div className="space">
                            <Fade bottom>
                                <div>
                                    <div className="ones news_one">
                                        <h2>支付優惠</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            <div className="item">
                                                <div className="image-container3">
                                                    <div className="image3 discount"></div>
                                                </div>
                                                <h3>{HomeHeader[1].play[0].name}</h3>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div className="news_one">
                                        <h2>全家告示牌</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            {HomeHeader[1].noticboard.map((image, index) => {
                                                return (
                                                    <div className="item">
                                                        <div className="image-container3">
                                                            <div className={image.id}></div>
                                                        </div>
                                                        <h3>{image.name}</h3>
                                                    </div>
                                                )
                                            })}
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div className="news_one">
                                        <h2>生活關係企業</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            {HomeHeader[1].relation.map((image, index) => {
                                                return (
                                                    <div className="item">
                                                        <div className="image-container3">
                                                            <div className={image.id}></div>
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
            </div>
        </StyledNews>
        <StyledFooter>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-4">
                        <div className="space">
                            <h3 className="title">{HomeHeader[2].fmapp[0].title}</h3>
                            <div className="news_two">
                                <Link to="/" className="fmapp">
                                    <div className="image-container4">
                                        <div className="image4 app1"></div>
                                    </div>
                                </Link>
                                <h3 className="para">{HomeHeader[2].fmapp[3].title}</h3>
                                <Link to="/" className="fmapp">
                                    <div className="image-container4">
                                        <div className="image4 app2"></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-4">
                        <div className="space">
                            <h3 className="title">{HomeHeader[2].fmapp[0].title}</h3>
                            <div className="news_two">
                                <Link to="/" className="fmapp">
                                    <div className="image-container4">
                                        <div className="image4 app3"></div>
                                    </div>
                                </Link>
                                <h3 className="para">{HomeHeader[2].fmapp[3].title}</h3>
                                <Link to="/" className="fmapp">
                                    <div className="image-container4">
                                        <div className="image4 app4"></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-4">
                        <div className="space">
                            <h3 className="title">{HomeHeader[2].fmapp[0].title}</h3>
                            <div className="news_two">
                                <Link to="/" className="fmapp">
                                    <div className="image-container4">
                                        <div className="image4 line1"></div>
                                    </div>
                                </Link>
                                <h3 className="para">{HomeHeader[2].fmapp[3].title}</h3>
                                <Link to="/" className="fmapp">
                                    <div className="image-container4">
                                        <div className="image4 line2"></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-55 col-md-55">
                        <div className="news_three">
                            <Link to="/">
                                <div className="fmapp">
                                    <div className="image-container4">
                                        <div className="image4 fans1"></div>
                                    </div>
                                </div>
                            </Link>
                            <h5 className="para">全家FmailyMart粉絲團</h5>
                        </div>
                    </div>
                    <div className="col-lg-55 col-md-55">
                        <div className="news_three">
                            <Link to="/">
                                <div className="fmapp">
                                    <div className="image-container4">
                                        <div className="image4 fans2"></div>
                                    </div>
                                </div>
                            </Link>
                            <h5 className="para">全家在這裡粉絲團</h5>
                        </div>
                    </div>
                    <div className="col-lg-55 col-md-55">
                        <div className="news_three">
                            <Link to="/">
                                <div className="fmapp">
                                    <div className="image-container4">
                                        <div className="image4 youtube"></div>
                                    </div>
                                </div>
                            </Link>
                            <h5 className="para">FamiChannel專區</h5>
                        </div>
                    </div>
                    <div className="col-lg-55 col-md-55">
                        <div className="news_three">
                            <Link to="/">
                                <div className="fmapp">
                                    <div className="image-container4">
                                        <div className="image4 famiclub"></div>
                                    </div>
                                </div>
                            </Link>
                            <h5 className="para">FamiClub</h5>
                        </div>
                    </div>
                    <div className="col-lg-55 col-md-55">
                        <div className="news_three">
                            <Link to="/">
                                <div className="fmapp">
                                    <div className="image-container4">
                                        <div className="image4 fmih"></div>
                                    </div>
                                </div>
                            </Link>
                            <h5 className="para">全家在這裡部落格</h5>
                        </div>
                    </div>
                    <div className="col-lg-55 col-md-55">
                        <div className="news_three">
                            <Link to="/">
                                <div className="fmapp">
                                    <div className="image-container4">
                                        <div className="image4 wifi"></div>
                                    </div>
                                </div>
                            </Link>
                            <h5 className="para">FamiWifi</h5>
                        </div>
                    </div>
                    <div className="col-lg-55 col-md-55">
                        <div className="news_three">
                            <Link to="/">
                                <div className="fmapp">
                                    <div className="image-container4">
                                        <div className="image4 ins"></div>
                                    </div>
                                </div>
                            </Link>
                            <h5 className="para">FamilyMart Instagram</h5>
                        </div>
                    </div>
                </div>
                <div className="preview">
                    <h2 className="para">
                        FamilyMart 全家便利商店股份有限公司
                        隱私權聲明 個資告知事項
                    </h2>
                    <h2 className="para">104台北市中山區中山北路二段61號7F  TEL:02-25239588  客服電話 0800-221-363</h2>
                    <h2 className="para">Copyright&copy;2013FamilyMart All rights reserved.</h2>
                </div>
            </div>
        </StyledFooter>
    </StyledWrapper>
  );
}

export default Home;
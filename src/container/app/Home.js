import React, {useRef} from 'react';
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
import Fade from 'react-reveal'

// function Index() {
//     return (
//         <React.Fragment>
//             <div class="title">123456</div>
//         </React.Fragment>
//     )
// }

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
            {/* <div class="navbarhide nav__icon" onClick={handleClick}>
                <button class="navbar-hide">
                    <i class="fas fa-bars"></i>
                </button>
            </div> */}
            <MenuFoldOutlined ref={left0Ref} className="nav__icon" onClick={handleClick} />
            <StyledNavbar ref={openRef} className="open">
                <div class="brand">
                    <h1>familymart</h1>
                </div>                
                {/* <div class="navbarhide nav__icon" onClick={handleClick}>
                    <button class="navbar-hide">
                        <i class="fas fa-bars"></i>
                    </button>
                </div> */}
                <StyledMenu>
                    <ul class="nav">
                        <li class="nav_item">
                            <a href="#!" class="nav_link">最新活動</a>
                            <div class="menu2">
                                <div class="title">
                                    最新活動
                                </div>
                                <div class="navbarhide">
                                    <button class="navbar-hide">
                                        <i class="fas fa-bars"></i>
                                    </button>
                                </div>
                                <ul class="extend">
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">隨買預約取 新上線</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">感謝每個守護城市的你</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">屯京拉麵</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">冰馥郁金萱水果茶</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">山形西洋梨霜淇淋</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">食在近安心</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">優遊付消費滿百折10元</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">極鬆餅 極致蓬鬆~</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">更多活動</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav_item">
                            <a href="#!" class="nav_link">新品情報</a>
                            <div class="menu2">
                                <div class="title">
                                    新品情報
                                </div>
                                <div class="navbarhide">
                                    <button class="navbar-hide">
                                        <i class="fas fa-bars"></i>
                                    </button>
                                </div>
                                <ul class="extend">
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">上市新品</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">Let's Cafe</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">最愛吃的在全家</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">FamilyMart collection</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav_item">
                            <a href="#!" class="nav_link">FamilPort</a>
                            <div class="menu2">
                                <div class="title">
                                    FamilPort
                                </div>
                                <div class="navbarhide">
                                    <button class="navbar-hide">
                                        <i class="fas fa-bars"></i>
                                    </button>
                                </div>
                                <ul class="extend">
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">FamilPort介紹</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">紅利</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">票券</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">儲值</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">繳費</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">服務寄件</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">預購</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">會員</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">列印查詢</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">購票</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav_item">
                            <a href="#!" class="nav_link">便利服務</a>
                            <div class="menu2">
                                <div class="title">
                                    便利服務
                                </div>
                                <div class="navbarhide">
                                    <button class="navbar-hide">
                                        <i class="fas fa-bars"></i>
                                    </button>
                                </div>
                                <ul class="extend">
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">全家電到店</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">國際快遞</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">代收與查詢</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">WIFI</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">潔一家</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">傳真影印/雲端列印</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">相片立可得</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">ATM</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">交通票卡與電子錢包</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">回收手機電池筆電</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">中獎發票</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">電子發票</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">全家禮券</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">全家禮物卡</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">特殊店寄杯卡</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav_item">
                            <a href="#!" class="nav_link">會員中心</a>
                            <div class="menu2">
                                <div class="title">
                                    會員中心
                                </div>
                                <div class="navbarhide">
                                    <button class="navbar-hide">
                                        <i class="fas fa-bars"></i>
                                    </button>
                                </div>
                                <ul class="extend">
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">會員中心</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">全家集點介紹</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">全家集點權益告知</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">會員服務</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">會員常見問題</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">會員隱私條款</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">會員問題反映申請書</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">會員載具綁定、管理</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav_item">
                            <a href="#!" class="nav_link">全家相關網站</a>
                            <div class="menu2">
                                <div class="title">
                                    全家相關網站
                                </div>
                                <div class="navbarhide">
                                    <button class="navbar-hide">
                                        <i class="fas fa-bars"></i>
                                    </button>
                                </div>
                                <ul class="extend">
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">全家企業往</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">全家人力網</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">全家加盟網</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">全家商場網</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">全家企業社會責任</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav_item">
                            <a href="#!" class="nav_link">各項查詢</a>
                            <div class="menu2">
                                <div class="title">
                                    各項查詢
                                </div>
                                <div class="navbarhide">
                                    <button class="navbar-hide">
                                        <i class="fas fa-bars"></i>
                                    </button>
                                </div>
                                <ul class="extend">
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">店鋪查詢</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">店到店寄件查詢</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">宅配通寄件查詢</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">代收繳費查詢</a>
                                    </li>
                                    <li class="extend_item">
                                        <div class="unfold"></div>
                                        <a href="#!" class="extend_link">得獎名單查詢</a>
                                    </li>
                                </ul>
                            </div>
                        </li>                        
                    </ul>
                </StyledMenu>
                <StyledMenu3>
                        <button class="close-btn">
                            <span></span>
                            <span></span>
                        </button>
                        <section class="menu3-container">
                            <div class="nav-container">
                                <div class="nav-box">
                                    <div class="nav-title"><div class="icon-add"></div>最新活動</div>
                                    <div class="nav-content">
                                        <p>隨買預約取 新上線</p>
                                        <p>感謝每個守護城市的你</p>
                                        <p>屯京拉麵</p>
                                        <p>冰馥郁金萱水果茶</p>
                                        <p>山形西洋梨霜淇淋</p>
                                        <p>食在近安心</p>
                                        <p>優遊付消費滿百折10元</p>
                                        <p>極鬆餅 極致蓬鬆~</p>
                                        <p>更多活動</p>
                                    </div>
                                </div>
                                <div class="nav-box">
                                    <div class="nav-title"><div class="icon-add"></div>新品情報</div>
                                    <div class="nav-content">
                                        <p>上市新品</p>
                                        <p>Let's Cafe</p>
                                        <p>最愛吃的在全家</p>
                                        <p>FamilyMart Collection</p>
                                    </div>
                                </div>
                                <div class="nav-box">
                                    <div class="nav-title"><div class="icon-add"></div>FamilPort</div>
                                    <div class="nav-content">
                                        <p>FamilPort介紹</p>
                                        <p>紅利</p>
                                        <p>票券</p>
                                        <p>儲值</p>
                                        <p>繳費</p>
                                        <p>服務寄件</p>
                                        <p>預購</p>
                                        <p>會員</p>
                                        <p>列印查詢</p>
                                        <p>購票</p>
                                    </div>
                                </div>
                                <div class="nav-box">
                                    <div class="nav-title"><div class="icon-add"></div>便利服務</div>
                                    <div class="nav-content">
                                        <p>全家店到店</p>
                                        <p>國際快遞</p>
                                        <p>代收與查詢</p>
                                        <p>WIFI</p>
                                        <p>潔一家</p>
                                        <p>傳真影印/雲端列印</p>
                                        <p>相片立可得</p>
                                        <p>ATM</p>
                                        <p>交通票卡與電子錢包</p>
                                        <p>回收收機電池筆電</p>
                                        <p>中獎發票</p>
                                        <p>電子發票</p>
                                        <p>全家禮券</p>
                                        <p>全家禮物卡</p>
                                        <p>特殊店記杯卡</p>
                                    </div>
                                </div>
                                <div class="nav-box">
                                    <div class="nav-title"><div class="icon-add"></div>會員中心</div>
                                    <div class="nav-content">
                                        <p>會員中心</p>
                                        <p>全家集點介紹</p>
                                        <p>全家集點權益告知</p>
                                        <p>會員服務</p>
                                        <p>會員常見問題</p>
                                        <p>會員隱私條款</p>
                                        <p>會員問題反映申請書</p>
                                        <p>會員載具綁定、管理</p>
                                    </div>
                                </div>
                                <div class="nav-box">
                                    <div class="nav-title"><div class="icon-add"></div>全家相關網站</div>
                                    <div class="nav-content">
                                        <p>全家企業網</p>
                                        <p>全家人力網</p>
                                        <p>全家加盟網</p>
                                        <p>全家商場網</p>
                                        <p>全家企業社會責任</p>
                                    </div>
                                </div>
                                <div class="nav-box">
                                    <div class="nav-title"><div class="icon-add"></div>各項查詢</div>
                                    <div class="nav-content">
                                        <p>店鋪查詢</p>
                                        <p>店到店寄件查詢</p>
                                        <p>宅配通寄件查詢</p>
                                        <p>代收繳費查詢</p>
                                        <p>得獎名單查詢</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </StyledMenu3>
            </StyledNavbar>
        
        </StyledHeader>
        <StyledTopbar>
            <div class="container">
                <Link to="/" class="brand">
                    <h1>familymall</h1>
                </Link>
                <ul class="nav">
                    <li class="nav_item">
                        <Link to="" class="nav_link">企業網站</Link>
                    </li>
                    <li class="nav_item">
                        <Link to="" class="nav_link">加盟網站</Link>
                    </li>
                    <li class="nav_item">
                        <Link to="" class="nav_link">人氣資源</Link>
                    </li>
                    <li class="nav_item">
                        <Link to="Mall" class="nav_link">全家商場</Link>
                    </li>
                </ul>
            </div>
        </StyledTopbar>
        <StyledJumbortron>
            <div class="container">
                <OwlCarousel items={1} className="owl-theme" loop autoplay autoplayTimeout={5000} autoplayHoverPause margin={8}>
                    <div class="item">
                        <img alt="" src="assets/img/jum1.jpg"></img>
                    </div>
                    <div class="item">
                        <img alt="" src="assets/img/jum2.jpg"></img>
                    </div>
                    <div class="item">
                        <img alt="" src="assets/img/jum3.jpg"></img>
                    </div>
                    <div class="item">
                        <img alt="" src="assets/img/jum4.jpg"></img>
                    </div>
                    <div class="item">
                        <img alt="" src="assets/img/jum5.jpg"></img>
                    </div>
                    <div class="item">
                        <img alt="" src="assets/img/jum6.jpg"></img>
                    </div>
                    <div class="item">
                        <img alt="" src="assets/img/jum7.jpg"></img>
                    </div>
                    <div class="item">
                        <img alt="" src="assets/img/jum8.jpg"></img>
                    </div>
                </OwlCarousel>
            </div>
        </StyledJumbortron>  
        <StyledService>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <Fade left>
                            <Link to="/">
                                <div class="news_one">
                                    <h2 class="title">店鋪查詢</h2>
                                    <div class="image-container2">
                                        <div class="image2 service1 margin10"></div>
                                    </div>
                                </div>
                            </Link>
                        </Fade>
                        <Fade left>
                            <Link to="/">
                                <div class="news_one">
                                    <h2 class="title">代收查詢</h2>
                                    <div class="image-container2">
                                        <div class="image2 service2"></div>
                                    </div>
                                </div>
                            </Link>
                        </Fade>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <Fade left>
                            <Link to="/">
                                <div class="news_one">
                                    <h2 class="title">全家店到店</h2>
                                    <div class="image-container2">
                                        <div class="image2 service3"></div>
                                    </div>
                                </div>
                            </Link>
                        </Fade>
                        <Fade left>
                            <Link to="/">
                                <div class="news_one">
                                    <h2 class="title">宅配服務</h2>
                                    <div class="image-container2">
                                        <div class="image2 service4"></div>
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
                                {/* <div class="image-container2">
                                    <Link to="/" class="image2 service5"></Link>
                                </div> */}
                                <OwlCarousel items={1} className="owl-theme tabs1" loop autoplay autoplayTimeout={5000} autoplayHoverPause>
                                    <div class="item">
                                        <div class="image-container2">
                                            <Link to="/" class="image2 service5">
                                                <div class="des">Q彈多汁高優質蛋白</div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="image-container2">
                                            <Link to="/" class="image2 service6">
                                                <div class="des">Fami 隨買跨店取</div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="image-container2">
                                            <Link to="/" class="image2 service7">
                                                <div class="des">為何她如此受歡迎</div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="image-container2">
                                            <Link to="/" class="image2 service8">
                                                <div class="des">17:00 友善時光</div>
                                            </Link>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </TabPanel>
                            <TabPanel>
                            <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={5000} autoplayHoverPause>
                                    <div class="item">
                                        <div class="image-container2">
                                            <Link to="/" class="image2 service9"></Link>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="image-container2">
                                            <Link to="/" class="image2 service10"></Link>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="image-container2">
                                            <Link to="/" class="image2 service11"></Link>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="image-container2">
                                            <Link to="/" class="image2 service12"></Link>
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
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="space">
                            <Fade bottom>
                                <div>
                                    <div class="news_one">
                                        <h2>新品上市</h2>
                                            <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                                <div class="item">
                                                    <div class="image-container3">
                                                        <div class="image3 np1"></div>
                                                    </div>
                                                    <h3>昆布茶泡鰻魚烤飯</h3>
                                                </div>
                                                <div class="item">
                                                    <div class="image-container3">
                                                        <div class="image3 np2"></div>
                                                    </div>
                                                    <h3>蠔油鮑菇脆筍飯糰(素)</h3>
                                                </div>
                                                <div class="item">
                                                    <div class="image-container3">
                                                        <div class="image3 np3"></div>
                                                    </div>
                                                    <h3>奶油白醬雙拼焗飯</h3>
                                                </div>
                                                <div class="item">
                                                    <div class="image-container3">
                                                        <div class="image3 np4"></div>
                                                    </div>
                                                    <h3>培根起司厚蛋堡</h3>
                                                </div>
                                            </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div class="ones news_one">
                                        <h2>特色商品</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 Feature"></div>
                                                </div>
                                                <h3>全館滿$399up免運</h3>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div class="ones news_one">
                                        <h2>玩樂生活</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 play"></div>
                                                </div>
                                                <h3>teamLab未來遊樂園...</h3>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="space">
                            <Fade bottom>
                                <div>
                                    <div class="news_one">
                                        <h2>熱門活動</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 activity1"></div>
                                                </div>
                                                <h3>購物跨店取快閃優惠</h3>
                                            </div>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 activity2"></div>
                                                </div>
                                                <h3>全家禮物卡</h3>
                                            </div>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 activity3"></div>
                                                </div>
                                                <h3>繳代收來全家</h3>
                                            </div>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 activity4"></div>
                                                </div>
                                                <h3>週二減糖日</h3>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div class="news_one">
                                        <h2>預購精選</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 pre1"></div>
                                                </div>
                                                <h3>雙廚合作 跨界聯名</h3>
                                            </div>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 pre2"></div>
                                                </div>
                                                <h3>戰地美食</h3>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div class="news_one">
                                        <h2>生活關係企業</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 relation1"></div>
                                                </div>
                                                <h3>迎下加價購</h3>
                                            </div>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 relation2"></div>
                                                </div>
                                                <h3>享聚卡 會員兌換活動</h3>
                                            </div>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 relation3"></div>
                                                </div>
                                                <h3>福比麵包</h3>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="space">
                            <Fade bottom>
                                <div>
                                    <div class="ones news_one">
                                        <h2>支付優惠</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 discount"></div>
                                                </div>
                                                <h3>使用支付工具拿多項優惠</h3>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div class="news_one">
                                        <h2>全家告示牌</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 Noticeboard1"></div>
                                                </div>
                                                <h3>全家Clean Label</h3>
                                            </div>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 Noticeboard2"></div>
                                                </div>
                                                <h3>一塊攜手同行</h3>
                                            </div>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 Noticeboard3"></div>
                                                </div>
                                                <h3>謠言澄清</h3>
                                            </div>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 Noticeboard4"></div>
                                                </div>
                                                <h3>隨買跨店取</h3>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div>
                                    <div class="news_one">
                                        <h2>生活關係企業</h2>
                                        <OwlCarousel items={1} className="owl-theme tabs2" loop autoplay autoplayTimeout={3000} autoplayHoverPause>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 relation1"></div>
                                                </div>
                                                <h3>迎下加價購</h3>
                                            </div>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 relation2"></div>
                                                </div>
                                                <h3>享聚卡 會員兌換活動</h3>
                                            </div>
                                            <div class="item">
                                                <div class="image-container3">
                                                    <div class="image3 relation3"></div>
                                                </div>
                                                <h3>福比麵包</h3>
                                            </div>
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
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-4">
                        <div class="space">
                            <h3 class="title">全家FamilyMart APP</h3>
                            <div class="news_two">
                                <Link to="/" class="fmapp">
                                    <div class="image-container4">
                                        <div class="image4 app1"></div>
                                    </div>
                                </Link>
                                <h3 class="para">掃碼立即下載</h3>
                                <Link to="/" class="fmapp">
                                    <div class="image-container4">
                                        <div class="image4 app2"></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-4">
                        <div class="space">
                            <h3 class="title">My FamilPort APP</h3>
                            <div class="news_two">
                                <Link to="/" class="fmapp">
                                    <div class="image-container4">
                                        <div class="image4 app3"></div>
                                    </div>
                                </Link>
                                <h3 class="para">掃碼立即下載</h3>
                                <Link to="/" class="fmapp">
                                    <div class="image-container4">
                                        <div class="image4 app4"></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-4">
                        <div class="space">
                            <h3 class="title">全家LINE官方帳號</h3>
                            <div class="news_two">
                                <Link to="/" class="fmapp">
                                    <div class="image-container4">
                                        <div class="image4 line1"></div>
                                    </div>
                                </Link>
                                <h3 class="para">掃碼立即下載</h3>
                                <Link to="/" class="fmapp">
                                    <div class="image-container4">
                                        <div class="image4 line2"></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-55 col-md-55">
                        <div class="news_three">
                            <Link to="/">
                                <div class="fmapp">
                                    <div class="image-container4">
                                        <div class="image4 fans1"></div>
                                    </div>
                                </div>
                            </Link>
                            <h5 class="para">全家FmailyMart粉絲團</h5>
                        </div>
                    </div>
                    <div class="col-lg-55 col-md-55">
                        <div class="news_three">
                            <Link to="/">
                                <div class="fmapp">
                                    <div class="image-container4">
                                        <div class="image4 fans2"></div>
                                    </div>
                                </div>
                            </Link>
                            <h5 class="para">全家在這裡粉絲團</h5>
                        </div>
                    </div>
                    <div class="col-lg-55 col-md-55">
                        <div class="news_three">
                            <Link to="/">
                                <div class="fmapp">
                                    <div class="image-container4">
                                        <div class="image4 youtube"></div>
                                    </div>
                                </div>
                            </Link>
                            <h5 class="para">FamiChannel專區</h5>
                        </div>
                    </div>
                    <div class="col-lg-55 col-md-55">
                        <div class="news_three">
                            <Link to="/">
                                <div class="fmapp">
                                    <div class="image-container4">
                                        <div class="image4 famiclub"></div>
                                    </div>
                                </div>
                            </Link>
                            <h5 class="para">FamiClub</h5>
                        </div>
                    </div>
                    <div class="col-lg-55 col-md-55">
                        <div class="news_three">
                            <Link to="/">
                                <div class="fmapp">
                                    <div class="image-container4">
                                        <div class="image4 fmih"></div>
                                    </div>
                                </div>
                            </Link>
                            <h5 class="para">全家在這裡部落格</h5>
                        </div>
                    </div>
                    <div class="col-lg-55 col-md-55">
                        <div class="news_three">
                            <Link to="/">
                                <div class="fmapp">
                                    <div class="image-container4">
                                        <div class="image4 wifi"></div>
                                    </div>
                                </div>
                            </Link>
                            <h5 class="para">FamiWifi</h5>
                        </div>
                    </div>
                    <div class="col-lg-55 col-md-55">
                        <div class="news_three">
                            <Link to="/">
                                <div class="fmapp">
                                    <div class="image-container4">
                                        <div class="image4 ins"></div>
                                    </div>
                                </div>
                            </Link>
                            <h5 class="para">FamilyMart Instagram</h5>
                        </div>
                    </div>
                </div>
                <div class="preview">
                    <h2 class="para">
                        FamilyMart 全家便利商店股份有限公司
                        隱私權聲明 個資告知事項
                    </h2>
                    <h2 class="para">104台北市中山區中山北路二段61號7F  TEL:02-25239588  客服電話 0800-221-363</h2>
                    <h2 class="para">Copyright&copy;2013FamilyMart All rights reserved.</h2>
                </div>
            </div>
        </StyledFooter>
    </StyledWrapper>
  );
}

export default Home;

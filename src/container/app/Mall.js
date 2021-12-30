import React from 'react'
import 'antd/dist/antd.css'
import {
    Menu,
} from 'antd'
import {
    ShoppingCartOutlined,
    HeartOutlined,
} from '@ant-design/icons'
import {
    StyledWrapper,
    StyledTopbar,
    StyledMall,
    StyledFooter
} from './mallStyled.js'
import {
    Link,
} from 'react-router-dom'



function Mall() {
    return (
        <StyledWrapper>
            <StyledTopbar>
                <div class="container">
                    <Link to="/" class="brand">
                        <h1>familymall</h1>
                    </Link>
                    <ul class="nav">
                        <li class="nav_item">
                            <Link to="" class="nav_link">最新商品</Link>
                        </li>
                        <li class="nav_item">
                            <Link to="" class="nav_link">熱銷排行</Link>
                        </li>
                        <li class="nav_item">
                            <Link to="" class="nav_link">折扣活動</Link>
                        </li>
                        <li class="nav_item">
                            <Link to="" class="nav_link">活動資訊</Link>
                        </li>
                        <li class="nav_item">
                            <Link to="">
                                <ShoppingCartOutlined className="nav__icon"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </StyledTopbar>
            <StyledMall>
                <div class="container2">
                    <div class="nav_crumb_list">
                        <Link to="" class="ncl_item">首頁 ></Link>
                        <Link to="" class="ncl_item">抗菌大作戰 健康疫起來</Link>
                    </div>
                    <div class="slider-container">
                        <Sider />
                    </div>
                    <div class="news news-mall">
                        <ul class="classification">
                            <li class="cf_item">
                                <Link to="" class="cf_link">試試樂 濕紙巾</Link>
                            </li>
                            <li class="cf_item">
                                <Link to="" class="cf_link">試試樂 純水 濕紙巾</Link>
                            </li>
                            <li class="cf_item">
                                <Link to="" class="cf_link">加厚 濕紙巾</Link>
                            </li>
                            <li class="cf_item">
                                <Link to="" class="cf_link">無酒精 濕紙巾</Link>
                            </li>
                            <li class="cf_item">
                                <Link to="" class="cf_link">除氯 濾心</Link>
                            </li>
                            <li class="cf_item">
                                <Link to="" class="cf_link">摺疊 口罩收納袋</Link>
                            </li>
                            <li class="cf_item">
                                <Link to="" class="cf_link">奈米銀 殺菌</Link>
                            </li>
                            <li class="cf_item">
                                <Link to="" class="cf_link">weicker 濕紙巾</Link>
                            </li>
                            <li class="cf_item">
                                <Link to="" class="cf_link">日本 無添加</Link>
                            </li>
                            <li class="cf_item">
                                <Link to="" class="cf_link">銀離子 抗菌噴霧</Link>
                            </li>
                        </ul>
                        <div class="row">
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP1.jpg' />
                                                    <div class="para">
                                                        <h4>110/6/18起陸續出貨【HELLO KITTY】酒精抗菌柔濕巾20抽12入</h4>
                                                        <h5>NT$459</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$300</div>
                                                        </div>
                                                        <HeartOutlined />
                                                        <ShoppingCartOutlined />
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP2.jpg' />
                                                    <div class="image-container3">
                                                        <Link to="" class="image3"></Link>
                                                    </div>
                                                    <div class="para">
                                                        <h4>【御衣坊】居家清潔消毒液600ml，12瓶</h4>
                                                        <h5>NT$990</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$660</div>
                                                        </div>
                                                        <HeartOutlined />
                                                        <ShoppingCartOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP3.jpg' />
                                                    <div class="image-container3">
                                                        <Link to="" class="image3"></Link>
                                                    </div>
                                                    <div class="para">
                                                        <h4>【皇家克洛】迷你隨身霧化消毒噴霧機E802-1(兩款、四色隨機出貨)</h4>
                                                        <h5>NT$369</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$199</div>
                                                        </div>
                                                        <HeartOutlined />
                                                        <ShoppingCartOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP4.jpg' />
                                                    <div class="image-container3">
                                                        <Link to="" class="image3"></Link>
                                                    </div>
                                                    <div class="para">
                                                        <h4>【Prosi普洛斯】抗菌乾洗手凝膠(茶樹添加)120mlx10入</h4>
                                                        <h5>NT$1,450</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$600</div>
                                                        </div>
                                                        <HeartOutlined />
                                                        <ShoppingCartOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP5.jpg' />
                                                    <div class="image-container3">
                                                        <Link to="" class="image3"></Link>
                                                    </div>
                                                    <div class="para">
                                                        <h4>HELLO KITTY口罩掛繩20入</h4>
                                                        <h5>NT$1,170</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$780</div>
                                                        </div>
                                                        <button class="heart" onClick={this.handleClick}>
                                                            {this.state.isToggleOn ? 'ON' : 'OFF'}
                                                        </button>
                                                        <ShoppingCartOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP6.jpg' />
                                                    <div class="image-container3">
                                                        <Link to="" class="image3"></Link>
                                                    </div>
                                                    <div class="para">
                                                        <h4>【原萃】優質抽取式衛生紙100抽x10包x7串+漾抽取式衛生紙90抽x5包/串</h4>
                                                        <h5>NT$989</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$599</div>
                                                        </div>
                                                        <HeartOutlined />
                                                        <ShoppingCartOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP7.jpg' />
                                                    <div class="image-container3">
                                                        <Link to="" class="image3"></Link>
                                                    </div>
                                                    <div class="para">
                                                        <h4>【JoJoGo】【防疫神器】隨身消毒液矽膠手環白色/一組/(附尖嘴補充瓶)</h4>
                                                        <h5>NT$299</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$99</div>
                                                        </div>
                                                        <HeartOutlined />
                                                        <ShoppingCartOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP8.jpg' />
                                                    <div class="image-container3">
                                                        <Link to="" class="image3"></Link>
                                                    </div>
                                                    <div class="para">
                                                        <h4>【JoJoGo】【防疫神器】隨身消毒液矽膠手環粉色/一組/(附尖嘴補充瓶)</h4>
                                                        <h5>NT$299</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$99</div>
                                                        </div>
                                                        <HeartOutlined />
                                                        <ShoppingCartOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP9.jpg' />
                                                    <div class="image-container3">
                                                        <Link to="" class="image3"></Link>
                                                    </div>
                                                    <div class="para">
                                                        <h4>【拭拭樂】超厚嬰兒抗菌濕巾80抽12包(巧扣立蓋)</h4>
                                                        <h5>NT$949</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$648</div>
                                                        </div>
                                                        <HeartOutlined />
                                                        <ShoppingCartOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP10.jpg' />
                                                    <div class="image-container3">
                                                        <Link to="" class="image3"></Link>
                                                    </div>
                                                    <div class="para">
                                                        <h4>【Sanrio三麗鷗】Hello Kitty冰霸杯提袋組</h4>
                                                        <h5 class="hidden">NT$699</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$699</div>
                                                        </div>
                                                        <HeartOutlined />
                                                        <ShoppingCartOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP11.jpg' />
                                                    <div class="image-container3">
                                                        <Link to="" class="image3"></Link>
                                                    </div>
                                                    <div class="para">
                                                        <h4>【永豐餘】FSC驗證五月花高效導水摺疊紙巾200抽*20包-精巧版</h4>
                                                        <h5>NT$799</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$659</div>
                                                        </div>
                                                        <HeartOutlined />
                                                        <ShoppingCartOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP12.jpg' />
                                                    <div class="image-container3">
                                                        <Link to="" class="image3"></Link>
                                                    </div>
                                                    <div class="para">
                                                        <h4>【角落小夥伴】20抽無蓋濕紙巾48入</h4>
                                                        <h5>NT$1,152</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$768</div>
                                                        </div>
                                                        <HeartOutlined />
                                                        <ShoppingCartOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP13.jpg' />
                                                    <div class="image-container3">
                                                        <Link to="" class="image3"></Link>
                                                    </div>
                                                    <div class="para">
                                                        <h4>【角落小夥伴】80抽無蓋濕紙巾12入</h4>
                                                        <h5>NT$810</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$540</div>
                                                        </div>
                                                        <HeartOutlined />
                                                        <ShoppingCartOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP14.jpg' />
                                                    <div class="image-container3">
                                                        <Link to="" class="image3"></Link>
                                                    </div>
                                                    <div class="para">
                                                        <h4>【角落小夥伴】純水柔濕巾80抽無蓋(台灣製造)</h4>
                                                        <h5>NT$74</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$59</div>
                                                        </div>
                                                        <HeartOutlined />
                                                        <ShoppingCartOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP15.jpg' />
                                                    <div class="image-container3">
                                                        <Link to="" class="image3"></Link>
                                                    </div>
                                                    <div class="para">
                                                        <h4>【布丁狗】檸檬馬鞭草洗手慕斯250ml-3入組</h4>
                                                        <h5>NT$237</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$199</div>
                                                        </div>
                                                        <HeartOutlined />
                                                        <ShoppingCartOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-3 srbottom-300">
                                <div class="mall-space">
                                    <Link to="">
                                        <div class="news_one">
                                            <div class="ones">
                                                <div class="carousel-cell">
                                                    <img alt="" src='assets/img/EP16.jpg' />
                                                    <div class="image-container3">
                                                        <Link to="" class="image3"></Link>
                                                    </div>
                                                    <div class="para">
                                                        <h4>貝恩潔膚抗菌柔濕巾30抽x20包</h4>
                                                        <h5>NT$1,100</h5>
                                                        <div class="col-lg-8">
                                                            <div class="red-price">NT$699</div>
                                                        </div>
                                                        <HeartOutlined />
                                                        <ShoppingCartOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledMall>
            {/* <StyledFooter>
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
            </StyledFooter> */}
        </StyledWrapper>
    )
}


const { SubMenu } = Menu;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

const Sider = () => {
    const [openKeys, setOpenKeys] = React.useState(['sub1']);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
        } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
            <SubMenu className="one" key="sub1" title="全站商品" />
            <SubMenu className="one" key="sub2" title="人氣商品推薦" />
            <SubMenu key="sub3" title="本月最新活動">
                <Menu.Item key="1">國家防災日</Menu.Item>
                <Menu.Item key="2">【母子鱷魚】馬拉松御用款拖鞋系列</Menu.Item>
                <Menu.Item key="3">picard- 法國優質冷凍食品</Menu.Item>
                <Menu.Item key="4">輸不起⚡買三送一</Menu.Item>
                <Menu.Item key="5">輸不起⚡買三送一(分享包)</Menu.Item>
                <Menu.Item key="6">看時事買東西🛒</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title="歡樂耶誕慶2折起 -滿額再抽小家電">
                <Menu.Item key="7">🎄歡樂耶誕慶商品區🎄</Menu.Item>
                <Menu.Item key="8">狂推薦⭐本周新品⭐</Menu.Item>
                <Menu.Item key="9">耶誕慶💥整區5折起</Menu.Item>
                <Menu.Item key="10">歡樂食刻💥冷凍美食2折價起</Menu.Item>
                <Menu.Item key="11">最狂特賣🔥箱購半價</Menu.Item>
                <Menu.Item key="12">年度爆品👍熱銷補貨</Menu.Item>
                <Menu.Item key="13">會員享購🔥行動購獨降價</Menu.Item>
                <Menu.Item key="14">天天饗美食😋 名店強牌推薦</Menu.Item>
                <Menu.Item key="15">⏰耶誕快閃⚡限時降價</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title="開趴必備美食推薦">
                <Menu.Item key="16">🎉派對美食推薦</Menu.Item>
                <Menu.Item key="17">美式餐食推薦💖披薩</Menu.Item>
                <Menu.Item key="18">美式餐食推薦💖牛排</Menu.Item>
                <Menu.Item key="19">美式餐食推薦💖義大利麵</Menu.Item>
                <Menu.Item key="20">美式餐食推薦💖雞肉系列</Menu.Item>
                <Menu.Item key="21">美式餐食推薦💖薯球、薯餅</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" title="期間限定-交換禮物攻略">
                <Menu.Item key="22">🎁$99以下精選好禮</Menu.Item>
                <Menu.Item key="23">🎁$499以下精選好禮</Menu.Item>
                <Menu.Item key="24">🎁$999以下精選好禮</Menu.Item>
            </SubMenu>
            <SubMenu key="sub7" title="跨年趴踢大神⚡攻略搶先看">
                <Menu.Item key="25">女神激推款👍跑趴神隊友</Menu.Item>
                <Menu.Item key="26">開趴必備👍派對神器</Menu.Item>
                <Menu.Item key="27">🎉聖誕佈置推薦</Menu.Item>
                <Menu.Item key="28">🎉聖誕裝扮推薦</Menu.Item>
            </SubMenu>
            <SubMenu key="sub8" title="火鍋開吃★吃鍋季開跑">
                <Menu.Item key="29">😋天冷開吃鍋😋首選推薦</Menu.Item>
                <Menu.Item key="30">🥢鮮嫩肉品🥢Q彈有勁</Menu.Item>
                <Menu.Item key="31">🥢水產海鮮🥢鮮味100%</Menu.Item>
                <Menu.Item key="32">👆醬料.湯底.器具👆推薦</Menu.Item>
                <Menu.Item key="33">🌈鮮摘蔬果🌈美味鍋底料</Menu.Item>
                <Menu.Item key="34">名店鍋物㊙王品</Menu.Item>
                <Menu.Item key="35">名店鍋物㊙青花驕</Menu.Item>
                <Menu.Item key="36">名店鍋物㊙石二鍋</Menu.Item>
                <Menu.Item key="37">名店鍋物㊙呷七碗</Menu.Item>
                <Menu.Item key="38">名店鍋物㊙千葉火鍋</Menu.Item>
                <Menu.Item key="39">名店鍋物㊙海底撈</Menu.Item>
                <Menu.Item key="40">名店鍋物㊙這一鍋</Menu.Item>
                <Menu.Item key="41">名店鍋物㊙錵鑶</Menu.Item>
            </SubMenu>
            <SubMenu key="sub9" title="星級盛宴★澎湃年菜組推薦">
                <Menu.Item key="42">老饕嚐鮮😋豪華主菜</Menu.Item>
                <Menu.Item key="43">老饕嚐鮮😋年節甜點</Menu.Item>
                <Menu.Item key="44">新年😋年菜大團圓</Menu.Item>
                <Menu.Item key="45">名店🧧主打年菜推薦</Menu.Item>
                <Menu.Item key="46">名廚🧧阿彰師年菜</Menu.Item>
                <Menu.Item key="47">名店🧧成旅晶贊知名年菜</Menu.Item>
                <Menu.Item key="48">名店🧧老協珍知名年菜</Menu.Item>
                <Menu.Item key="49">🎁新年送禮禮盒系列</Menu.Item>
            </SubMenu>
            <SubMenu key="sub10" title="🔥寒冬備戰🔥保暖專區">
                <Menu.Item key="50">保暖小物用品🔥推薦區</Menu.Item>
                <Menu.Item key="51">冬日食補🔥推薦區</Menu.Item>
            </SubMenu>
            <SubMenu key="sub11" title="熱賣品‼通通不到$100">
                <Menu.Item key="52">⚡生活小物⚡百元以內</Menu.Item>
                <Menu.Item key="53">⚡速食料理⚡百元以內</Menu.Item>
                <Menu.Item key="54">⚡零嘴甜食⚡百元以內</Menu.Item>
            </SubMenu>
            <SubMenu key="sub12" title="本季最夯★話題發燒區">
                <Menu.Item key="55">冬季限定🍓草莓開吃</Menu.Item>
                <Menu.Item key="56">🏕野營嘉年華🏕露營去</Menu.Item>
                <Menu.Item key="57">🐶寵貓日😺</Menu.Item>
                <Menu.Item key="58">🥢元氣早點餐食推薦</Menu.Item>
                <Menu.Item key="59">聚餐發福🤸‍♀年終瘦身推薦</Menu.Item>
                <Menu.Item key="60">🌈居家除舊整新🌈</Menu.Item>
                <Menu.Item key="61">🥣冬至吃什麼🥣</Menu.Item>
                <Menu.Item key="62">😇感恩女人周😇</Menu.Item>
                <Menu.Item key="63">🧒童趣樂園🧒嬰幼用品</Menu.Item>
            </SubMenu>
            <SubMenu key="sub13" title="人氣卡通授權商品集合區">
                <Menu.Item key="64">【Hello Kitty 】鐵粉限定</Menu.Item>
                <Menu.Item key="65">【寶可夢 】鐵粉限定</Menu.Item>
                <Menu.Item key="66">【迪士尼 】鐵粉限定</Menu.Item>
                <Menu.Item key="67">【角落小夥伴 】超萌限定</Menu.Item>
                <Menu.Item key="68">【拉拉熊 】鐵粉限定</Menu.Item>
                <Menu.Item key="69">【防彈少年團】鐵粉限定</Menu.Item>
                <Menu.Item key="70">【ＬＩＮＥ】ＦＲＩＥＮＤＳ 寵粉專區</Menu.Item>
            </SubMenu>
            <SubMenu className="one" key="sub14" title="虎年好運來🙏有買有包庇" />
            <SubMenu key="sub15" title="台灣加油™健康疫起來">
                <Menu.Item key="71">抗菌大作戰👍健康疫起來</Menu.Item>
                <Menu.Item key="72">我就宅!吃喝玩樂好安心</Menu.Item>
                <Menu.Item key="73">打疫苗💉這樣吃👄!吃喝玩樂好安心</Menu.Item>
            </SubMenu>
            <SubMenu key="sub16" title="全家感恩振心聰明買">
                <Menu.Item key="74">200元以上推薦</Menu.Item>
                <Menu.Item key="75">500元以上推薦</Menu.Item>
                <Menu.Item key="76">1000元以上推薦</Menu.Item>
            </SubMenu>
            <SubMenu key="sub17" title="台灣在地推薦">
                <Menu.Item key="77">台東紅黎季</Menu.Item>
                <Menu.Item key="78">金門在地，古早美味</Menu.Item>
                <Menu.Item key="79">國產水果▸在地好味</Menu.Item>
            </SubMenu>
            <SubMenu className="one" key="sub18" title="----二代青農☀友善農耕----" />
            <SubMenu key="sub19" title="生活食品">
                <Menu.Item key="80">茶/水/運動飲料/機能飲料</Menu.Item>
                <Menu.Item key="81">汽水/咖啡/果汁/奶茶</Menu.Item>
                <Menu.Item key="82">休閒零嘴/餅乾</Menu.Item>
                <Menu.Item key="83">糖果/巧克力/珍味蜜餞/豆類</Menu.Item>
                <Menu.Item key="84">泡麵</Menu.Item>
                <Menu.Item key="85">沖泡咖啡/麥片/茶包</Menu.Item>
                <Menu.Item key="86">米油/醬料/罐頭/調味料</Menu.Item>
                <Menu.Item key="87">調理/即食食品</Menu.Item>
                <Menu.Item key="88">熱銷箱購飲品</Menu.Item>
            </SubMenu>
            <SubMenu key="sub20" title="生鮮食材.冷凍食品">
                <Menu.Item key="89">冰品</Menu.Item>
                <Menu.Item key="90">熱食/滷味小吃/湯品</Menu.Item>
                <Menu.Item key="91">生鮮肉品</Menu.Item>
                <Menu.Item key="92">水產海鮮</Menu.Item>
                <Menu.Item key="93">蔬菜水果/安心食材</Menu.Item>
                <Menu.Item key="94">團夠甜品/蛋糕</Menu.Item>
                <Menu.Item key="95">銅板美食</Menu.Item>
            </SubMenu>
            <SubMenu key="sub21" title="冷凍美食到店取貨">
                <Menu.Item key="96">熟食/小吃/滷味</Menu.Item>
                <Menu.Item key="97">生鮮肉品</Menu.Item>
                <Menu.Item key="98">水產海鮮</Menu.Item>
                <Menu.Item key="99">蛋糕/甜點/冰品</Menu.Item>
            </SubMenu>
            <SubMenu key="sub22" title="保健生機.禮盒">
                <Menu.Item key="96">有機食品</Menu.Item>
                <Menu.Item key="97">保健飲品/補品</Menu.Item>
                <Menu.Item key="98">禮盒專區</Menu.Item>
            </SubMenu>
            <SubMenu key="sub21" title="生活.居家.寵物">
                <Menu.Item key="96">生活雜貨</Menu.Item>
                <Menu.Item key="97">個人清潔</Menu.Item>
                <Menu.Item key="98">家用清潔</Menu.Item>
                <Menu.Item key="99">衛生紙/衛生棉/濕紙巾</Menu.Item>
                <Menu.Item key="100">餐廚用品</Menu.Item>
                <Menu.Item key="101">家具寢飾</Menu.Item>
                <Menu.Item key="102">居家裝修</Menu.Item>
                <Menu.Item key="103">婦幼/玩具</Menu.Item>
                <Menu.Item key="104">寵物專區</Menu.Item>
            </SubMenu>
            <SubMenu key="sub22" title="3C.家電.運動.休閒.車用">
                <Menu.Item key="105">手機/平板電腦/相機/導航</Menu.Item>
                <Menu.Item key="106">3C周邊/線材</Menu.Item>
                <Menu.Item key="107">居家/廚房家電</Menu.Item>
                <Menu.Item key="108">視聽娛樂</Menu.Item>
                <Menu.Item key="109">運動/健身</Menu.Item>
                <Menu.Item key="110">戶外休閒</Menu.Item>
                <Menu.Item key="111">車用百貨</Menu.Item>
            </SubMenu>
            <SubMenu key="sub23" title="美妝.美體.舒壓按摩">
                <Menu.Item key="112">面膜.足膜.眼膜</Menu.Item>
                <Menu.Item key="113">彩妝.指甲油.香水</Menu.Item>
                <Menu.Item key="114">臉部保養</Menu.Item>
                <Menu.Item key="115">美體保養</Menu.Item>
            </SubMenu>
            <SubMenu key="sub24" title="服裝.包鞋.配件">
                <Menu.Item key="116">機能服飾</Menu.Item>
                <Menu.Item key="117">運動服</Menu.Item>
                <Menu.Item key="118">流行服飾.內衣</Menu.Item>
                <Menu.Item key="119">流行包包</Menu.Item>
                <Menu.Item key="120">飾品.配件.襪品</Menu.Item>
                <Menu.Item key="121">暖冬好物</Menu.Item>
                <Menu.Item key="122">鞋子.鞋類週邊</Menu.Item>
            </SubMenu>
            <SubMenu key="sub25" title="文.玩具.圖書.文創.影音">
                <Menu.Item key="123">圖書</Menu.Item>
                <Menu.Item key="124">文創商品</Menu.Item>
                <Menu.Item key="125">卡通授權肖像專區</Menu.Item>
                <Menu.Item key="126">文具.玩具</Menu.Item>
                <Menu.Item key="127">動漫盛典</Menu.Item>
                <Menu.Item key="128">流行唱片.影音.DVD</Menu.Item>
                <Menu.Item key="129">高鐵指定插畫系列商品~滿額送文件夾</Menu.Item>
            </SubMenu>
            <SubMenu key="sub26" title="品牌旗艦館">
                <Menu.Item key="130">❤媽媽煮藝❤</Menu.Item>
                <Menu.Item key="131">里仁食品</Menu.Item>
                <Menu.Item key="132">STAYREAL品牌館</Menu.Item>
                <Menu.Item key="133">MAYDAY五月天</Menu.Item>
                <Menu.Item key="134">HOLA</Menu.Item>
                <Menu.Item key="135">小米粉館</Menu.Item>
                <Menu.Item key="136">台糖優質商品館</Menu.Item>
                <Menu.Item key="137">高鐵紀念品專櫃</Menu.Item>
                <Menu.Item key="138">勝利社企商品專管</Menu.Item>
                <Menu.Item key="139">野獸國Beast Kingdom</Menu.Item>
                <Menu.Item key="140">Lift8品牌館</Menu.Item>
                <Menu.Item key="141">PEKOE食品雜貨鋪</Menu.Item>
                <Menu.Item key="142">神腦國際</Menu.Item>
                <Menu.Item key="143">MIT專管</Menu.Item>
                <Menu.Item key="144">HERAN禾聯</Menu.Item>
                <Menu.Item key="145">Lucy's</Menu.Item>
                <Menu.Item key="146">Unique Art</Menu.Item>
            </SubMenu>
            <SubMenu className="one" key="sub27" title="✈離島專館✈" />
            <SubMenu className="one" key="sub28" title="----------素食專區----------" />
        </Menu>
    );
};

export default Mall;
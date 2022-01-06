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

import MallData from '../data/mall-data';


function Mall() {
    return (
        <StyledWrapper>
            <StyledTopbar>
                <div className="container">
                    <Link to="/" className="brand">
                        <h1>familymall</h1>
                    </Link>
                    <ul className="nav">
                        <li className="nav_item">
                            <Link to="" className="nav_link">最新商品</Link>
                        </li>
                        <li className="nav_item">
                            <Link to="" className="nav_link">熱銷排行</Link>
                        </li>
                        <li className="nav_item">
                            <Link to="" className="nav_link">折扣活動</Link>
                        </li>
                        <li className="nav_item">
                            <Link to="" className="nav_link">活動資訊</Link>
                        </li>
                        <li className="nav_item">
                            <Link to="">
                                <ShoppingCartOutlined className="nav__icon"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </StyledTopbar>
            <StyledMall>
                <div className="container2">
                    <div className="nav_crumb_list">
                        <Link to="" className="ncl_item">首頁 ></Link>
                        <Link to="" className="ncl_item">抗菌大作戰 健康疫起來</Link>
                    </div>
                    <div className="slider-container">
                        <Sider />
                    </div>
                    <div className="news news-mall">
                        <ul className="classification">
                            {MallData[1].classification.map((item, index) => {
                                return(
                                    <li className="cf_item">
                                        <Link to="" className="cf_link">{item.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="row">
                            {MallData[1].items.map((item, index) => {
                                return(
                                    <div className="col-lg-3 srbottom-300">
                                        <div className="mall-space">
                                            <Link to="">
                                                <div className="news_one">
                                                    <div className="ones">
                                                        <div className="carousel-cell">
                                                            <img alt="" src={item.src} />
                                                            <div className="para">
                                                                <h4>{item.title}</h4>
                                                                <h5>{item.price}</h5>
                                                                <div className="col-lg-8">
                                                                    <div className="red-price">{item.redprice}</div>
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
                                )
                            })}
                        </div>
                    </div>
                </div>
            </StyledMall>
            {/* <StyledFooter>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-4">
                            <div className="space">
                                <h3 className="title">全家FamilyMart APP</h3>
                                <div className="news_two">
                                    <Link to="/" className="fmapp">
                                        <div className="image-container4">
                                            <div className="image4 app1"></div>
                                        </div>
                                    </Link>
                                    <h3 className="para">掃碼立即下載</h3>
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
                                <h3 className="title">My FamilPort APP</h3>
                                <div className="news_two">
                                    <Link to="/" className="fmapp">
                                        <div className="image-container4">
                                            <div className="image4 app3"></div>
                                        </div>
                                    </Link>
                                    <h3 className="para">掃碼立即下載</h3>
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
                                <h3 className="title">全家LINE官方帳號</h3>
                                <div className="news_two">
                                    <Link to="/" className="fmapp">
                                        <div className="image-container4">
                                            <div className="image4 line1"></div>
                                        </div>
                                    </Link>
                                    <h3 className="para">掃碼立即下載</h3>
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
            <SubMenu className="one" key="sub1" title={MallData[0].sub1[0].name} />
            <SubMenu className="one" key="sub2" title={MallData[0].sub2[0].name} />
            <SubMenu key="sub3" title="本月最新活動">
                {MallData[0].sub3.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub4" title="歡樂耶誕慶2折起 -滿額再抽小家電">
                {MallData[0].sub4.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub5" title="開趴必備美食推薦">
                {MallData[0].sub5.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub6" title="期間限定-交換禮物攻略">
                {MallData[0].sub6.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub7" title="跨年趴踢大神⚡攻略搶先看">
                {MallData[0].sub7.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub8" title="火鍋開吃★吃鍋季開跑">
                {MallData[0].sub8.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub9" title="星級盛宴★澎湃年菜組推薦">
                {MallData[0].sub9.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub10" title="🔥寒冬備戰🔥保暖專區">
                {MallData[0].sub10.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub11" title="熱賣品‼通通不到$100">
                {MallData[0].sub11.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub12" title="本季最夯★話題發燒區">
                {MallData[0].sub12.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub13" title="人氣卡通授權商品集合區">
                {MallData[0].sub13.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu className="one" key="sub14" title={MallData[0].sub14[0].name} />
            <SubMenu key="sub15" title="台灣加油™健康疫起來">
                {MallData[0].sub15.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub16" title="全家感恩振心聰明買">
                {MallData[0].sub16.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub17" title="台灣在地推薦">
                {MallData[0].sub17.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu className="one" key="sub18" title={MallData[0].sub18[0].name} />
            <SubMenu key="sub19" title="生活食品">
                {MallData[0].sub19.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub20" title="生鮮食材.冷凍食品">
                {MallData[0].sub20.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub21" title="冷凍美食到店取貨">
                {MallData[0].sub21.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub22" title="保健生機.禮盒">
                {MallData[0].sub22.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub23" title="生活.居家.寵物">
                {MallData[0].sub23.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub24" title="3C.家電.運動.休閒.車用">
                {MallData[0].sub24.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub25" title="美妝.美體.舒壓按摩">
                {MallData[0].sub25.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub26" title="服裝.包鞋.配件">
                {MallData[0].sub26.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub27" title="文.玩具.圖書.文創.影音">
                {MallData[0].sub27.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu key="sub28" title="品牌旗艦館">
                {MallData[0].sub28.map((list, index) => {
                    return (
                        <Menu.Item key={list.id}>{list.name}</Menu.Item>
                    )
                })}
            </SubMenu>
            <SubMenu className="one" key="sub29" title={MallData[0].sub29[0].name} />
            <SubMenu className="one" key="sub30" title={MallData[0].sub30[0].name} />
        </Menu>
    );
};

export default Mall;
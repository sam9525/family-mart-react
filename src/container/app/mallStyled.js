import styled from 'styled-components'
import topbottom from '../images/topbottom.png'

//footer image
import app1 from '../images/app1.jpg'
import app2 from '../images/app2.png'
import app3 from '../images/app3.png'
import app4 from '../images/app4.png'
import line1 from '../images/line1.jpg'
import line2 from '../images/line2.png'
import fans1 from '../images/fans1.jpg'
import fans2 from '../images/fans2.png'
import youtube from '../images/youtube.png'
import famiclub from '../images/famiclub.png'
import fmih from '../images/fmih.jpg'
import wifi from '../images/wifi.jpg'
import ins from '../images/ins.jpg'


export const StyledWrapper = styled.div`
    *{
        box-sizing: border-box;
        position: relative;
    }
    html,body{
        font-family: '微軟正黑體', 'Comic Sans MS';
        background-color: #F1F1F1;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
    }
    ul, li{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    .container{
        padding: 0 16% 0 16%;
    }
    .row:after{
        content: '';
        display: block;
        clear: both;
    }
    .col-lg-6,.col-lg-4,.col-lg-3,.col-lg-12,.col-lg-5,.col-lg-55,.col-lg-7,.col-lg-8,.col-md-6{
        /* border: 1px solid red; */
        float: left;
    }
    .col-lg-3{
        width: 25%;
    }
    .col-lg-4{
        width: 33.3333333%;
    }
    .col-lg-5{
        width: 20%;
    }
    .col-lg-55{
        width: 13%;
    }
    .col-lg-7{
        width: 40%;
    }
    .col-lg-6{
        width: 50%;
    }
    .col-lg-12{
        width: 100%;
    }
    .col-lg-8{
        width: 60%;
    }

`

export const StyledTopbar = styled.div`
    width: 100%;
    height: 45px;
    position: fixed;
    top: 0;
    right: 0;
    margin-left: 220px;
    background-color: #00A040;
    z-index: 25;

    .container{
        padding: 0 16% 0 16%;
        height: 45px;
    }
    .brand{
        display: inline-block;

        background-image: url(${topbottom});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        
        white-space: nowrap;
        text-indent: 100%;
        overflow: hidden;
    }
    .nav{
        float: right;
    }
    .nav .nav_item{
        float: left;
        padding-top: 8px;
        padding-left: 10px;
        list-style: none;
    }
    .nav .nav_item:hover{
        animation-name: fadeInDownn;
    }
    .nav .nav_link{
        font-size:  18px;
        padding: 6px 10px 6px 10px;
        color: #fff;
    }
    .nav .nav_link:hover{
        text-decoration: underline;
    }
    .nav__icon:hover{
        color: #5eb2ff;
    }
    svg{
        width: 25px;
        height: 25px;
    }

`

export const StyledMall = styled.div` 
    .container2{
        padding-right: 16%;
        padding-left: 16%;   
    }
    .nav_crumb_list{
        padding-top: 65px;
        padding-bottom: 20px;
    }
    .ncl_item{
        padding: 10px;
    }
    .slider-container{
        float: left;
        width: 20%;
    }
    .ant-menu{
        background-color: #f1f1f1;
        border-color: #fff;
    }
    .ant-menu i{
        top: 0;
        left: 10%;
    }
    .ant-menu .one .ant-menu-submenu-arrow{
        left: 100%;
    }
    .news-mall{
        width: 79%;
        float: right;
    }
    .clearfloat{
        clear: both;
    }
    .classification {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .classification .cf_item {
        display: inline-block;
        padding-top: 10px;
        padding-left: 10px;
    }
    .classification .cf_link {
        float: left;
        padding: 10px;
        border: 2px solid rgba(0,0,0,0);
        border-radius: 50px;
        background-color: #f1f1f1;
    }
    .classification .cf_link:hover {
        border: 2px solid #008BD5;
        box-shadow: 5px 5px 14px -10px #000;
    }
    
    .mall-space{
        padding: 10px;
    }
    .news-mall .news_one{
        padding: 10px;
        margin-bottom: 0px;
        background-color: #f1f1f1;
    }
    .news-mall .para{
        text-align: left;
        vertical-align: center;
    }
    .news-mall .news_one .para h4{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .news-mall .para h3{
        padding-top: 20px;
        height: 68px;
    }
    .news-mall .para h5{
        text-decoration: line-through;
    }
    .news-mall .para .red-price{
        color: red;
        font-size: 20px;
    }
    svg{
        width: 25px;
        height: 25px;
        margin-left:10px;
    }
    .hidden{
        visibility: hidden;
    }
    .news-mall .news_one:hover{
        transform: scale(1.05);
    }
    .news_one{
        border: 2px solid rgba(0,0,0,0);
        padding: 10px;
        background-color: #fff;
        border-radius: 5px;
        transition: all 0.3s;
    }
    .news_one:hover{
        border: 2px solid #008BD5;
        box-shadow: 5px 5px 14px -10px #000;
    }
    .image3{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

        transition: all 0.8s;
    }
    .image3:hover{
        transform: scale(1.15);
    }
    img{
        width: 100%;
    }
`

export const StyledFooter = styled.div`
    width: 100%;
    height: 100%;
    clear: both;
    .container{
        background-color: #fff;
    }
    .col-lg-5{
        background-color: #fff;
        border: 2px solid rgba(0,0,0,0);
    }
    .col-lg-5:hover{
        border: 2px solid #008BD5;
        box-shadow: 5px 5px 14px -10px #000;
        z-index: 5;
        border-radius: 5px;
        transition: all 0.3s;
    }
    .fmapp{
        padding: 10px 10px;
        text-align: center;
    }
    .title{
        padding: 10px;
        line-height: 24px;
        text-align: center;
        white-space: nowrap;
    }
    .para{
        text-align: center;
    }
    .news_three .para{
        text-align: center;
        padding: 3px;

        overflow: hidden;
        white-space: nowrap;
        text-overflow : ellipsis;
    }
    .f{
        border: 2px solid rgba(0,0,0,0);
        background-color: #fff;
    }
    .preview{
        display: inline-block;
        width: 100%;
    }
    .preview .para{
        text-align: center;
        font-size: 12px;
        padding: 3px;
    }
    .space{
        padding: 20px;
    }
    .news_two{
        border: 2px solid rgba(0,0,0,0);
        padding: 10px;
        background-color: #fff;
    }
    .news_three{
        border: 2px solid rgba(0,0,0,0);
        background-color: #fff;
        border-radius: 5px;
        transition: all 0.3s;
    }
    .news_three:hover{
        border: 2px solid #008BD5;
        box-shadow: 5px 5px 14px -10px #000;
        z-index: 5;
    }
    .image-container4{
        width: 100%;
    }
    .image-container4:before{
        content: '';
        display: block;
        width: 100%;
        padding-top: 50%;
    }
    .image4{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .image4:target{
        transform: scale(1.2);
    }
    .app1{
        background-image: url(${app1});
    }
    .app2{
        background-image: url(${app2});
    }
    .app3{
        background-image: url(${app3});
    }
    .app4{
        background-image: url(${app4});
    }
    .line1{
        background-image: url(${line1});
    }
    .line2{
        background-image: url(${line2});
    }
    .fans1{
        background-image: url(${fans1});
    }
    .fans2{
        background-image: url(${fans2});
    }
    .youtube{
        background-image: url(${youtube});
    }
    .famiclub{
        background-image: url(${famiclub});
    }
    .fmih{
        background-image: url(${fmih});
    }
    .wifi{
        background-image: url(${wifi});
    }
    .ins{
        background-image: url(${ins});
    }
    
`
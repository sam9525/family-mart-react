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
        max-width: 1250px;
        margin: auto;
        padding: 0 2%;
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
    .is-nav-open{
        left: 0;
    }
    
    @media screen and (max-width: 1000px) {
        .col-md-6 {
            width: 50%;
        }
        .col-md-55 {
            width: 25%;
        }
        .col-md-4 {
            width: 33.33333%;
        }
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
    .nav__icon{
        float: right;
        padding: 10px;
    }
    svg{
        width: 25px;
        height: 25px;
    }
    .nav__icon {
        display: none;
        color: white;
    }

    @media screen and (max-width: 800px) {
        .nav {
            display: none;
        }
        .nav__icon {
            display: inline-block;
        }
    }

`

export const StyledTopbarMenu = styled.div`
    position: fixed;
    left: 100%;
    width: 100%;
    height: 100%;
    top: 0;
    padding: 15% 10%;
    background-color: white;
    z-index: 100;
    transition: all 0.5s;
    .navbar-hide{
        color: #008BD5;
        z-index: 20;
    }

    .close-btn{
        width: 40px;
        height: 40px;
        position: absolute;
        right: 10px;
        top: -50px;
        border: 0;
        background-color: #fff;
    }
    .close-btn span{
        width: 30px;
        height: 2px;
        position: absolute;
        background-color: #008BD5;
        top: 50%;
        left: 50%;
    }
    .close-btn span:nth-child(1){
        transform: translate(-50%,-50%) rotate(45deg);
    }
    .close-btn span:nth-child(2){
        transform: translate(-50%,-50%) rotate(-45deg);
    }

    .menu3-container{
        width: 100%;
        margin: 0 auto;
    }
    .nav-container {
        position: relative;
        width: 100%;
        cursor: pointer;
    }
    
    .nav-container .nav-content {
        display: none;
        padding-left: 25px;
    }
    
    .nav-container .nav-title,
    .nav-container .nav_item {
        display: block;
        position: relative;
        margin: 0;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: normal;
        cursor: pointer;
    }
    .nav-title .icon-add{
        float: right;
        top: 3px;
        width: 20px;
        height: 20px;
    
        transition: all 0.3s;
    }
    .nav-container .navbox.active .icon-add{
        color: white;
    }
    
    .nav-container .nav-title:hover,
    .nav-container .nav-title:active,
    .nav-container .navbox.active .nav-title {
        background-color: #52de97;
    }
    .navbox.active .nav-content{
        display: inline-block;
    }
    svg{
        width: 20px;
        height: 20px;
    }
    p{
        margin: 14px 0; 
    }
    
`

export const StyledMall = styled.div` 
    .container2{ 
        max-width: 1250px;
        margin: auto;
        padding: 0 2%;
    }
    @media screen and (max-width: 1000px) {
        max-width: 100%;
    }
    .nav_crumb_list{
        padding-top: 65px;
        padding-bottom: 20px;
    }
    .ncl_item{
        padding: 10px;
        font-size: 18px;
        justify-content: center;
        text-align: center;
    }
    .nav__icon {
        display: none;
    }
    @media screen and (max-width: 800px ){
        .nav__icon {
            display: inline-block;
        }
    }
    .nav__icon{
        padding: 10px;
        cursor: pointer;
        color: #000000;
        z-index: 30;
        transition: all 0.5s;
    }
    .nav__icon svg {
        width: 25px;
        height: 25px;
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
        padding: 1vmin;
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
        font-size: 16px;
    }
    .news_one svg{
        width: 3vmin;
        height: 3vmin;
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

    @media screen and (max-width: 1300px) {
        .col-lg-8 {
           width: 50%;
        }
    }
    @media screen and (max-width: 800px) {
        svg {
            margin-left: 5px;
        }
        .slider-container{
            position: absolute;
            left: -300px;
            z-index: 20;
            transition: all 0.5s;
        }
        .is-nav-open {
            left: 2%;
        }
        .slider-container{
            width: 40vmin;
        }
        .news-mall{
            width: 100%;
        }
        .nav_crumb_list {
            padding-bottom: 0;
        }
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
        overflow: hidder;
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
    @media screen and (max-width: 1300px) {
        .space {
            padding: 10px;
        }
        .title {
            padding: 5px;
        }
    }
    @media screen and (max-width: 1000px) {
        padding-left: 0px;   
    }
`
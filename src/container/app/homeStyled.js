import styled from 'styled-components'
import topbottom from '../images/topbottom.png'
import jum1 from '../images/jum1.jpg'
// import jum2 from '../images/jum2.jpg'
// import jum3 from '../images/jum3.jpg'
// import jum4 from '../images/jum4.jpg'
// import jum5 from '../images/jum5.jpg'
// import jum6 from '../images/jum6.jpg'
// import jum7 from '../images/jum7.jpg'
import ser1 from '../images/service1.jpg'
import ser2 from '../images/service2.png'
import ser3 from '../images/service3.png'
import ser4 from '../images/service4.png'
import ser5 from '../images/service5.jpg'
import ser6 from '../images/service6.jpg'
import ser7 from '../images/service7.jpg'
import ser8 from '../images/service8.jpg'
import ser9 from '../images/service9.jpg'
import ser10 from '../images/service10.jpg'
import ser11 from '../images/service11.jpg'
import ser12 from '../images/service12.jpg'
import np1 from '../images/np1.jpg'
import np2 from '../images/np2.jpg'
import np3 from '../images/np3.jpg'
import np4 from '../images/np4.jpg'
import Feature from '../images/Feature.jpg'
import play from '../images/play.jpg'
import activity1 from '../images/activity1.jpg'
import activity2 from '../images/activity2.jpg'
import activity3 from '../images/activity3.jpg'
import activity4 from '../images/activity4.jpg'
import relation1 from '../images/relation1.jpg'
import relation2 from '../images/relation2.jpg'
import relation3 from '../images/relation3.png'
import discount from '../images/discount.jpg'
import Noticeboard1 from '../images/Noticeboard1.jpg'
import Noticeboard2 from '../images/Noticeboard2.jpg'
import Noticeboard3 from '../images/Noticeboard3.png'
import Noticeboard4 from '../images/Noticeboard4.png'
import pre1 from '../images/pre1.jpg'
import pre2 from '../images/pre2.jpg'

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
        width: 75%;
        margin: auto;
        background-color: #F1F1F1;
        padding: 0 2%;
    }
    @media screen and (max-width: 1000px) {
        .container {
            width: 90%
        }
    }
    .row:after{
        content: '';
        display: block;
        clear: both;
    }
    .col-lg-6,.col-lg-4,.col-lg-3,.col-lg-12,.col-lg-5,.col-lg-55,.col-lg-7,.col-lg-8,.col-md-6, .col-sm-6 {
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
        width: 70%;
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
    @media screen and (max-width: 700px) {
        .col-sm-6 {
            width: 50%;
        }
    }

    .owl-theme .owl-dots{
        display: flex;
        justify-content: center;
    }
    .owl-theme .owl-nav{
        display: none;
    }
    .owl-theme .owl-dots{
        transform: translate(0%,-160%);
        z-index: 5;
    }
    .owl-theme .owl-dots button.owl-dot span{
        outline: none;
    }
    .owl-theme .owl-dots button.owl-dot.active span{
        background-color: #5FBD09;
    }
`

export const StyledHeader = styled.div`
    .navbar-hide{
        position: fixed;
        display: inline-block;
        width: 45px;
        height: 45px;
        margin-top: -45px;
        left: 13%;
        z-index: 26;
        color: #fff;
        transition: all 0.5s;
    }
    button {
        background-color: rgba(0,0,0,0);
        border: none;
    }
    .navbar-hide i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }  
    .is-nav-open{
        left: 0;
        z-index: 100;
    }
`

export const StyledNavbar = styled.div`
    width: 220px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 29;
    transition: all 0.5s;
    height: 100%;
    background-color: #fff;
    .is-nav-open{
        left: -220px;
    }  
    .navbar-hide{
        top: 45px;
    }
    .brand{
        width: 100%;
        height: 100px;
        display: inline-block;

        background-image: url(${topbottom});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        
        white-space: nowrap;
        text-indent: 100%;
        overflow: hidden;
    }
    @media screen and (max-width: 1000px) {
        display: none;
    }
`

export const StyledMenu = styled.div`
    .nav .nav_item{
        padding-top: 12px;
        padding-bottom: 12px;
    }
    .nav .nav_item:hover{
        background-color: #00B347;
    }
    .nav .nav_link{
        display: block;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 16px;
        color: #000;
        letter-spacing: 4px;
        text-align: justify;
        text-decoration: none;
    }
    .nav .title{
        line-height: 60px;
        font-size: 22px;
        letter-spacing: 4px;
        text-align: center;
        padding: 10px 0px 10px 0px;
        margin: 11px 15px 10px 15px;
        border-bottom: 2px solid #000;
    }
    .extend{
        height: 100%;
    }
    .extend .extend_item{
        padding-top: 12px;
        padding-bottom: 12px;
    }
    .extend .extend_link{
        display: block;
        padding-left: 15px;
        font-size: 16px;
        color: #000;
        letter-spacing: 4px;
        text-decoration: none;
    }
    
    /* .unfold{
        position: absolute;
        width: 0%;
        height: 45px;
        margin-top: -12px;
        background-color: #00B347;
    } */
    .nav .nav_item:hover .menu2{
        display: inline-block;
    }
    .menu2{
        display: none;
        width: 220px;
        position: fixed;
        top: 0;
        left: 220px;
        z-index: 30;
        background-color: #fff;
        
        transition: all 0.5s;
    }
    .menu2 .extend .extend_link{
        letter-spacing: normal;
    }
    
    /* .menu2 .extend .extend_item:hover .unfold{
        width: 220px;
    } */

    li{
        list-style: none;
    }
    ul{
        padding: 0;
    }
`

export const StyledMenu3 = styled.div`
    
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: -500px;
    padding: 15% 10%;
    background-color: white;
    z-index: 0;
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

export const StyledTopbar = styled.div`
    padding-left: 220px;
    width: 100%;
    height: 45px;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #00A040;
    z-index: 25;

    .container{
        height: 45px;
        background-color: #00A040;
    }
    
    .nav__icon{
        position: fixed;
        top: 0px;
        padding: 10px;
        cursor: pointer;
        color: #fff;
        z-index: 30;
        transition: all 0.5s;
        display: none;
    }
    .nav__icon:hover{
        color: #5eb2ff;
    }
    svg{
        width: 25px;
        height: 25px;
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
        color: #fff;ㄕ
    }
    .nav .nav_link:hover{
        text-decoration: underline;
    }

    @media screen and (max-width: 1000PX) {
        padding-left: 0px;
        .nav__icon{
            display: inline-block;
        }
        .nav {
            display: none;
        }
    }
`

export const StyledJumbortron = styled.div`
    padding-left: 220px;
    background-color: #F1F1F1;
    margin-top: 45px;
    margin-bottom: -30px;
    .image1{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .image-container1{
        width: 100%;
    }
    .image-container1:before{
        content: '';
        display: block;
        width: 100%;
    }
    /* .jum1{
        background-image: url(${jum1});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

    } */

    @media screen and (max-width: 1000px) {
        padding-left: 0px;
    }
`

export const StyledService = styled.div`
    padding-left: 220px;
    width: 100%;
    height: 100%;
    background-color: #F1F1F1;
    z-index: 10;
    padding-top: 30px;
    padding-bottom: 30px;
    
    .title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .image-container2{
        width: 100%;
    }
    .image-container2:before{
        content: '';
        display: block;
        width: 100%;
        padding-top: 75%;
    }
    .image2{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .image2 .des{
        position: absolute;
        top: 93%;
        left: 50%;
        transform: translate(-50%, -100%);
        color: #fff;

    }
    .margin10{
        margin: 10px
    }
    .news_one{
        border: 2px solid rgba(0,0,0,0);
        padding: 10px;
        margin-right: 20px;
        margin-bottom: 20px;
        background-color: #fff;
        border-radius: 5px;
        transition: all 0.3s;
    }
    .news_one:hover{
        border: 2px solid #008BD5;
        box-shadow: 5px 5px 14px -10px #000;
    }

    .service1{
        display: inline-block;
        background-image: url(${ser1});
        background-size: contain;
    }
    .service2{
        display: inline-block;
        background-image: url(${ser2});
        background-size: contain;
    }
    .service3{
        display: inline-block;
        background-image: url(${ser3});
        background-size: contain;
    }
    .service4{
        display: inline-block;
        background-image: url(${ser4});
        background-size: contain;
    }
    .service5{
        display: inline-block;
        background-image: url(${ser5});
        background-size: contain;
    }
    .service6{
        display: inline-block;
        background-image: url(${ser6});
        background-size: contain;
    }
    .service7{
        display: inline-block;
        background-image: url(${ser7});
        background-size: contain;
    }
    .service8{
        display: inline-block;
        background-image: url(${ser8});
        background-size: contain;
    }
    .service9{
        display: inline-block;
        background-image: url(${ser9});
        background-size: contain;
    }
    .service10{
        display: inline-block;
        background-image: url(${ser10});
        background-size: contain;
    }
    .service11{
        display: inline-block;
        background-image: url(${ser11});
        background-size: contain;
    }
    .service12{
        display: inline-block;
        background-image: url(${ser12});
        background-size: contain;
    }    
    .react-tabs__tab-list{
        border-bottom: none;
    }
    .react-tabs__tab{
        border: none;
        background-color: #fff;
        width: 25%;
        font-size: 20px;
        padding: 14px 0;
        text-align: center;
        transition: all 1s;
        border-bottom: 5px solid #E5E5E5;
        
    }
    .react-tabs__tab--selected{
        background-color: #1CC0FF;
        color: #fff;
        border-bottom: 5px solid #008CD7;
    }
    .react-tabs__tab-panel{
        width: 50%;
        float: right;
    }
    .tabs1 .image-container2{
        background-color: #000;
    }

    @media screen and (max-width: 1000px) {
        padding-left: 0px;
    }
    @media screen and (max-width: 700px) {
        .react-tabs__tab {
            width: 50%;
        }
        .react-tabs__tab-panel {
            width: 100%;
        }
    }
`

export const StyledNews = styled.div`
    padding-left: 220px;
    width: 100%;
    height: 100%;
    background-color: #F1F1F1;
    .news_one{
        border: 2px solid rgba(0,0,0,0);
        padding: 10px;
        margin: 2.3vmin;
        background-color: #fff;
        border-radius: 5px;

        transition: all 0.3s;
    }
    .news_one h2{
        padding: 5px 0;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .news_one:hover{
        border: 2px solid #008BD5;
        box-shadow: 5px 5px 14px -10px #000;
    }
    .news_one .para{
        line-height: 24px;
        text-align: center;
        padding-top: 10px;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        cursor: pointer;
    }
    .ones{
        padding-bottom: 40px;
    }
    .ones .owl-dots{
        display: none;
    }
    .image-container3{
        width: 100%;
        overflow: hidden;
    }
    .image-container3:before{
        content: '';
        display: block;
        width: 100%;
        padding-top: 100%;
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
    .np1{
        background-image: url(${np1});
    }
    .np2{
        background-image: url(${np2});
    }
    .np3{
        background-image: url(${np3});
    }
    .np4{
        background-image: url(${np4});
    }
    .Feature{
        background-image: url(${Feature});
    }
    .play{
        background-image: url(${play});
    }
    .activity1{
        background-image: url(${activity1});
    }
    .activity2{
        background-image: url(${activity2});
    }
    .activity3{
        background-image: url(${activity3});
    }
    .activity4{
        background-image: url(${activity4});
    }
    .relation1{
        background-image: url(${relation1});
    }
    .relation2{
        background-image: url(${relation2});
    }
    .relation3{
        background-image: url(${relation3});
    }
    .discount{
        background-image: url(${discount});
    }
    .Noticeboard1{
        background-image: url(${Noticeboard1});
    }
    .Noticeboard2{
        background-image: url(${Noticeboard2});
    }
    .Noticeboard3{
        background-image: url(${Noticeboard3});
    }
    .Noticeboard4{
        background-image: url(${Noticeboard4});
    }
    .pre1{
        background-image: url(${pre1});
    }
    .pre2{
        background-image: url(${pre2});
    }
    .owl-theme .owl-dots{
        transform: translate(0%, 0%);
        z-index: 5;
    }
    h3{
        text-align: center;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }

    @media screen and (max-width: 1300px) {
        .news_one {
            margin: 10px 10px 20px;
        }
    }
    @media screen and (max-width: 1000px) {
        padding-left: 0px;
    }
`

export const StyledFooter = styled.div`
    padding-left: 220px;
    width: 100%;
    height: 100%;
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
    .title, .para {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
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
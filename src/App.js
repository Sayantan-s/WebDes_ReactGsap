import React from 'react';
import styled from 'styled-components';
import { IMGS } from './api/imgsrc';
import { gsap } from 'gsap'
/*import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';*/

function App() {
  const Lines = [
    'I aint explaining shit',
    '100% pro black',
    'PERIOD'
  ]
  let appref= React.useRef(null);
  let Imageref=React.useRef(null);
  let contentRef = React.useRef(null);
  React.useEffect(() => {
    const girl1 = Imageref.firstElementChild;
    const girl2 = Imageref.lastElementChild;
    const line1 = contentRef.children[0].firstElementChild
    const line2 = contentRef.children[0].children[1]
    const line3 = contentRef.children[0].lastElementChild
    const paragraph = contentRef.children[1];
    const btn = contentRef.children[2];
    gsap.set(appref,{
      css: {
        visibility : 'visible'
      }
    })
    gsap.timeline().from(girl1,{
      y: 1280,
      duration: 1.5,
      ease: 'power4',
      stagger : {
        from : 'start'
      }
    }).from(girl1.firstElementChild,{
      scale: 2,
      duration: 1.5
    },'-=1.5')
    .from(girl2,{
      y: 1280,
      duration: 1.5,
      ease: 'power4'
    },'-=1.3').from(girl2.firstElementChild,{
      scale: 2,
      duration: 1.5
    },'-=1.5')
    .from(
      [line1.children,line2.children,line3.children],{
        y: 60,
        stagger: { 
          amount: 0.3,
          from: 'start'
        },
        ease: 'power2',
        duration: 1.5
      },"-=1.5")
    .from(
      paragraph,{
        y: 20,
        opacity: 0,
        duration: 1.5,
        ease: 'power2'
      },"-=1.5")
    .from(
      btn,{
        y: 20,
        opacity: 0,
        duration: 1.5,
        ease: 'power2'
      },"-=1.5")
  })
  return (
    <MainApp>
          <div className="container" ref={el => appref = el}>
            <div className="hero-inner">
              <div className="hero-content">
                  <div className="hero-content-inner" ref={ele => contentRef = ele}>
                    <h1>
                      {
                        Lines.map(line => (
                          <div className="hero-content-line" key={line}>
                            <div className="hero-content-line--inner">
                                {line}
                            </div>
                          </div>
                        ))
                      }
                    </h1>
                    <p>I’ve written many an op-ed, led many advocacy campaigns, met and cried with a number of families who’ve had their loved ones taken from them by death, prison or deportation. It never gets easier.</p>
                    <div className="btn-row">
                      <button>
                        Explore
                        <div className="Arr"><Arrow width="2rem"/></div>
                      </button>
                    </div>
                  </div>
              </div>
              <div className="hero-imgs">
                <div className="hero-imgs-inner" ref={ele => Imageref = ele}>
                  <div className="hero-img_girl1">
                    <img src={IMGS.IMG1} alt="girl1" />
                  </div>
                  <div className="hero-img_girl2">
                    <img src={IMGS.IMG2} alt="girl1"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </MainApp>
  );
}

export default App;

const MainApp = styled.div`
height: 100vh;
font-family : var(--content);
font-weight: 300;
visibility: hidden;
.container{
  width: 1440px;
  min-width: 1440px;
  margin: 0 auto;
  .hero-inner{
    display: flex;
    align-items: center;
    justify-content:space-between;
    margin: 0 5rem;
    height: 100vh;
    .hero-content{
      width: 50%;
      &-inner{
        width: 500px;
        margin: 0 auto;
        h1{
          font-family: var(--headers);
          font-size : 3rem;
          .hero-content-line{
            height: 60px;
            overflow: hidden;
            margin: 0;
          }
        }
        p{
          font-size: 1rem;
          line-height: 1.5rem;
          padding-right: 4rem;
        }
        .btn-row{
          position:relative;
          top: 1rem;
          &::before{
            position: absolute;
            width: 4rem;
            background-color: #dfdfdf;
            height: 2px;
            content: '';
            top: 50%;
            left: -4.2rem;
          }
          button{
            cursor:pointer;
            border:none;
            background: none;
            outline:none;
            text-transform: uppercase;
            letter-spacing: 0.7px;
            font-family: var(--content);
            display: flex;
            align-items:center;
            position:relative;
            .Arr{
               position: absolute;
               display: flex;
               align-items: center;
               justify-content: center;
               background-color: black;
               padding: 0.5rem;
               left: 80px;
               color: white;
            }
          }
        }
      }
    }
    .hero-imgs{
      width: 50%;
      height: 100vh;
      position: relative;
      .hero-imgs-inner{
        .hero-img_girl1{
          position: absolute;
          overflow:hidden;
          top:5rem;
          right: -1rem;
          width: 55%;
          height: 50%;
        }
        .hero-img_girl2{
          position: absolute;
          overflow:hidden;
          bottom: 5rem;
          left: -2rem;
          width: 50%;
          height: 52%;
        }
        img{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
        }
      }
    }
  }
}
/*background-color : #515070;
color: #ff8e6e;
display : grid;
margin: 0;
padding: 0;
grid-template-rows: max-content 1fr max-content;*/
`
const Arrow = ({className,width}) =>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} style={{width: width}}>
      <polygon fill="var(--ci-primary-color, currentColor)" points="359.873 121.377 337.246 144.004 433.243 240.001 16 240.001 16 240.002 16 272.001 16 272.002 433.24 272.002 337.246 367.996 359.873 390.623 494.498 256 359.873 121.377"/>
    </svg>

  )
} 
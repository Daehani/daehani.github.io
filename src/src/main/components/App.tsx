import React, { useEffect, useRef, useState, MouseEvent, KeyboardEvent } from 'react';
import '../styles/App.css';
import 'react-slideshow-image/dist/styles.css';
import ImageViewer from './ImageViewer';
import Map from './Map';
import Toast, { ToastLevel } from './Toast';

declare const naver: any;

function App() {
  // const quoteText = "최고의 사랑은 영혼을 일깨우고\n" +
  //   "더 많이 소망하게 하고\n" +
  //   "가슴에 열정을, 마음에 평화를 주지.\n" +
  //   "네게서 그걸 얻었고\n" +
  //   "너에게 영원히 주고 싶어.";
  // const quoteReference = "영화 《노트북》 中";

  // const informations = [
  //   ["도보", ["충무로역 1번 출구에서 약 10분(약 615m)"]],
  //   ["지하철", ["3, 4호선 충무로역 1번 출구 앞", "셔틀버스 이용(3분 간격)\n오전 10시 30분부터 오전 11시 30분까지 운행"]],
  //   ["버스", ["104, 421, 463, 507", "남산순환버스 01A, 01B, 6001(공항버스)"]],
  //   ["주차", ["라비두스 별관 주차장(3시간 무료)"]]
  // ];

  const photos = [...new Array(34).keys()].map(it => (it + 1).toString().padStart(3, "0")).filter(it => !["006", "011"].includes(it));
  const photosContinuable: Array<string> = [];
  const assetsBaseUrl = "/assets";
  const photoBaseUrl = `${assetsBaseUrl}/photos`;
  const introImageUrl = `${photoBaseUrl}/000.png`;
  // const bridgeImageUrl = `${photoBaseUrl}/031.jpg`;

  const photoRows = 2;
  const photoColumns = 16;
  const [imageMode, setImageMode] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);


  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    const body = document.querySelector('body')!;
    if (imageMode) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }, [imageMode]);

  function init() {
    map();
  }
  
  function map() {
    const center = new naver.maps.LatLng(37.5566195, 126.9963008);
    const mapOptions = {
      center,
      zoom: 14,
      zoomControl: true,
      zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT
      }
    };
    
    const map = new naver.maps.Map('map', mapOptions);

    const marker = new naver.maps.Marker({
      position: center,
      map: map
    });
  }

  function handleImageClick(photoIndex: number) {
    setImageIndex(photoIndex);
    setImageMode(true);
  }

  return (
    <>
      <ImageViewer 
        imageMode={imageMode}
        setImageMode={setImageMode}
        photos={photos}
        photoBaseUrl={photoBaseUrl}
        imageIndex={imageIndex}
      />
      <Toast 
        text=""
        visible={false}
        level={ToastLevel.success}
      />
      <div className="main" >

        {/* 머릿말 */}
        {/* <div className="header">
          <div className="abstract">
            <div className="mark">WEDDING INVITATION</div>
            <div className="who"><span>AAA </span><div className="line"><div className="stroke"></div></div><span> BBB</span></div>
          </div>
        </div> */}

        {/* 대문사진 */}
        <div className="intro">
          <div className="overlay" />
          <div className="border" />
          <img src={introImageUrl} className="image" />
        </div>

        <div className="context">

          {/* 장소/일시 */}
          {/* <div className="abstract">
            <div className="who">Seokmo and Jiyul</div>
            <div className="when">2024년 6월 22일 토요일 오전 11시 30분</div>
            <div className="where">충무로 라비두스</div>
          </div> */}

          {/* 초대글 */}
          {/* <p className="category font-script">
            Invitation
          </p>          
          <div className="quote">
            {quoteText.split("\n").map((it, index) => <p key={index} className="contents">{it}</p>)}
            <p className="contents">{quoteReference}</p>
          </div> */}


          {/* 중간 사진 */}
          {/* <div className="bridge-image">
            <img src={bridgeImageUrl}/>
          </div> */}


          {/* 사진첩 */}
          {/* <div className="gallery">
            <p className="category font-script">
              Gallery
            </p>
          </div>

          <div className="photo">
            <div className="scrollable">
              {[...new Array(photoRows).keys()].map((row, index) => {
                  return <div className="photo-row" key={index}>
                    {
                      [...new Array(photoColumns).keys()].map((col, index2) => {
                        let photoIndex = row + col * photoRows;
                        let extraIndex = 0;
                        if (photoIndex > 0) {
                          extraIndex = [...new Array(photoIndex).keys()]
                            .map(it => photosContinuable.includes(photos[it]) ? Number(1) : Number(0))
                            .reduce((acc, s) => acc + s);
                          photoIndex = photoIndex + extraIndex;
                        }

                        console.log(photoIndex, extraIndex);
                        if (photoIndex < photos.length) {
                          const photoUrl = `${photoBaseUrl}/${photos[photoIndex]}.jpg`;
                          let nextPhotoUrl = '';
                          if (photoIndex + 1 < photos.length && photosContinuable.includes(photos[photoIndex])) {
                            nextPhotoUrl = `${photoBaseUrl}/${photos[photoIndex + 1]}.jpg`;
                          }
                          return <div className="item" key={index2}>
                            {
                              nextPhotoUrl.length !== 0 ?
                              <>
                                <img src={photoUrl} onClick={(_) => handleImageClick(photoIndex)}/>
                                <img src={nextPhotoUrl} onClick={(_) => handleImageClick(photoIndex + 1)}/>
                              </> :
                              <img src={photoUrl} onClick={(_) => handleImageClick(photoIndex)}/>
                            }
                          </div>;
                        } else {
                          return <div className="item" key={index2}></div>;
                        }
                      })
                    }
                  </div>; 
              })}
            </div>
          </div> */}
            
          {/* 지도 */}
          <div className="location">
            <p className="category font-script">
              Location
            </p>
          </div>
          <Map
            assetsBaseUrl={assetsBaseUrl}
          />
          {/* <div className="information">
            {informations.map((it, index) => {
              return <div className="container" key={index}>
                <div>
                  <p className="subtitle">
                    {it[0]}
                  </p>
                </div>
                <div>
                  {(it[1] as string[]).map((row, index2) => {
                    const rows = row.split("\n");
                    return <p className="item" key={index2}>
                      {rows[0]}
                      {rows.length > 1 ? <>
                        <br />
                        {rows.slice(1).map((inner, index3) => <span key={index3} className="inner">{inner}</span>)}
                      </> : <></>}
                    </p>;
                  }
                  )}
                </div>
              </div>;
            })}
          </div> */}
          
          
          {/* <div className="tail">
            <p className="contents">
              Seokmo & Jiyul
            </p>
          </div> */}

        </div>
      </div>
    </>
  );
}

export default App;

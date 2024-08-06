import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import 'react-slideshow-image/dist/styles.css';
import Map from './Map';

declare const naver: any;

function App() {
  const inviteText = "여름의 첫 만남, 가을의 새로운 시작\n" +
    "서로를 통해 나를 발견하는\n" +
    "우리만의 여행을 시작하려 합니다.\n" +
    "\n" +
    "이 특별한 순간에 함께해 주실\n" +
    "고마운 분들을 초대합니다.\n";
  const inviteText2 = "2024년 10월 6일 일요일 오후 1시\n" +
    "용산 가족 공원";
  const informations = [
    ["자가용 안내", ["국립중앙박물관 지하주차장 이용", "소액의 주차비용 발생, 양해 부탁드립니다.\n 최초 2시간 2000원, 초과 30분당 500원"]],
    ["대중교통 안내", ["4호선 이촌역 2번출구", "경의중앙선 서빙고역 1번출구 도보 10분 이내\n 서울역에서 오시는 경우,\n 4호선이나 502번 버스를 이용 부탁드립니다."]],
    ["피로연 안내", ["국립중앙박물관 거울못식장 오후 2시"]],
    ["화환 반입", ["공원 운영정책에 따라 정중히 사양합니다."]]
  ];
  const tailText = "저희의 행복한 순간을\n" +
    "함께 축하해 주셔서 감사합니다.\n" +
    "소중한 날, 함께 기쁨을 나눠요."

     

  const assetsBaseUrl = "/assets";
  const photoBaseUrl = `${assetsBaseUrl}/photos`;
  const introImageUrl = `${photoBaseUrl}/top.gif`;


  useEffect(() => {
    init();
  }, []);

  function init() {
    map();
  }
  
  function map() {
    const center = new naver.maps.LatLng(37.521403, 126.983701);
    const mapOptions = {
      center,
      zoom: 14,
      zoomControl: true,
      zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT
      }
      // size: new naver.maps.Size(335, 300)
    };
    
    const map = new naver.maps.Map('map', mapOptions);
    const marker = new naver.maps.Marker({
      position: center,
      map: map
    });
    resize();
    window.addEventListener('resize', resize);
    function resize() {
        var mapWidth = window.innerWidth * 0.9;
        var mapHeight = 300;

        if (mapWidth >= 490) {
            mapWidth = 435;
        }
        map.setSize(new naver.maps.Size(mapWidth, mapHeight));
    }
  }

  return (
    <>
      <div className="main" >
        {/* 대문사진 */}
        <div className="intro">
          <div className="overlay" />
          <div className="border" />
          <img src={introImageUrl} className="image" />
        </div>

        {/* 초대글 */}       
        <div className="invitation">
          <p className="category font-script">
            대한과 지수 결혼합니다.
          </p>   
          {inviteText.split("\n").map((it, index) => <p key={index} className="contents">{it.trim() === '' ? <span>&nbsp;</span> : it}</p>)}
          {inviteText2.split("\n").map((it, index) => <p key={index} className="contents-where">{it.trim() === '' ? <span>&nbsp;</span> : it}</p>)}
        </div>

        {/* 지도 */}
        <div className="location">
          <p className="category1"> 용산가족공원 연못 옆</p>
          <p className="category2"> 버드나무 아래</p>
          <p className="contents1"> 서울 용산구 서빙고로 137 </p>
          <p className="contents2"> 국립중앙박물관 옆 용산가족공원 </p>
          <p className="contents3"> 정확한 위치는 아래 지도 링크로 확인해 주세요. </p>
          {/* {locationText.split("\n").map((it, index) => <p key={index} className="contents"> {it.trim() === '' ? <span>&nbsp;</span> : it} </p>)} */}
          <p className="overlay">
            <Map
            assetsBaseUrl={assetsBaseUrl}
            />
          </p>
        </div>
        <div className="information">
          <p className="contents"> <span>&nbsp;</span> </p>
          <p className="contents"> <span>&nbsp;</span> </p>

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
        </div>
        
        <div className="tail">
          {tailText.split("\n").map((it, index) => <p key={index} className="contents">{it}</p>)}
          <p className="contents"> <span>&nbsp;</span> </p>
          <p className="contents"> <span>&nbsp;</span> </p>
          <p className="contents"> <span>&nbsp;</span> </p>
        </div>

      </div>
    </>
  );
}

export default App;

import React, { useState, MouseEvent } from "react";

type MapProps = {
    assetsBaseUrl: string
};

const Map = ({assetsBaseUrl}: MapProps) => {
    const [isMapApi, setIsMapApi] = useState(true);

    // function handleToggleMap() {
    //   setIsMapApi(!isMapApi);
    // }

    function handleClickLink(e: MouseEvent<HTMLDivElement>) {
      let link = null;
      switch (e.currentTarget.getAttribute('data-name')) {
        case 'navermap':
          link = 'https://naver.me/Fr7LMHB5';
          break;
        case 'tmap':
          link = 'https://poi.tmobiweb.com/app/share/position?contents=dHlwZT0yJnBvaU5hbWU97ISc7Jq47Yq567OE7IucIOyaqeyCsOq1rCDshJzruZnqs6DroZwgMTg1JmNlbnRlclg9NDU3MTQ4OCZjZW50ZXJZPTEzNTA2NjgmdGltZT0yMDI064WEIDjsm5QgNOydvCAxOToxNw==&tailParam=%7B%7D';
          break;
        default:
          break;
      }

      if (link) {
        const w = window.open(link, '_blank');
      }
    }

    return <div className="maps">
      {/* <div className="controls">
        <input type="button" value={isMapApi ? "약도보기" : "지도보기"} onClick={handleToggleMap} />
      </div> */}
      <div id="map" className="map" style={!isMapApi ? {'display': 'none'} : {}} />
      {/* <div className="map-simple" style={isMapApi ? {'display': 'none'} : {}} >
        <img src={`${assetsBaseUrl}/map.png`} />
      </div> */}
      <div className="links">
        <div className="link" style={{'flex': '3 0'}} data-name="navermap" onClick={handleClickLink}>
          <div className="image"><div className="inner"><img src={`${assetsBaseUrl}/navermap.png`}/></div></div>
          <div className="vendor">네이버 지도</div>
        </div>
        <div className="divider"><div className="stroke"></div></div>
        <div className="link" style={{'flex': '2 0'}}  data-name="tmap" onClick={handleClickLink}>
          <div className="image"><div className="inner"><img src={`${assetsBaseUrl}/tmap.png`}/></div></div>
          <div className="vendor">티맵</div>
        </div>
      </div>
    </div>;
};

export default Map;

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
          link = 'https://naver.me/5y4YgZIV';
          break;
        case 'kakaonavi':
          link = 'https://kko.to/IIwrtCXlj0';
          break;
        case 'tmap':
          link = 'https://poi.tmobiweb.com/app/share/position?contents=dHlwZT0yJnBrZXk9MjE3NTE2MDAmcG9pSWQ9MjE3NTE2Jm5hdlNlcT0wJnBvaU5hbWU97Jqp7IKw6rCA7KGx6rO17JuQJmNlbnRlclg9NDU3MTQ3NSZjZW50ZXJZPTEzNTA2MTkmdGltZT0yMDI064WEIDfsm5QgMTHsnbwgMTI6MzEmdGVsPTAyLTc5Mi01NjYxJmFkZHI97ISc7Jq4IOyaqeyCsOq1rCDshJzruZnqs6DroZwgMTM3&tailParam=%7B%22reqMode%22%3A%221100%22%2C%22reqType%22%3A%221100%22%2C%22extra%22%3A%22112%22%7D';
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
        {/* <div className="divider"><div className="stroke"></div></div>
        <div className="link" style={{'flex': '3 0'}} data-name="kakaonavi" onClick={handleClickLink}>
          <div className="image"><div className="inner"><img src={`${assetsBaseUrl}/kakaonavi.png`}/></div></div>
          <div className="vendor">카카오맵</div>
        </div> */}
        <div className="divider"><div className="stroke"></div></div>
        <div className="link" style={{'flex': '2 0'}}  data-name="tmap" onClick={handleClickLink}>
          <div className="image"><div className="inner"><img src={`${assetsBaseUrl}/tmap.png`}/></div></div>
          <div className="vendor">티맵</div>
        </div>
      </div>
    </div>;
};

export default Map;

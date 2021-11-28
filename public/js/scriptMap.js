// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;

function initMap() {
  var central={ lat: 20.37597562055009, lng: -100.00194400567287}
  var hidalgo1= {lat: 20.378218553901874, lng: -99.9994254039627}
  var hidalgo2= {lat: 20.37956665045573, lng: -99.99967883423717}
  var hidalgo3= {lat: 20.38451557973112, lng: -99.99772725137376}
  var fernando= {lat: 20.385016209524412, lng: -99.99643061716236}
  var juarez1= {lat: 20.386153101838076, lng: -99.99423168931185}
  var juarez2= {lat: 20.38644999689154, lng: -99.99543224228067}
  var juarez3= {lat: 20.384142599873257, lng: -99.99023576653777}
  var juarez4= {lat: 20.380621001482247, lng: -99.98695490712353}
  var avCentral= {lat: 20.380351170643454, lng: -99.98548631418785}
  var avCentral1= {lat: 20.38009912702484, lng: -99.98584619243121}
  var mina= {lat: 20.391659225339094, lng: -99.99500836566718}
  var hidalgo4= {lat: 20.393238132116345, lng:-99.9960656361272}
  var constituyentes1= {lat: 20.395114717861684, lng: -99.98800767228329}
  var constituyentes2= {lat:20.398726827615015, lng: -99.98745997313797}
  var constituyentes3= {lat:20.411409887063343, lng: -99.98514077161305}
  var avCentral2= {lat: 20.41596479235699, lng:-99.98073265914392}
  var sanPedro={lat: 20.43180712320998, lng: -99.98192596588257}
  var constituyentes4= {lat: 20.414750462091757, lng: -99.98305823981914}
  var constituyentes5= {lat: 20.399897864165847, lng: -99.98741403642262}
  var constituyentes6= {lat: 20.395746214774796, lng: -99.98815607132336}
  var noviembre= {lat: 20.3935257089466, lng: -99.99334318581174}
  var mayo1= {lat: 20.392515161382693, lng: -99.99385991752682}
  var mayo2= {lat:20.3889525105725, lng: -99.99097240965224}
  var pino= {lat: 20.389228144060535, lng: -99.99107109122309}
  var articulo= {lat: 20.384747849328576, lng: -99.99034136836833}
  var avCentral3= {lat: 20.3859629069068, lng: -99.9850341362268}
  var avCentral4= {lat: 20.387793244692876, lng: -99.98443868584532}
  var rio1={lat: 20.388037120482796, lng: -99.98497244540475}
  var avCentral5= {lat: 20.389339460921693, lng: -99.98456474966235}
  var universidad1= {lat: 20.391765606344773, lng: -99.98486247483548}
  var universidad2= {lat: 20.39156950482396, lng: -99.98351064157872}
  var avCentral6= {lat: 20.391974278210178, lng: -99.98421874471309}
  var avCentral7= {lat: 20.39219300624186, lng: -99.98385664651973}
  var avCentral8= {lat: 20.39470961338712, lng: -99.98385664648976}
  var avCentral9= {lat: 20.39486297173096, lng: -99.9835079593357}
  var avCentral10= {lat: 20.398772301012436, lng: -99.98343553966144}
  var avCentral11= {lat: 20.39864660065188, lng: -99.98308685251229}
  var avCentral12= {lat: 20.404249139320243, lng: -99.98270004681203}
  var avCentral13= {lat: 20.410527709696044, lng: -99.98153629878314}
  var universidad3= {lat: 20.391159364762377, lng: -99.9785027459992}
  var rio2= {lat: 20.38673979334471, lng: -99.96908418983632}
  var rio3= {lat: 20.387116688526504, lng: -99.97151943468174}
  var avCentral14= {lat: 20.376574573993857, lng: -99.98632367441591}


  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20.388735320790836, lng: -99.9963762821395 },
    zoom: 15,
  });
  infoWindow = new google.maps.InfoWindow();
  


  //central
  const centralAutobuses = new google.maps.Marker({
    position: central,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const hidalgoUno = new google.maps.Marker({
    position: hidalgo1,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  }); 
  const hidalgoDos = new google.maps.Marker({
    position: hidalgo2,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const hidalgoTres = new google.maps.Marker({
    position: hidalgo3,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const fernandoUno = new google.maps.Marker({
    position: fernando,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const juarezUno = new google.maps.Marker({
    position: juarez1,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const juarezDos = new google.maps.Marker({
    position: juarez2,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const juarezTres = new google.maps.Marker({
    position: juarez3,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const juarezCuatro = new google.maps.Marker({
    position: juarez4,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const aveCentral = new google.maps.Marker({
    position: avCentral,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const centralUno = new google.maps.Marker({
    position: avCentral1,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const minaUno = new google.maps.Marker({
    position: mina,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const hidalgoCuatro = new google.maps.Marker({
    position: hidalgo4,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const constituyentesUno = new google.maps.Marker({
    position: constituyentes1,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const constituyentesDos = new google.maps.Marker({
    position: constituyentes2,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const constituyentesTres = new google.maps.Marker({
    position: constituyentes3,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const centralDos = new google.maps.Marker({
    position: avCentral2,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const Pedro = new google.maps.Marker({
    position: sanPedro,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const constituyentesCuatro = new google.maps.Marker({
    position: constituyentes4,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const constituyentesCinco = new google.maps.Marker({
    position: constituyentes5,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const constituyentesSeis = new google.maps.Marker({
    position: constituyentes6,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const noviembreUno = new google.maps.Marker({
    position: noviembre,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const mayoUno = new google.maps.Marker({
    position: mayo1,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const mayoDos = new google.maps.Marker({
    position: mayo2,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const pinoUno = new google.maps.Marker({
    position: pino,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const articuloUno = new google.maps.Marker({
    position: articulo,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const centralTres = new google.maps.Marker({
    position: avCentral3,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const centralCuatro = new google.maps.Marker({
    position: avCentral4,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const rioUno = new google.maps.Marker({
    position: rio1,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const centralCinco = new google.maps.Marker({
    position: avCentral5,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const universidadUno = new google.maps.Marker({
    position: universidad1,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const universidadDos = new google.maps.Marker({
    position: universidad2,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const centraSeis = new google.maps.Marker({
    position: avCentral6,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const centralSiete = new google.maps.Marker({
    position: avCentral7,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const centralOcho = new google.maps.Marker({
    position: avCentral8,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const centralNueve = new google.maps.Marker({
    position: avCentral9,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const centralDiez = new google.maps.Marker({
    position: avCentral10,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const centralOnce = new google.maps.Marker({
    position: avCentral11,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const centralDoce = new google.maps.Marker({
    position: avCentral12,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const centralTrece = new google.maps.Marker({
    position: avCentral13,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const universidadTres = new google.maps.Marker({
    position: universidad3,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const rioDos = new google.maps.Marker({
    position: rio2,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const rioTres = new google.maps.Marker({
    position: rio3,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });
  const centralCatorce = new google.maps.Marker({
    position: avCentral14,
    map: map,
    icon: 'http://localhost:3000/public/images/bus.png',
  });



 
  

  navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.open(map);
          map.setCenter(pos);

          const ubicacion = new google.maps.Marker({
            position: pos,
            map: map,
            icon:'/public/images/Ubicacion.png',
          });
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
  infoWindow.open(map);
}
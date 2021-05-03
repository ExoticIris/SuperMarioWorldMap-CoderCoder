function initMap(){
 map= new google.maps.Map(document.getElementById('map'),{
     center: {
         lat: 34.66796551509472, 
        lng: 135.4305195049081}, 
        
     zoom: 17,
     mapId: '74473bd09eac9b6f',
     mapTypeControl: false,
     fullscreenControl: false,
     streetViewControl: false,
    }
     );

     //Name
     //Lat, Long
     // Image URL
     //scaledSize width, heights
     const markers=[

        ["Yoshi\'s House", 34.66826090984771,135.43042894931844, "yoshi_house.svg", 38,31],
        ['Donut Plains',34.66829411443392,135.43231361996433,'hill_with_eyes.svg',	50,	60.7],
        ['Donut Plains', 34.6683781779677,135.43217016043528,'hill_with_eyes.svg',50,60.7],
        ['Castle', 34.66775608022106, 135.43139547897843, 'castle.svg', 40, 53],
        ['Warp Pipe', 34.66739738878135, 135.43225049775214, 'pipe.svg', 38, 42.5],
		['Star World', 34.667959023359266, 135.42866400953733, 'star.svg', 38, 38],
        ['You Are Here',34.66767112713121,135.4297887322531,'pointer.svg',30,47.8],
		['Ghost House',	34.66832715150856,135.43292762674864,		'ghosthouse.svg',40,48],
        ['Warp Pipe', 34.66887157250361, 135.42974778374477, 'pipe.svg', 38, 42.5],
        

     ];

     //Marker Loop
     for(let i=0; i<markers.length; i++){

        const currMarker = markers[i];

        const marker= new google.maps.Marker({
            position: {
                lat: currMarker[1], 
               lng: currMarker[2]},
            map,
            title:currMarker[0],
                icon: {
                url:currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4],currMarker[5])
            },
            animation: google.maps.Animation.DROP,
          });

          const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
          });
    
         marker.addListener("mouseover", () => {
            infowindow.open(map, marker);
          });
          marker.addListener("mouseout", () => {
            infowindow.close(map, marker);
          });
     }

     

      
}



function updateMap() {
    console.log("Updating map with realtime data")
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            // console.log(rsp.data)
            data.forEach(element => {
               let latitude = element.latitude;
               let longitude = element.longitude;

               let cases = element.infected;
               let color;

                if (cases>255){
                    color = "rgb(255, 0, 0)";
                }

                else{
                    color = `rgb(${cases}, 0, 0)`;
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map); 
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

let interval = 20000;
setInterval( updateMap, interval); 
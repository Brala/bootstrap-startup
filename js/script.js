// ------------------------------------------------------------------------------
// ---------------------------     Google Maps     ------------------------------
// ------------------------------------------------------------------------------

function initMap() {
    //Map location parameters
    var location = {
        lat: 52.236162,
        lng: 21.03294
    };
    //New map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });

    // Listen for click on map
    google.maps.event.addListener(map, 'click',
        function (event) {
            // Add Marker
            addMarker({
                coords: event.latLng
            });
        })

    //Array of new markers to Add
    var markers = [{
            coords: {
                lat: 52.236162,
                lng: 21.03294
            },
        },
        {
            coords: {
                lat: 52.3204427,
                lng: 20.9538095
            },
            iconImage: 'http://lovequoteslove.cdnsw.netdna-cdn.com/wp-content/themes/lovequotes-V3/images/default-thumb-50.png',
            content: '<h1>Home, <br>Sweet home.</h1>'
        }
    ];

    // Loop through markers to call Add functions
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    };

    // Add marker function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: props.iconImage
        });
        //Check for custom icon
        if (props.iconImage) {
            //set icon image
            marker.setIcon(props.iconImage);
        }
        //
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: '<h1>Home, <br>Sweet home.</h1>'
            });
            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }

    }
};
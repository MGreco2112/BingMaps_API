let bingMapsKey = localStorage.apiKey ? localStorage.apiKey : "";

const geocode = () => {
    //create HTML Input element "input" with Submit button

    const query = document.getElementById("input").value;

    const geocodeRequest = "http://dev.virtualearth.net/REST/v1/Locations?query=" + encodeURIComponent(query) + "&jsonp=GeocodeCallback&key=" + bingMapsKey;

    CallRestService(geocodeRequest, GeocodeCallback);
}

const GeocodeCallback = (response) => {
    //create HTML element "output"

    const output = document.getElementById("output");

    
    if (response &&
        response.resourceSets &&
        response.resourceSets.length > 0 &&
        response.resourceSets[0].resources) {
            


    }
}
console.log(Api_Key);

let bingMapsKey = localStorage.apiKey ? localStorage.apiKey : Api_Key;

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
            
        const results = response.resourceSets[0].resources;

        console.log(results);

        let table = [`<table><tr><td>Name</td><td>Latitude</td><td>Longitude</td></tr>`]

        for (let i = 0; i < results.length; i++) {
            table.push(`<tr><td> ${results[i].address.formattedAddress} </tr></td> <tr><td> ${results[i].bbox[0]} </tr></td> <tr><td> ${results[i].bbox[2]} </tr></td>`);
        }

        table.push('</table>');

        output.innerHTML = table.join('');
    } else {
        output.innerHTML = "No results found.";
    }
}

const CallRestService = (request) => {
    let script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", request);
    document.body.appendChild(script);
}
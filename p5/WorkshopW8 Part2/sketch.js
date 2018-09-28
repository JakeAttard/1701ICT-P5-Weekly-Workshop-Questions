let data = [];
let minLat = null;
let maxLat = null;
let minLong = null;
let maxLong = null;
let coords = [];
let scale = 1000;

function preload(){
    data = loadJSON('data.json');
}

function setup(){
    for(let i = 0; i < data.features.length; i++){
        let long = data.features[i].geometry.coordinates[0]
        let lat = data.features[i].geometry.coordinates[1]
        
        // Check our min and max longitudes
        if(minLong == null || long < minLong){
            minLong = long;
        }
        if (maxLong == null || long > maxLong){
            maxLong = long;
        }
        
        if(minLat == null || lat < minLat){
            minLat = lat;
        }
        if (maxLat == null || lat > maxLat){
            maxLat = lat;
        }
        
        coords.push([long, lat])
    }
    
    console.log("minLat: " + minLat);
    console.log("maxLat: " + maxLat);
    console.log("minLong: " + minLong);
    console.log("maxLong: " + maxLong);
    
    createCanvas((maxLong - minLong)*scale, (maxLat - minLat)*scale);
    console.log(width);
    console.log(height);
}

function draw(){
    background('grey');
    
    for(let i = 0; i < coords.length; i++){
        let coord = coords[i];
        let x = coord[0] - minLong;
        let y = coord[1] - minLat;
        ellipse(x * scale, y * scale, 3);
    }
}
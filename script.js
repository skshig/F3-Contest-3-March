let value = document.getElementById('map')
//this function gets location of the user only if geolocation is supported on their browser
function getLocation(){
    if(navigator.geolocation){//checks if browser supports geolocation by checking if condition is getting a value
        navigator.geolocation.getCurrentPosition(showPositon);
        // console.log(navigator);
    }
    else {
        value.innerHTML = "Geolocation is not supported by your browser.";
    }
}

function showPositon(position){
    //getting coordinates
    value.innerHTML = "<b>Latitude: " + position.coords.latitude + "<b><br>Longitude: " + position.coords.longitude;
    //setting coordinates in local storage 
    localStorage.setItem("Lat", JSON.stringify(position.coords.latitude));
    localStorage.setItem("Long", JSON.stringify(position.coords.longitude));
    //disabling btn if local storage already has value of coordinates
    if(localStorage.getItem('Lat') && localStorage.getItem("Long")){
        document.getElementById('btn').disabled = true;
    }
}

//function to remove existing coordinate value from local storage
function removeLocation(){
    localStorage.removeItem('Lat');
    localStorage.removeItem('Long');
    //as sson as remove btn is clicked, the disabled btn agian becomes clickable
    document.getElementById('btn').disabled = false;
    //removing existing values from screen when remove btn clicked
    document.getElementById('map').remove();
}

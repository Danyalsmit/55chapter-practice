function makeBig(){
    var image=document.getElementById("car");
    image.className ="Big-car"
    console.log(image)

}
var zoom = false;
function zoomImage(){
    var image=document.getElementById("car");
    console.log(image.className)
    console.log(image.style.padding)

    if(zoom){
        image.className="car";
        zoom=false
    }else{
        image.className += "zoom-car"
        zoom=true

    }

}
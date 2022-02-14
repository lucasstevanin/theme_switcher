function switchColorMode(){
    let checkboxSwitch = document.getElementById("toggle")
    var slider = document.getElementById("sliderMain")
    
    if(checkboxSwitch.checked){
        document.body.style.background = "#292C35"
        slider.style.background = "#111 url('assets/moon.svg') left 16px center / 100px no-repeat" 
    }else{
        document.body.style.background = "white"
        slider.style.background = "#111 url('assets/sun.svg') right 16px center / 100px no-repeat" 
    }
}

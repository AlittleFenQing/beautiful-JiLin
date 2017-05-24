var nav_logo=document.getElementsByClassName('nav_logo')[0];
var nav_ul_scenery = document.getElementsByClassName("nav_ul_scenery")[0];
nav_logo.onclick=function () {
    if(nav_ul_scenery.style.display == "block")
        nav_ul_scenery.style.display = "none";
    else
        nav_ul_scenery.style.display = "block";
}


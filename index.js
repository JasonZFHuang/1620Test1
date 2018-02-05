var zoomHeight = 70
var zoomWidth = 100
var ImageSet = 0

document.getElementById("buttonBG1").addEventListener("click",function(){
    ImageSet = 1
    document.getElementById("ch1").style.backgroundImage="url('imgs/i1.jpg')";
    document.getElementById("ch2").style.backgroundImage="url('imgs/i2.jpg')";
    document.getElementById("ch3").style.backgroundImage="url('imgs/i3.jpg')";
});

document.getElementById("buttonBG2").addEventListener("click",function(){
    ImageSet = 2
    document.getElementById("ch1").style.backgroundImage="url('imgs/i4.jpg')";
    document.getElementById("ch2").style.backgroundImage="url('imgs/i5.jpg')";
    document.getElementById("ch3").style.backgroundImage="url('imgs/i6.jpg')";
});

document.getElementById("buttonBG3").addEventListener("click",function(){
    ImageSet = 3
    document.getElementById("ch1").style.backgroundImage="url('imgs/i7.jpg')";
    document.getElementById("ch2").style.backgroundImage="url('imgs/i8.jpg')";
    document.getElementById("ch3").style.backgroundImage="url('imgs/i9.jpg')";
});

document.getElementById("buttonBG4").addEventListener("click",function(){
    ImageSet = 4
    document.getElementById("ch1").style.backgroundImage="url('imgs/i10.jpg')";
    document.getElementById("ch2").style.backgroundImage="url('imgs/i11.jpg')";
    document.getElementById("ch3").style.backgroundImage="url('imgs/i12.jpg')";
});

document.getElementById("ch1").addEventListener("mouseenter",function(){
    document.getElementById("zoom").style.backgroundImage=document.getElementById("ch1").style.backgroundImage
});

document.getElementById("ch2").addEventListener("mouseenter",function(){
    document.getElementById("zoom").style.backgroundImage=document.getElementById("ch2").style.backgroundImage
});

document.getElementById("ch3").addEventListener("mouseenter",function(){
    document.getElementById("zoom").style.backgroundImage=document.getElementById("ch3").style.backgroundImage
});

document.getElementById("zoom").addEventListener("click",function(){
    document.getElementById("zoomcontrols").style.display="block"
});

document.getElementById("zoomControlsPlus").addEventListener("click",function(){
    zoomWidth = zoomWidth + 10
    zoomHeight = zoomHeight + 7
    document.getElementById("zoom").style.width=zoomWidth+"%"
    document.getElementById("zoom").style.height=zoomHeight+"%"
});

document.getElementById("zoomControlsMinus").addEventListener("click",function(){
    zoomWidth = zoomWidth - 10
    zoomHeight = zoomHeight - 7
    document.getElementById("zoom").style.width=zoomWidth+"%"
    document.getElementById("zoom").style.height=zoomHeight+"%"
});

document.getElementById("buttonNext").addEventListener("click",function(){
    if (ImageSet == 0) {
        ImageSet = 1
        document.getElementById("ch1").style.backgroundImage="url('imgs/i1.jpg')";
        document.getElementById("ch2").style.backgroundImage="url('imgs/i2.jpg')";
        document.getElementById("ch3").style.backgroundImage="url('imgs/i3.jpg')";
    }
    else if (ImageSet == 1) {
        ImageSet = 2
        document.getElementById("ch1").style.backgroundImage="url('imgs/i4.jpg')";
        document.getElementById("ch2").style.backgroundImage="url('imgs/i5.jpg')";
        document.getElementById("ch3").style.backgroundImage="url('imgs/i6.jpg')";
    }
    else if (ImageSet == 2) {
        ImageSet = 3
        document.getElementById("ch1").style.backgroundImage="url('imgs/i7.jpg')";
        document.getElementById("ch2").style.backgroundImage="url('imgs/i8.jpg')";
        document.getElementById("ch3").style.backgroundImage="url('imgs/i9.jpg')";
    }
    else if (ImageSet == 3) {
        ImageSet = 4
        document.getElementById("ch1").style.backgroundImage="url('imgs/i10.jpg')";
        document.getElementById("ch2").style.backgroundImage="url('imgs/i11.jpg')";
        document.getElementById("ch3").style.backgroundImage="url('imgs/i12.jpg')";
    }
    else if (ImageSet == 4) {
        ImageSet = 1
        document.getElementById("ch1").style.backgroundImage="url('imgs/i1.jpg')";
        document.getElementById("ch2").style.backgroundImage="url('imgs/i2.jpg')";
        document.getElementById("ch3").style.backgroundImage="url('imgs/i3.jpg')";
    }
});

document.getElementById("buttonPrevious").addEventListener("click",function(){
    if (ImageSet == 0) {
        ImageSet = 4
        document.getElementById("ch1").style.backgroundImage="url('imgs/i10.jpg')";
        document.getElementById("ch2").style.backgroundImage="url('imgs/i11.jpg')";
        document.getElementById("ch3").style.backgroundImage="url('imgs/i12.jpg')";
    }
    else if (ImageSet == 4) {
        ImageSet = 3
        document.getElementById("ch1").style.backgroundImage="url('imgs/i7.jpg')";
        document.getElementById("ch2").style.backgroundImage="url('imgs/i8.jpg')";
        document.getElementById("ch3").style.backgroundImage="url('imgs/i9.jpg')";
    }
    else if (ImageSet == 3) {
        ImageSet = 2
        document.getElementById("ch1").style.backgroundImage="url('imgs/i4.jpg')";
        document.getElementById("ch2").style.backgroundImage="url('imgs/i5.jpg')";
        document.getElementById("ch3").style.backgroundImage="url('imgs/i6.jpg')";
    }
    else if (ImageSet == 2) {
        ImageSet = 1
        document.getElementById("ch1").style.backgroundImage="url('imgs/i1.jpg')";
        document.getElementById("ch2").style.backgroundImage="url('imgs/i2.jpg')";
        document.getElementById("ch3").style.backgroundImage="url('imgs/i3.jpg')";
    }
    else if (ImageSet == 1) {
        ImageSet = 4
        document.getElementById("ch1").style.backgroundImage="url('imgs/i10.jpg')";
        document.getElementById("ch2").style.backgroundImage="url('imgs/i11.jpg')";
        document.getElementById("ch3").style.backgroundImage="url('imgs/i12.jpg')";
    }
});
let gallery = document.querySelector('.gallery');
let images = document.querySelector('.imgGallery');
let pagesNumb = document.querySelector("#PageNumber");
let index = 0


function ChangeSlide(index) {
    let translateX = -index * 100 + "%"

    images.style.transform = "translateX(" + translateX + " )";
    
}


function Back() {
    if (index>0){
        index--
        ChangeSlide(index)
        pagesNumb.innerHTML=index+1

    }
}


function Next(){
    if (index<images.children.length-1){
        index++
        ChangeSlide(index) 
        pagesNumb.innerHTML=index+1
    }
    
}


ChangeSlide(index)



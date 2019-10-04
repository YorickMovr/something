const SLIDE_HIDDEN = 'slide_hiden';
const SLIDE_SHOWN = 'slide_shown';

class Gallery{
    constructor(slides){
        this.slides = slides;
        this.currentSlide = 0;
        this.doSlider();
    };

    get images (){
        return this.slides.children;
    };

    get slidesCount (){
        return this.images.length;
    }

};

Gallery.prototype.doSlider = function(){

};

Gallery.prototype.CreateSlides = function(){

}
















const myGallery = new Gallery(
                        document.getElementById('container')
                        )

/* Опциональное задание - реализовать такие методы */

// myGallery.show(2);
// myGallery.next();
// myGallery.prev();
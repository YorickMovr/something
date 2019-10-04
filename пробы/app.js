class Gallery{
    constructor(slides){
        this.slides = slides;
        this.currentSlide = 0;
        this.createSlides();
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
    // let slideInterval = setInterval(() => this.showNextSlide(), 3000);
    previous.onclick = this.showPrevSlide;
    document.addEventListener
};

Gallery.prototype.createSlides = function(){
    this.slides.className = 'slides';
    this.images[0].className = 'slide showing';
    for(i=1; i < this.slidesCount; i++){
        this.images[i].className = 'slide';
    }
};

Gallery.prototype.showNextSlide = function(){
    this.images[this.currentSlide].className = 'slide';
    this.currentSlide = (this.currentSlide +1) % this.slidesCount;
    this.images[this.currentSlide].className = 'slide showing';
}

Gallery.prototype.showPrevSlide = function(){
    this.images[this.currentSlide].className = 'slide';
    this.currentSlide = (this.currentSlide - 1);
    if(this.currentSlide <0){
        this.currentSlide == 5;
    }
    this.images[this.currentSlide].className = 'slide showing';
}
















const myGallery = new Gallery(
                        document.getElementById('container')
                        )

/* Опциональное задание - реализовать такие методы */

// myGallery.show(2);
// myGallery.next();
// myGallery.prev();
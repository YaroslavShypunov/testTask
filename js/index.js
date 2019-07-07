let container = new Vue({
    el: '#mainContainer',
    data: {
        secondSlide: false,
        secondSlideArrow: false,
        show: false,
        backgroundNavbar: false,
        marks: [{id: 2, size: 1, title: 'CARE'}, {id: 3, size: 0, title: 'DESIGN'}, {id: 4, size: 1, title: 'BLEND'}, {id: 5, size: 1, title: 'KOLORYZACJA'}, {id: 6, size: 0, title: 'SO PURE'}],
    },
    mounted(){
        let checkSlide = setInterval(()=> {
            if(window.screen.width <= '760'){
                clearInterval(checkSlide);

            }
            this.secondSlideArrow = this.secondSlide = this.$refs.secondSlide.classList.contains('active');
        }, 500);

    },
    methods: {
        showMenu(){
           this.show = !this.show;
        },
        mouseOver(){
          this.backgroundNavbar = true;
        },
        mouseLeave(){
            this.backgroundNavbar = false;
        }
    },
});
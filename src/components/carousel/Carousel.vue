<template>
  <div class="carousel">

<slot></slot>
<button class="carousel-nav carousel-next" @click.prevent="next"></button>
<button class="carousel-nav carousel-prev" @click.prevent="prev"></button>

<!--Creation pagination
    <div class="carousel-pagination">
        <button></button>
        <button></button>
        <button></button>
    </div>-->

  </div>
</template>

<script>
export default {
name: "Carousel",

data () {
    return {
        index: 0,
        slides: [],
        direction: null
    }
},
mounted () {
    this.slides = this.$children
    this.slides.forEach((slide, i) =>{
        slide.index = i
    })
},

computed: {
    slidesCount () { return this.slides.length }
},

methods: {
    next () {
        this.index++
        this.direction = 'right'
        if(this.index >= this.slidesCount) {
            this.index = 0
        }
    },
    prev () {
        this.index--
        this.direction = 'left'
        if(this.index < 0){
            this.index = this.slidesCount - 1
        }
    },
}
}
</script>

<style>

.carousel {
    position: relative;
}

.carousel-nav{
    position: absolute;
    top: 90%;
    left: 10px;
    background: url(Prev.png);
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    border: none;
    outline-style: none !important;
    
}

.carousel-next{
right: 0;
left: auto;
background: url(next.png);
background-repeat: no-repeat;
}


.carousel-pagination {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
}
.carousel-pagination button{
    display: inline-block;
    width: 30px;
    height: 10px;
    background-color: black;
    opacity: 0.5;
    border-radius: 10px;
}
</style>
<template>
    <section class="py-32">
        <div class="container mx-auto text-left max-md:!max-w-75 max-sm:!max-w-30 max-lg:!max-w-90">
            <div class="w-1/2 max-sm:w-full max-lg:w-full">
                <h2 class="fnt text-4xl mb-8 ">Our Gallery</h2>
                <p class="color">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis! Doloribus aliquam voluptates corporis et tempora consequuntur ipsam, itaque, nesciunt similique commodi omnis. Ad magni perspiciatis, voluptatum repellat.</p>
            </div>
        </div>
    </section>
    <section class="py-32">
        <div class="container mx-auto text-center max-lg:ml-6 max-md:!max-w-75 max-sm:!max-w-30 max-lg:!max-w-90 after:zindex">
            <div class="full_img" id="fullimgBox">
                <img @click= "closeimg" id="fullimg"  src="../components/Images/gallery_8.jpeg">
            </div>
            <div class="grid grid-rows-4 gap-4">
                <div class="img-gallery3">
                    <div class="allignment3">
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_1.jpeg">
                        </div>
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_2.jpeg">
                        </div>
                    </div>
                    <div>
                        <img @click="fullimg " src="../components/Images/gallery_8.jpeg">
                    </div>
                    <div class="allignment3">
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_7.jpeg" alt="">
                        </div>
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_5.jpeg" alt="">
                        </div>
                    </div>
                </div>
                <div class="img-gallery">
                    <div class="allignment3">  
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_5.jpeg" alt="">
                        </div>
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_6.jpeg" alt="">
                        </div>
                    </div>
                    <div class="allignment3">
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_7.jpeg" alt="">
                        </div>
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_8.jpeg" alt="">
                        </div>
                    </div>
                    <div class="h-auto">
                        <img @click="fullimg " src="../components/Images/gallery_9.jpeg" alt="">
                    </div>
                </div>
                <div class="img-gallery3">
                    <div class="allignment3">
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_1.jpeg">
                        </div>
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_2.jpeg">
                        </div>
                    </div>
                    <div>
                        <img @click="fullimg " src="../components/Images/gallery_8.jpeg">
                    </div>
                    <div class="allignment3">
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_7.jpeg" alt="">
                        </div>
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_5.jpeg" alt="">
                        </div>
                    </div>
                </div>
                <div class="img-gallery">
                    <div class="allignment3">  
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_5.jpeg" alt="">
                        </div>
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_6.jpeg" alt="">
                        </div>
                    </div>
                    <div class="allignment3">
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_7.jpeg" alt="">
                        </div>
                        <div>
                            <img @click="fullimg " src="../components/Images/gallery_8.jpeg" alt="">
                        </div>
                    </div>
                    <div class="h-auto">
                        <img @click="fullimg " src="../components/Images/gallery_9.jpeg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name : "Gallery_images",
        methods:{
            fullimg(event){
                let imgbox = document.getElementById('fullimgBox')
                let fullimg = document.getElementById('fullimg')

                imgbox.style.display = 'flex'
                fullimg.src = event.srcElement.getAttribute("src")
            },
            closeimg(){
                let imgbox = document.getElementById('fullimgBox')
                let fullimg = document.getElementById('fullimg')
                imgbox.style.display = "none"
                fullimg.style.cursor = "zoom-out"
                
            }   
        }
    } 
</script>

<style scoped>
    .zindex{
        z-index: 150;
    }
    .img-gallery{
        margin-left: 0;
        margin-right: 0;
        margin-top: auto;
        margin-bottom:auto;
        display: grid;
        grid-template-columns:25% 25% 50%;
        gap: 20px;
    }
    img {
        width: 100%;
        height: 100%;
    }
    .allignment{
        width:100%;
        display: grid;
        grid-template-rows: 50% 50%;
        gap: 10px;
    }
    .img-gallery3{
        margin-left: 0;
        margin-right: 0;
        margin-top: auto;
        margin-bottom:auto;
        width:100%;
        display: grid;
        grid-template-columns: 25% 50% 25%;
        gap:20px;
    }
    .allignment3{
        width:100%;
        display: grid;
        grid-template-rows: 250px 250px;
        gap: 20px;
    }
    .full_img{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        position: fixed;
        top:0;
        left: 0;
        display: none;
        align-items: center;
        justify-content: center;
    }
    .full_img img{
        width: 50%;
        height:80%;
    }
    img:hover{
        cursor: zoom-in;

    }

    @media (max-width:768px) {
        .img-gallery, .img-gallery3{
            grid-template-columns: 100%;
        }
        .allignment, .allignment3 {
            grid-template-rows: 50% 50%;
            height:98%
        }
        .full_img img{
            width: 90%;
            height: 80%;
        }
    }
    @media (max-width:600px) {
        .img-gallery, .img-gallery3{
            grid-template-columns: 100%;
            height: 100%;
        }
        .allignment, .allignment3 {
            grid-template-rows: 50% 50%;
            height:96%
        }
        .full_img img{
            width: 90%;
            height: 50%;
        }
    }
</style>
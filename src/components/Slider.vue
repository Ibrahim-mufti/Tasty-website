<template>
    <section id="slider-section" class="py-32">
        <div class="container mx-auto max-md:!max-w-75 max-sm:!max-w-30 max-lg:!max-w-90" >
            <div class="flex flex-row max-md:flex-col max-lg:flex-col">
                <div class="w-1/2 flex flex-col max-md:w-full max-md:justify-center max-lg:w-full max-lg:justify-center">
                    <div class="mb-32 w-full max-md:mb-16 max-lg:mb-16">
                        <h2 class="headings text-3xl font-normal">Our Best & Unique Menu</h2>
                        <p class="color text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis!</p>
                    </div>
                    <div class="flex justify-end max-md:absolute max-md:justify-center max-md:mx-auto max-md:w-full max-lg:absolute max-lg:justify-center max-lg:w-full">
                        <div id="1" class="active-text w-3/4 max-lg:relative max-lg:z-10 max-lg:top-[600px] max-lg:p-4 max-lg:bg-black max-lg:rounded-xl max-md:relative max-md:z-10 max-md:top-[500px] max-sm:top-[400px] max-md:p-4 max-md:bg-black max-md:rounded-xl">
                            <h2 class="text-3xl font-bold mb-3">Crab with Curry Sources</h2>
                            <p class="color text-lg mb-6 max-sm:hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt eveniet quae, numquam magnam doloribus eligendi ratione rem, consequatur quos natus voluptates est totam magni! Nobis a temporibus, ipsum repudiandae dolorum.</p>
                            <a href="#" class="btn max-sm:hidden">Learn More</a>
                        </div>
                        <div id="2" class="hidden-txt w-3/4 max-lg:relative max-lg:z-10 max-lg:top-[600px] max-lg:p-4 max-lg:bg-black max-lg:rounded-xl max-md:relative max-md:z-10 max-md:top-[500px] max-sm:top-[400px] max-md:p-4 max-md:bg-black max-md:rounded-xl">
                            <h2 class="text-3xl font-bold">Tuna <em>&</em> Roast Beef</h2>
                            <p class="color text-lg mb-6 max-sm:hidden">Ink is a free html5 bootstrap and a multi-purpose template perfect for any type of websites. A combination of a minimal and modern design template. The features are big slider on homepage, smooth animation, product listing and many more.</p>
                            <a href="#" class="btn max-sm:hidden">Learn More</a>
                        </div>
                        <div id="3" class="hidden-txt w-3/4 max-lg:relative max-lg:z-10 max-lg:top-[600px] max-lg:p-4 max-lg:bg-black max-lg:rounded-xl max-md:relative max-md:z-10 max-md:top-[500px] max-sm:top-[400px]  max-md:p-4 max-md:bg-black max-md:rounded-xl">
                            <h2 class="text-3xl font-bold">Egg with Mushrooms</h2>
                            <p class="color text-lg mb-6 max-sm:hidden">Ink is a free html5 bootstrap and a multi-purpose template perfect for any type of websites. A combination of a minimal and modern design template. The features are big slider on homepage, smooth animation, product listing and many more.</p>
                            <a href="#" class="btn max-sm:hidden">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="w-3/5 max-md:w-full max-lg:w-full">
                    <ul class="flex flex-row justify-end mb-3 max-lg:mt-4 max-lg:relative max-lg:!z-20 max-md:mt-4 max-md:relative max-md:!z-20">
                        <li class="mr-2 point link-active"><a class="text-transparent" @click="Activate" href="#img-1" >1</a></li>
                        <li class="mr-2 point"><a class="text-transparent" @click="Activate" href="#img-2" >2</a></li>
                        <li class="point"><a class="text-transparent" @click="Activate" href="#img-3" >3</a></li>
                    </ul>
                    <div id="images" class="flex justify-end max-md">
                        <img class="active" id="img-1" src="./Images/gallery_7.jpeg"/>
                        <img class="hidden-cnt" id="img-2" src="./Images/gallery_6.jpeg"/>
                        <img class="hidden-cnt" id="img-3" src="./Images/gallery_5.jpeg"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
        name : 'Slider',
        methods:{
            Activate(event){
                event.preventDefault();
                // Removing Currently active Class
                let btn = document.querySelector(".link-active")
                btn.classList.remove("link-active")
                document.getElementById(btn.textContent).classList.remove('active-text')
                document.getElementById(btn.textContent).classList.add('hidden-txt')
                document.getElementById(btn.firstChild.getAttribute("href").replace("#", "")).classList.remove("active")
                document.getElementById(btn.firstChild.getAttribute("href").replace("#", "")).classList.add("hidden-cnt")
                
                // Adding classes to both pointer and Text
                event.target.parentElement.classList.add("link-active")
                let id = event.target.text
                let text_id = document.getElementById(id)
                text_id.classList.remove('hidden-txt')
                text_id.classList.add("active-text")

               //Adding class to the Img
                let img_id = event.target.getAttribute('href').replace('#',"")
                let img = document.getElementById(img_id)
                img.classList.remove("hidden-cnt")
                img.classList.add('active')

            }
        }
    }
</script>

<style scoped>
    #images img{
        max-height: 600px;
        width:90%;
        height: 100vw;
        border-radius:5px;
    }
    .point{
        width: 12px;
        height: 12px;
        background-color: red;
        border-radius: 50%;
    }
    .hidden-txt{
        display:none;
    }
    @keyframes fadeIn {
        0% { opacity:0;}
        100% {opacity:1;}
    }
    @keyframes slideup {
        0% {
            transform: translateY(110px);
            opacity:0;
        }
        100% {
            transform: translateY(0px);
            opacity:1;
        }  
    }
    .link-active{
        background-color: black;
        border:2px solid white;
        animation:fadeIn 1s ease backwards;
    }
    .active-text{
        display:block;
        animation:slideup 1.5s forwards, fadeIn 3s ease forwards;
    }
    .hidden-cnt{
        display: none;    }
    .active{
        display: block;
        animation:fadeIn 2s ease forwards;
    }
    .btn {
        padding: 10px 30px;
        border:2px solid red;
    }    
    .btn:hover{
        background: red;
        transition: all .3s ease;
    }
    @media (max-width:768px) {
        #images img{
            max-height: 600px;
            width:100%;
            height: 100vw;
            border-radius:5px;
        }
    }
    @media (max-width:1024px){
        #images img{
            max-height: 600px;
            width: 100%;
            height:100vw;
            border-radius: 5px;
        }
    }
</style>
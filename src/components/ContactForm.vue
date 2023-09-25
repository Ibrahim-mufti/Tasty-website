<template>
        <section class="py-32">
            <div class="container mx-auto text-center max-md:!max-w-75 max-sm:!max-w-30 max-lg:!max-w-90">
                <div>
                    <h2 class="text-4xl fnt font-medium mb-8">Don't be shy, let's chat.</h2>
                    <p class="w-2/3 mb-8 mx-auto text-xl color max-lg:w-full"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae enim quae vitae cupiditate, sequi quam ea id dolor reiciendis consectetur repudiandae. Rem quam, repellendus veniam ipsa fuga maxime odio? Eaque!</p>
                    <a href="#" class="btn">Contact Us</a>
                </div>
            </div>
        </section>
        <section class="py-20">
            <div class="container mx-auto left max-md:!max-w-75 max-sm:!max-w-30 max-lg:!max-w-90">
                <div class="pt-32 flex flex-row justify-end ">
                    <div class="flex flex-col w-1/2 BD-box py-10 px-10 max-md:w-full">
                        <label class="text-xl uppercase font-bold mb-2" for="Name">Your Name</label>
                        <input class="bg-transparent BD w-full h-12 mb-6 p-2" type="text">
                        <label class="text-xl uppercase font-bold mb-2" for="Email">Your Email</label>
                        <input class="bg-transparent BD w-full h-12 mb-6 p-2" type="text">
                        <label class="text-xl uppercase font-bold mb-2" for="message">Your Message</label>
                        <textarea class="bg-transparent BD w-full h-auto mb-10 p-2" cols="30" rows="10"></textarea>
                        <div>
                            <a href="#" class="btn">Submit Form</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
    export default {
        name : "CF",
    }
</script>

<style scoped>
    .btn{
        text-transform: uppercase;
        border:2px solid red;
        padding: 10px;
        padding-left: 25px;
        padding-right: 25px;
    }
    .btn:hover{
        background-color: red;
        transition: all .5s ease;
    }
    .BD-box{
        border: 4px solid rgb(67, 66, 66);
    }
    .BD{
        border: 2px solid rgb(67, 66, 66);
        border-radius: 5px;
    }

</style>
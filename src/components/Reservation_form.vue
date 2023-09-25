<template>
        <section class="py-32">
            <div class="container mx-auto text-left max-md:!max-w-75 max-sm:!max-w-30 max-lg:!max-w-90">
                <div class="w-1/2 max-md:w-full max-lg:w-full">
                    <h2 class="text-4xl fnt mb-8">Reservation</h2>
                    <p class="color">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis! Doloribus aliquam voluptates corporis et tempora consequuntur ipsam, itaque, nesciunt similique commodi omnis. Ad magni perspiciatis, voluptatum repellat.</p>
                </div>
                <div class="pt-32 flex flex-row justify-end ">
                    <div class="flex flex-col w-1/2 BD-box py-10 px-10 max-md:w-full">
                        <label class="text-xl uppercase font-bold mb-2" for="Name">Your Name</label>
                        <input class="bg-transparent BD w-full h-12 mb-6" type="text">
                        <label class="text-xl uppercase font-bold mb-2" for="many">How Many People</label>
                        <select class="text-2xl bg-transparent l BD w-full h-12 mb-6" name="many">
                            <option class="text-black" value="#">1</option>
                            <option class="text-black" value="#">2</option>
                            <option class="text-black" value="#">3</option>
                            <option class="text-black" value="#">4+</option>
                        </select>
                        <label class="text-xl uppercase font-bold mb-2" for="taskdatetime">When</label>
                        <input class="bg-transparent BD w-full h-12 mb-10" type="datetime">
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
        name : "RF",
    }
</script>

<style scoped>
    .BD-box{
        border: 4px solid rgb(67, 66, 66);
    }
    .BD{
        border: 2px solid rgb(67, 66, 66);
        border-radius: 5px;
    }

    option{
        background-color: transparent;
    }
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
    
</style>
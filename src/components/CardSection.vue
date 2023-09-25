<template>
    <div class="py-32">
        <div class="container mx-auto text-center max-md:!max-w-75 max-sm:!max-w-30 max-lg:!max-w-90">
            <div class="pb-32">
                <h2 class="fnt text-3xl">The Event</h2>
                <p class="text-xl color">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, consequatur. Aliquam quaerat pariatur repellendus veniam nemo, saepe, culpa eius aspernatur cumque suscipit quae nobis illo tempora. Eum veniam necessitatibus, blanditiis facilis quidem dolore! Dolorem, molestiae.</p>
            </div>
            <div class="flex flex-row justify-evenly text-left max-md:flex-col max-lg:flex-col">
                <div class="width bgblack pb-5 max-md:mb-5 max-sm:mb-5 max-lg:mb-5">
                        <img class="mb-28" src="./Images/gallery_1.jpeg" alt="">
                    <div class="mr-4 ml-6">
                        <h2 class="mb-5 text-3xl font-bold">Photoshoot of The Street</h2>
                        <p class="mb-16 color">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>                        
                        <ul class="flex flex-row">
                            <li class="ml-3"><fa class="text-xs color mr-1" icon="heart"/>1.2k</li>
                            <li class="ml-3"><fa class="text-xs color mr-1" icon="eye"/>1.2k</li>
                            <div class="flex flex-row w-7/12 justify-end">
                                <a href="/" class="font-thin text-red-600 hover:text-red-800 transition-all duration-300 ease-linear"><fa class="color" icon="arrow-right"></fa> Read More</a>
                            </div>
                        </ul>
                    </div>     
                </div>
                <div class="width bgblack pb-5 max-md:mb-5 max-sm:mb-5 max-lg:mb-5">
                    <img class="mb-28" src="./Images/gallery_2.jpeg" alt="">
                    <div class="mr-4 ml-6">
                        <h2 class="mb-5 text-3xl font-bold">Surfing At Phillippines</h2>
                        <p class="mb-16 color">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>                        
                        <ul class="flex flex-row">
                            <li class="ml-3"><fa class="text-xs color mr-1" icon="heart"/>1.2k</li>
                            <li class="ml-3"><fa class="text-xs color mr-1" icon="eye"/>1.2k</li>
                            <div class="flex flex-row w-7/12 justify-end">
                                <a href="/" class="font-thin text-red-600 hover:text-red-800 transition-all duration-300 ease-linear"><fa class="color" icon="arrow-right"></fa> Read More</a>
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="width bgblack pb-5 max-md:mb-5 max-sm:mb-5">
                    <img class='mb-28' src="./Images/gallery_6.jpeg" alt="">
                    <div class="mr-4 ml-6">
                        <h2 class="mb-5 text-3xl font-bold">Focus on Underwater</h2>
                        <p class="mb-16 color">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>                        
                        <ul class="flex flex-row">
                            <li class="ml-3"><fa class="text-xs color mr-1" icon="heart"/>1.2k</li>
                            <li class="ml-3"><fa class="text-xs color mr-1" icon="eye"/>1.2k</li>
                            <div class="flex flex-row w-7/12 justify-end">
                                <a href="/" class="font-thin text-red-600 hover:text-red-800 transition-all duration-300 ease-linear"><fa class="color" icon="arrow-right"></fa> Read More</a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name : 'event',
    }
</script>

<style scoped>
    .width {
        width:30%;
    }
    .bgblack{
        background-color: rgb(29, 29, 29);
    }
    @media (max-width:768px) {
        .width{
            width:100%
        }
    }
    @media(max-width:1024px){
        .width {
            width: 100%;
        }
    }
</style>
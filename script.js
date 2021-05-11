gsap.registerPlugin(ScrollTrigger)

gsap.to(".nme",{
    scrollTrigger:{
        trigger:".nme",
        start:"top center",
        end:"bottom 100px",
        scrub:2,
        // markers:true
    },
    // color:black,
    y:50,
    duration:3})



gsap.to(".build21",{
scrollTrigger:{
    trigger:".build21",
    start:"top 20px",
    end:"bottom 100px",
    scrub:2,
    // markers:true
},
y:-30,
duration:3})

gsap.fromTo(".para",
    {opacity:0},
    {opacity:1 ,duration:5})


window.addEventListener("scroll", ()=>{
    var t=window.scrollY
    var para=document.querySelector(".para")
    var abo=document.querySelector(".abo")
    if(t>180){
        abo.style.opacity=1
        abo.style.transition="1s ease-in-out"
        para.style.opacity=1
        para.style.transition="1s ease-in-out"
    }
    else {
        abo.style.opacity=0
        para.style.opacity=0
    }
    
})
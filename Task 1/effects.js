gsap.to("#header",{
    duration:0.5,
    backgroundColor:"rgba(0, 0, 0, 0.445)",
    backdropFilter: "blur(10px)",
    scrollTrigger:{
        trigger:"#header",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -100%",
        scrub:3
    }
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3500,
    delay: 300,
    // reset: true
})

sr.reveal(`.logo .right, .right-content`)
sr.reveal(`.navlist`,{interval: 100})
sr.reveal(`.logo`,{origin: 'bottom'})
sr.reveal(`.hero-text`,{origin: 'right'})
sr.reveal(`.icons`,{origin: 'left'})
sr.reveal(`.hero-img, .main-hero`,{origin: 'bottom'})
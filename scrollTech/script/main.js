window.sr = new ScrollReveal({ mobile: false })
sr.reveal('.navbar', {
    duration: 2500
});

sr.reveal('.showcase-left', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});
sr.reveal('.showcase-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.showcase-btn', {
    duration: 2000,
    delay: 1000,
    origin: 'bottom',
    distance: '300px'
});
sr.reveal('#testimonial div', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px'
});
sr.reveal('.info-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2 
});
sr.reveal('.info-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2 
});
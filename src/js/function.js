function monterLegende() {
    let texte13 = document.querySelector(".texte13");
    texte13.style.display = 'block';
    return anime({
        targets: texte13,
        translateY: '-5em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende() {
    return anime({
        targets: '.texte13',
        translateY: '5em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}
function glisserCote() {
    return anime({
        targets: '.texte14',
        translateX: '500px',
        autoplay: false,
        easing: 'linear',
        duration: 300
    }).play;
}

function glisserDessous() {
    return anime({
        targets: '.texte14',
        translateX: "-500px",
        autoplay: false,
        easing: 'linear',
        duration: 300
    }).play;
}

function carrousel() {
    let images = document.querySelectorAll('.image15');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images,
        translateX: [{value: 500, duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                                    if (ind == 0) return 3*delta + 2*d;
                                    if (ind == 1) return 2*delta + d;
                                    if (ind == 2) return delta;
                                    return 0;
                                }},
                     {value: 0, duration: function(img, ind) {
                                if (ind == 3) return 0;
                                return d;
                            }}],
        easing: 'linear',
        delay: function(img,ind){
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            if (ind == 2) return 3*delta + 2*d;
            return 4*delta + 3*d;
        }
    });
}

function bouger() {
	
};

function ecrire() {
    return anime({
        targets: '.lines10 path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        autoplay: false,
        direction: 'alternate',
        loop: true
    }).play;
};

function charge() {
	
}

function chargeBarre() {
	
};
function carrouselAlternate() {
    let images = document.querySelectorAll('.image15');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });

    let anim15 = anime.timeline({
        targets: '.imgalt',
        loop: true,
        direction: 'alternate',
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            return 3*delta + 2*d;
        }
    });
}
Toile({
    targets: '.morphing-demo .polymorph',
    points: [
      { value: [
        '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
        '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']
      },
      { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
      { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
      { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
    ],
    easing: 'easeOutQuad',
    duration: 2000,
    loop: true
  });
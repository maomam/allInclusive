$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "100%" // this works just fine with duration 0 as well
            // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
            // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
        }
    });

    // get all slides
    var slides = document.querySelectorAll("section.panel");


    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i],
                triggerHook: 1, // show, when scrolled 10% into view
                duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
            })
            .setPin(slides[i], {pushFollowers: false})
            .setClassToggle("#reveal", "visible") 
           // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }

    new ScrollMagic.Scene({triggerElement: "#secOne"})
					.setClassToggle("#moveOne", "moveActive") // add class toggle
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#secTwo"})
					.setClassToggle("#moveTwo", "moveActive") // add class toggle
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#secThree"})
					.setClassToggle("#moveThree", "moveActive") // add class toggle
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#secFour"})
					.setClassToggle("#moveFour", "moveActive") // add class toggle
					.addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#secFive"})
					.setClassToggle("#moveFive", "moveActive") // add class toggle
					.addTo(controller);
                    new ScrollMagic.Scene({triggerElement: "#secSix"})
					.setClassToggle("#moveSix", "moveActive") // add class toggle
					.addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#secSeven"})
					.setClassToggle("#moveSeven", "moveActive") // add class toggle
					.addTo(controller);
    new ScrollMagic.Scene({
                        triggerElement: "#end",
                        triggerHook: 0.8, // show, when scrolled 10% into view
                        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
                    })
                    //.setClassToggle("#reveal", "visible") // add class to reveal
                    //.removeClassToggle(true)
                    .setClassToggle("#reveal", "foot") 
                    .addTo(controller);
});



function openMenu() {
    menu.classList.add('active')
}

function closeMenu() {
    menu.classList.remove('active')
  }

  const hamburger = document.querySelector('#hamburger')
const close = document.querySelector('#close')
const menu = document.querySelector('#menu')

hamburger.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)
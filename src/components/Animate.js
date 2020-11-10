import gsap from "gsap"

export const textIntro = elem => {
  gsap.from(elem, {
    xPercent: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 3,
    scale: 1,
    ease: "ease",
  });
};
export const logoIntro = elem => {
  gsap.from(elem, {
    xPercent: -150,
    opacity: 0,
    stagger: 0.2,
    duration: 3,
    scale: 1,
    ease: "ease",
  });
};
export const menuShow = (elem1, elem2) => {
  gsap.from([elem1, elem2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    skewY: 4,
    ease: "power4.inOut",
    stagger: {
      amount: 0.2,
    },
  })
}

export const menuHide = (elem1, elem2) => {   
  gsap.to([elem1, elem2], {
    duration: 0.8,
    height: 0,
    ease: "power4.inOut",
    stagger: {
      amount: 3,
    },
  })
}

export const staggerLinks = (elem1, elem2, elem3) => {
  gsap.from([elem1, elem2, elem3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power4.inOut",
    stagger: {
      amount: 0.3,
    },
  })
}

export const hoverLink = e => {
  gsap.to(e.target, {
    duration: 0.4,
    y: 3,
    skewX: 4,
    ease: "power2.inOut"
  });
};

export const hoverExit = e => {
  gsap.to(e.target, {
    duration: 0.4,
    y: -3,
    skewX: 0,
    ease: "power2.inOut"
  });
};


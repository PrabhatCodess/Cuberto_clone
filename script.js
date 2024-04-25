function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  
});







ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}


locomotiveAnimation()
































// mouse foll0wer //

Shery.mouseFollower();

// Magnet Effect //

Shery.makeMagnet(".magnet");
Shery.makeMagnet("#magnet");

// MEdia circle Effect //
Shery.hoverWithMediaCircle(".hvr", {
    videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
  })


































  
// Shery.imageEffect(".images", {
//     style: 3,
//     /*optional parameters
//     these parameter dose not applies to custom scroll trigger callback */
//     scrollSnapping: true,
//     scrollSpeed: 6,
//     touchSpeed: 6,
//     damping: 7,
//   });
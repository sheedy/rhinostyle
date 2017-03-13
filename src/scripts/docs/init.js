import { TimelineMax, SteppedEase } from 'gsap';
import CodeMirror from 'codemirror';
import UtilitySystem from '../UtilitySystem';

const $html = document.documentElement;
const $body = document.body;
const $siteNav = document.querySelector('.site-navigation');
const $siteOverlay = document.querySelector('#site-overlay');

// Init CodeMirror
CodeMirror($body, {
  mode: 'javascript',
  lineWrapping: true,
});

//
// Navigation timelines
//

// For opening/closing nav
const navToggleTimeline = new TimelineMax({ paused: true });

/*navToggleTimeline
.set($body, {
  height: '100%',
  overflow: 'hidden',
})
.to('.site-overlay', 0.15, {
  opacity: 0.2,
  zIndex: 15,
  ease: UtilitySystem.config.easing,
}, 'open')
.to($siteNav, 0.15, {
  x: 0,
  ease: UtilitySystem.config.easing,
}, 'open')
.to('.site-wrapper', 0.15, {
  x: $siteNav.offsetWidth,
  ease: UtilitySystem.config.easing,
}, 'open');*/

// For locking nav (on larger screens)
const navLockedTimeline = new TimelineMax({
  paused: true,
  onComplete() {
    $html.classList.remove('is-loading');
  },
});

navLockedTimeline
.to($siteNav, 0.15, {
  x: 0,
  ease: UtilitySystem.config.easing,
}, 'locked')
.to('.site-wrapper', 0.15, {
  marginLeft: $siteNav.offsetWidth,
  ease: UtilitySystem.config.easing,
}, 'locked');

// Navigation listener
UtilitySystem.optimizedResize.add(() => {
  navLocked();
});

function navLocked() {
  // nav toggling below 1200px
  // Check if the animation is completed
  // Closed by default
  if (window.matchMedia('(max-width: 1199px)').matches) {
    navLockedTimeline.reverse();
  }

  // Lock nav in open position at 1200px
  // Check if we haven't run the animation yet
  if (window.matchMedia('(min-width: 1200px)').matches) {
    navLockedTimeline.play();
  }
}

function navInit() {
  navLocked();
}

document.querySelector('.site-header__menu').addEventListener('click', () => {
  document.body.scrollTop = 0;
  navToggleTimeline.play();
});

$siteOverlay.addEventListener('click', () => {
  navToggleTimeline.reverse();
});

// SVG loader
UtilitySystem.svgLoad(`${rhinoDocs.rootPath}svg/sprite.svg`); // eslint-disable-line

//
// Animations
//

const rhinoLogin = {
  frames: 64, // 65 total frames minus 1
  ease: function() { return new SteppedEase(this.frames) }, // eslint-disable-line
  position: '-98.46%', // total height of svg (29900) minus height of 1 frame (460px) / 29900 * 100
  speed: 3,
  timeline: new TimelineMax({ repeat: -1, repeatDelay: 2 }),
};
const rhinoFlag = {
  frames: 51, // 52 total frames minus 1
  ease: function() { return new SteppedEase(this.frames) }, // eslint-disable-line
  position: '-98.07%', // total height of svg (45760) minus height of 1 frame (880px) / 45760 * 100
  speed: 3,
  timeline: new TimelineMax({ repeat: -1, repeatDelay: 2 }),
};
const rhinoSecure = {
  frames: 51, // 52 total frames minus 1
  ease: function() { return new SteppedEase(this.frames) }, // eslint-disable-line
  position: '-98.07%', // total height of svg (45760) minus height of 1 frame (880px) / 45760 * 100
  speed: 3,
  timeline: new TimelineMax({ repeat: -1, repeatDelay: 2 }),
};
const rhinoTime = {
  frames: 58, // 59 total frames minus 1
  ease: function() { return new SteppedEase(this.frames) }, // eslint-disable-line
  position: '-98.3%', // total height of svg (51920) minus height of 1 frame (880px) / 51920 * 100
  speed: 3,
  timeline: new TimelineMax({ repeat: -1, repeatDelay: 2 }),
};

rhinoLogin.timeline.to('.rhino-animation__login', rhinoLogin.speed, {
  y: rhinoLogin.position,
  ease: rhinoLogin.ease(),
});

rhinoFlag.timeline.to('.rhino-animation__flag', rhinoFlag.speed, {
  y: rhinoFlag.position,
  ease: rhinoFlag.ease(),
});

rhinoSecure.timeline.to('.rhino-animation__secure', rhinoSecure.speed, {
  y: rhinoSecure.position,
  ease: rhinoSecure.ease(),
});

rhinoTime.timeline.to('.rhino-animation__time', rhinoTime.speed, {
  y: rhinoTime.position,
  ease: rhinoTime.ease(),
});

const hostName = document.location.hostname;
// Handle active navigation
const split = (hostName === 'localhost') ? 1 : 2;
const navLocation = location.pathname.split('/')[split];

if (navLocation) {
  document.querySelector(`.site-navigation__nav a[href^="${rhinoDocs.rootPath}${navLocation}"]`).classList.add('active'); // eslint-disable-line
} else {
  document.querySelector('.site-navigation__nav a[href=""').classList.add('active');
}


navInit();

wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0, // default
  mobile: true, // default
  live: true // default
})
wow.init();

// 

window.sections = [...document.querySelectorAll('.section')];
window.lastScrollTop = window.pageYOffset;

document.body.style.background = window.sections[0].getAttribute('data-bg');

window.addEventListener('scroll', onScroll);

function onScroll() {
  const scrollTop = window.pageYOffset;

  const section = window.sections
      .map(section => {
          const el = section;
          const rect = el.getBoundingClientRect();
          return {
              el,
              rect
          };
      }).find(section => section.rect.bottom >= (window.innerHeight * 0.5));
  document.body.style.background = section.el.getAttribute('data-bg');
}

// 

var lnks = document.querySelectorAll('a[href*="#"]');

for (var i = 0; i < lnks.length; i++) {
  lnks[i].onclick = function(e) {
      e.preventDefault();
      var b = this;

      var c = b.getAttribute("href").substring(1);
      var el = document.querySelectorAll('a[name="' + c + '"]')[0];
      window.scrollTo({
          top: el.offsetTop - 20,
          behavior: "smooth"
      });
  };
}
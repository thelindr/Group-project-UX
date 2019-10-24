
var section = document.querySelector('h1');

console.log(section)

var bounding = section.getBoundingClientRect();

console.log(bounding)

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.addEventListener('scroll', function (event) {
	if (isInViewport(section)) {
		console.log('is in viewport');
	} else {
    console.log('is not in viewport')
  }
});

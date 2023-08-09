// cool fade effects - thanks to fireship
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
		else {
			entry.target.classList.remove('show');
		}
	})
})

const hiddenElements = document.querySelectorAll('.hidden')

hiddenElements.forEach((el) => observer.observe(el));

// dynamic images on homepage
// dynImg = document.querySelectorAll('.ad__img')
// n = 1
// dynImg[0].style['background-position'] = "left"
// dynImg[1].style['background-position'] = "90% 50%"
// const updateImg = () => {
// 	console.log(dynImg)
// 	for(i = 0; i < 2; i++) {
// 		dynImg[i].style['background'] = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images/img-${n}.jpg')`
// 	}
// 	n == 1 ? n++ : n = 1
// }

// setInterval(updateImg, 2500)
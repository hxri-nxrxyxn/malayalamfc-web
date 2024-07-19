// cool fade effects - thanks to fireship
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
		else {
			entry.target.classList.remove('show');
			entry.target.classList.remove('show')
		}
	})
})

const hiddenElements = document.querySelectorAll('.hidden')

hiddenElements.forEach((el) => observer.observe(el));

let flag = 0
document.querySelector('.navm__icons').addEventListener('click', () => {
	if (flag == 0) {
		document.querySelector('.navm__dropdown').style.visibility = 'visible';
		flag = 1
	}
	else {
		document.querySelector('.navm__dropdown').style.visibility = 'hidden';
		flag = 0
	}
})

const icons = document.querySelectorAll('.section-1-icons i')
let i = 1


setInterval(() => {//call this every x seconds
	i++
	const icon = document.querySelector('.section-1-icons .change')
	icon.classList.remove('change') //fas fa-egg

	if (i > icons.length) {
		icons[0].classList.add('change')
		i = 1
	} else {
		icon.nextElementSibling.classList.add('change') //fas fa-egg change
	}
}, 1000)
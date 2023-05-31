const submitBtn = document.querySelector('.submit-btn')
const input = document.querySelector('.input')
const error = document.querySelector('.error')
const closeModalBtn = document.querySelector('.close-modal')
const newsletterBox = document.querySelector('.newsletter-box')
const modal = document.querySelector('.modal')

const subscribeNewsletter = () => {
	if (input.value.length === 0 || !input.value.includes('@')) {
		error.style.visibility = 'visible'
		input.classList.add('invalid', 'error-input')
		input.placeholder = 'ash#loremcompany.com'
	} else {
		newsletterBox.style.display = 'none'
		modal.style.display = 'flex'
		input.value = ''
		error.style.visibility = 'hidden'
		input.classList.remove('invalid', 'error-input')
		input.placeholder = 'email@company.com'
	}
}

const closeModal = () => {
	newsletterBox.style.display = 'flex'
	modal.style.display = 'none'
}

submitBtn.addEventListener('click', subscribeNewsletter)
closeModalBtn.addEventListener('click', closeModal)

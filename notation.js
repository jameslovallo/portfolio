import { annotate, annotationGroup } from '//unpkg.com/rough-notation?module'

const defaults = {
	type: 'strike-through',
	iterations: 1,
	color: 'var(--annotation-color, white)',
	animationDuration: 350,
}

const h1 = annotate(document.querySelector('h1 span'), {
	...defaults,
	strokeWidth: 16,
})

const labels = document.querySelectorAll('header p:first-of-type span')
const labelAnnotations = [...labels].map((el) =>
	annotate(el, { ...defaults, strokeWidth: 8 })
)

const whySoSerious = annotate(
	document.querySelector('header p:last-of-type span'),
	{
		...defaults,
		color: 'var(--annotation-color, orange)',
		strokeWidth: 8,
	}
)

const h2 = annotate(document.querySelector('h2 span'), {
	...defaults,
	strokeWidth: 12,
})

const carousel = document.querySelector('.carousel')

const carouselButtons = document.querySelectorAll('.placeholder-buttons div')
const carouselButtonAnnotations = [...carouselButtons].map((el) =>
	annotate(el, {
		...defaults,
		type: 'circle',
		strokeWidth: 2,
		animationDuration: 500,
	})
)

const carouselBox = annotate(carousel, {
	...defaults,
	type: 'box',
	animationDuration: 750,
})
const carouselX = annotate(carousel, {
	...defaults,
	type: 'crossed-off',
	animationDuration: 750,
})

annotationGroup([
	h1,
	...labelAnnotations,
	whySoSerious,
	h2,
	...carouselButtonAnnotations,
	carouselBox,
	carouselX,
]).show()

setTimeout(() => document.body.classList.add('drawn'), 5000)

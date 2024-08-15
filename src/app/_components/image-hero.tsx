'use client'

import { useEffect, useMemo, useState } from "react"
import { ReactCompareSlider, ReactCompareSliderImage, useReactCompareSliderRef } from "react-compare-slider"

const images = [
	'/images/1.png',
	'/images/2.png',
	'/images/3.png',
	'/images/4.png',
]

const SLIDER_CENTER_POSITION = 50
const IMAGE_CHANGE_INTERVAL = 5000

export const ImageHero = () => {
	const shuffledImages = useMemo(() => images.sort(() => Math.random() - 0.5), [])
	const [index1, setIndex1] = useState(0)
	const [index2, setIndex2] = useState(1)

	const reactCompareSliderRef = useReactCompareSliderRef();

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex1((prevIndex) => (prevIndex + 1) % shuffledImages.length)
		}, IMAGE_CHANGE_INTERVAL)

		return () => clearInterval(timer)
	}, [shuffledImages.length])

	useEffect(() => {
		const timer = setTimeout(() => {
			setIndex2((prevIndex) => (prevIndex + 1) % shuffledImages.length)
		}, IMAGE_CHANGE_INTERVAL / 2)

		return () => clearTimeout(timer)
	}, [index1, shuffledImages.length])

	return (
		<div className="relative">
			<ReactCompareSlider
				ref={reactCompareSliderRef}
				position={SLIDER_CENTER_POSITION}
				itemOne={<ReactCompareSliderImage src={shuffledImages[index1]} />}
				itemTwo={<ReactCompareSliderImage src={shuffledImages[index2]} />}
			/>
			<h1 className="pointer-events-none absolute z-10 bottom-1/4 left-0 right-0 text-center text-5xl font-extrabold tracking-tight text-white">
				<span className="ml-[3%] sm:text-9xl">
					<span className={`text-[hsl(325,100%,70%)]`}>Cait</span>
					<span> + </span>
					<span className={`text-[hsl(237,100%,70%)]`}>Lacy</span>
				</span>
			</h1>
		</div>
	)
}

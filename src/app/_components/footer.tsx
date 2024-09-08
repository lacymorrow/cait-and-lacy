import { COLORS } from "@/app/constants";

export const Footer = async () => {
	const lacyUrl = await fetch('https://lacy.is/api/me')
	.then(res => res.text())
	.catch(err => {
		console.error(err)
		return 'https://lacymorrow.com'
	})
	return <footer className="">
		<div className="container">
			<div className="flex flex-col items-center justify-center">
				<p>Made with ❤️ by <a href="https://www.caitrussellphotography.com/" className={`text-[${COLORS.CAIT}] hover:text-[hsl(237,100%,60%)]`}>ℂ𝒶𝒾𝓉</a> and <a href={lacyUrl} className={`text-[${COLORS.LACY}] hover:text-[hsl(237,100%,60%)]`}>ℒ𝒶𝒸𝓎</a></p>
			</div>
		</div>
	</footer>;
};

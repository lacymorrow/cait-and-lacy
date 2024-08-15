import { COLORS } from "@/app/constants";

export const Footer = () => {
	return <footer className="">
		<div className="container">
			<div className="flex flex-col items-center justify-center">
				<p>Made with ❤️ by <a href="https://twitter.com/lacybuilds" className={`text-[${COLORS.LACY}] hover:text-[hsl(237,100%,60%)]`}>@lacybuilds</a></p>
			</div>
		</div>
	</footer>;
};

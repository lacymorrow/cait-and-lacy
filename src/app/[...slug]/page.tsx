
import { Footer } from "@/app/_components/footer";
import { ImageHero } from "@/app/_components/image-hero";
import { HydrateClient } from "@/trpc/server";


export default async function Home() {

	return (
		<HydrateClient>
			<main className="flex min-h-screen flex-col items-center justify-center gap-3">
				<div className="container flex flex-col items-center justify-center gap-12 px-4 py-4 sm:py-0">
					<ImageHero />
				</div>
				<Footer />
			</main>
		</HydrateClient>
	);
}

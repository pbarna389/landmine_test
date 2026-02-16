import { IntroSection } from './components/IntroSection/IntroSection'
import { PremiseSection } from './components/PremiseSection/PremiseSection'

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-black">
			<IntroSection />
			<PremiseSection />
		</main>
	)
}

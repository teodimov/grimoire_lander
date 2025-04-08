// import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen bg-white dark:bg-[#181A1B] text-black dark:text-gray-100 p-8 font-mono px-8 py-20 font-consolas">
			<div className="max-w-xl mx-auto">
				<h1 className="text-3xl font-bold mb-6">The ML Grimoire</h1>
				<ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
					<li className="font-semibold text-md">
						Foundations of AI: From First Principles to Practica
					</li>
					<li>A comprehensive and concise primer on Artificial Intelligence</li>
					<li>
						AI research should be accessible to everyone. This "Grimoire"
						provides essential foundations for anyone looking to join AI careers
						or conversations.
					</li>
					<li>
						<a
							href="/mlgrimoire.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="white underline hover:no-underline font-semibold"
						>
							Read here
						</a>
					</li>
					<li className="opacity-50">Last updated: 4/8/25</li>
				</ul>
			</div>
		</div>
	);
}

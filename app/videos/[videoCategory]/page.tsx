export default async function VideoCategoriesPage({
	params
}: {
	params: Promise<{ videoCategory: string }>
}) {
	const { videoCategory } = await params

	return (
		<div className="flex flex-col items-center justify-center h-screen text-white">
			{videoCategory}
		</div>
	)
}

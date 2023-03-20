<div class="flex-1 flex flex-col w-full justify-center items-center">
	<h1 class="font-bold text-pink-400 text-5xl my-4">Dately</h1>
	<p class="text-zinc-400 text-sm mb-4">Please enter your name below to start using the app</p>

	<form method="post" action="?/initial" class="my-4">
		<div class="flex flex-col items-center">
			<input
				type="text"
				placeholder="君の名は"
				class="w-72 border-[5px] border-pink-50 rounded-lg my-2 bg-zinc-50 focus:outline-none py-1 px-2 text-zinc-600 font-bold"
			/>
			<button
				type="submit"
				class="w-72 border-[5px] border-pink-200 rounded-lg bg-pink-50 text-pink-400 font-bold hover:bg-pink-200"
				>GO!</button
			>
		</div>
	</form>
</div>

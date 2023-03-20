<script>
	import '../app.postcss';
</script>

<div class="flex flex-col min-h-screen">
	<slot />
</div>

<style>
	* {
		-ms-user-select: none;
		-webkit-user-select: none;
		user-select: none;
	}
</style>

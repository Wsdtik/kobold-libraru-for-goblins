<script lang="ts">
	
	// import '../app.css';
	let { children } = $props();

	const themes = ['bongo-theme'];
	let selected = themes[0];


</script>


<header>
	<link rel="stylesheet" href="../src/themes/{selected}.css" />
	<meta charset="utf-16"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</header>



<nav>
	<ul>
		<li>word-page</li>
		<li>word-page</li>
		<li>word-page</li>
	</ul>
</nav>

<div data-tauri-drag-region class="app">

	<main>
		{@render children()}
	</main> 

</div>


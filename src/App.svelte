<script>
	import { Router, Route } from 'svelte-routing';
	import Intro from './pages/Intro.svelte';
	import CharacterSelection from './pages/CharacterSelection.svelte';
	import Map from './pages/Map.svelte';
	import Entrance from './pages/Entrance.svelte';
	import FirstFloor from './pages/FirstFloor.svelte';
	import FirstBasement from './pages/FirstBasement.svelte';
</script>

<Router>
	<Route path="/" component="{Intro}" />
	<Route path="/character-selection" component="{CharacterSelection}" />
	<Route path="/map" component="{Map}" />
	<Route path="/entrance" component="{Entrance}" />
	<Route path="/1f" component="{FirstFloor}" />
	<Route path="/b1" component="{FirstBasement}" />
</Router>

<script>
	import { Router, Route } from 'svelte-navigator';
	import IntroPage from './pages/Intro.svelte';
	import CharacterSelection from './pages/CharacterSelection.svelte';
	import Map from './pages/Map.svelte';
	import Entrance from './pages/Entrance.svelte';
	import FirstFloor from './pages/FirstFloor.svelte';
	import FirstBasement from './pages/FirstBasement.svelte';
</script>

<Router>
	<Route path="/">
		<IntroPage />
	</Route>
	<Route path="character-selection">
		<CharacterSelection />
	</Route>
	<Route path="map">
		<Map />
	</Route>
	<Route path="entrance">
		<Entrance />
	</Route>
	<Route path="1f">
		<FirstFloor />
	</Route>
	<Route path="b1">
		<FirstBasement />
	</Route>
</Router>
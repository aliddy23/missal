<template>
	<v-app>
		<header class="d-flex d-print-none pr-3" style="align-items: center" :class="{ 'pt-10': Capacitor.isNativePlatform() }">
			<router-link to="/">
				<div class="d-flex ma-4" style="align-items: center">
					<img src="@/assets/keys.svg" height="64" />
					<h2 class="ml-4 hidden-sm-and-down"><i>Ecclesia Catholica</i></h2>
				</div>
			</router-link>

			<v-spacer></v-spacer>

			<div class="hidden-sm-and-down">
				<router-link class="mx-2" to="/">Home</router-link>
				<router-link :class="{ 'router-link-active': $route.fullPath.includes('bible') }" class="mx-2" to="/bible">Bible</router-link>
				<router-link :class="{ 'router-link-active': $route.fullPath.includes('missal') }" class="mx-2" to="/missal">Missal</router-link>
				<router-link :class="{ 'router-link-active': $route.fullPath.includes('prayers') }" class="mx-2" to="/prayers">Prayers</router-link>
			</div>

			<div class="hidden-lg-and-up">
				<v-menu offset-y style="z-index: 1000">
					<template v-slot:activator="{ props }">
						<v-btn style="z-index: 1001" icon="mdi-menu" variant="text" v-bind="props"></v-btn>
					</template>

					<v-list density="compact" style="max-height: 50vh" class="mt-2">
						<v-list-item title="Home" link to="/"></v-list-item>
						<v-list-item title="The Holy Bible" link to="/bible"></v-list-item>
						<v-list-item title="Missale Romanum" link to="/missal"></v-list-item>
						<v-list-item title="Necessary Prayers" link to="/prayers"></v-list-item>
					</v-list>
				</v-menu>
			</div>
		</header>

		<RouterView :class="{ 'pt-10': Capacitor.isNativePlatform() }" style="margin-top: 96px" />
	</v-app>
</template>

<script setup lang="ts">
	import { Capacitor } from "@capacitor/core";
	import { watch } from "vue";
	import { RouterView, useRoute } from "vue-router";

	const route = useRoute();

	watch(route, () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
</script>

<style>
	html,
	body {
		background: #121212;
	}

	header:not(.book-ctrl) {
		position: fixed;
		width: 100vw;
		z-index: 100;
	}

	@media screen and (max-width: 960px) {
		header:not(.book-ctrl) {
			background-color: #121212;
		}
	}
</style>

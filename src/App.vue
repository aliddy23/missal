<template>
	<v-app>
		<v-layout>
			<v-main :class="{ 'mt-8': Capacitor.isNativePlatform() }">
				<div class="text-center mt-4">
					<router-link to="/">Home</router-link>
				</div>

				<RouterView />
			</v-main>
		</v-layout>
	</v-app>
</template>

<script setup lang="ts">
	import { Capacitor } from "@capacitor/core";
	import { RouterView } from "vue-router";
</script>

<style>
	html,
	body {
		background: #121212;
	}
</style>

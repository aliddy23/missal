<template>
	<div class="book" v-if="book">
		<section class="book-header">
			<h1 v-html="book.fmlname"></h1>
			<h2 v-html="book.desc"></h2>
		</section>

		<v-container style="max-width: 900px" class="pt-0">
			<v-divider class="my-8"></v-divider>

			<table class="book-body">
				<tr v-for="ch in book.ch" :id="`${ch.num}`">
					<td style="white-space: nowrap">
						<router-link :to="`/bible/${route.params.book}/${ch.num}`">Chapter {{ ch.num }}</router-link>
					</td>
					<td v-html="ch.desc"></td>
				</tr>
			</table>
		</v-container>

		<v-btn
			size="x-large"
			position="fixed"
			location="left center"
			icon="mdi-chevron-left"
			variant="text"
			link
			:to="`/bible/${book.prev}/${book.prevLen}`"
			:disabled="!book.prev"
		></v-btn>

		<v-btn
			size="x-large"
			position="fixed"
			location="right center"
			icon="mdi-chevron-right"
			variant="text"
			link
			:to="`/bible/${route.params.book}/1`"
		></v-btn>

		<header class="book-ctrl" :class="{ 'mt-12': Capacitor.isNativePlatform() }">
			<v-menu offset-y>
				<template v-slot:activator="{ props }">
					<v-btn v-bind="props" :text="book.short"></v-btn>
				</template>

				<v-list density="compact" style="max-height: 50vh">
					<v-list-item link to="/" title="Home"></v-list-item>
					<v-list-item v-for="b in books" :key="b.id" link :to="`/bible/${b.id}`" :title="b.name"></v-list-item>
				</v-list>
			</v-menu>

			<v-menu offset-y>
				<template v-slot:activator="{ props }">
					<v-btn v-bind="props" text="Chapter"></v-btn>
				</template>

				<v-list density="compact" style="max-height: 50vh">
					<v-list-item link :to="`/bible/${route.params.book}`" @click="parseRoute()" title="Introduction"></v-list-item>
					<v-list-item
						v-for="ch in book.ch"
						:key="ch.num"
						exact
						link
						:to="`/bible/${route.params.book}/${ch.num}`"
						:title="`Chapter ${ch.num}`"
					></v-list-item>
				</v-list>
			</v-menu>
		</header>
	</div>
</template>

<script setup lang="ts">
	import { Capacitor } from "@capacitor/core";
	import { ref } from "vue";
	import { useRoute } from "vue-router";
	import { watch } from "vue";
	import type { Ref } from "vue";
	import books from "@/assets/books-short.json";

	const route = useRoute();
	let book: Ref<any> = ref(null);

	function parseRoute() {
		window.scrollTo({ top: 0, behavior: "smooth" });

		import(`@/assets/books/${route.params.book}.json`).then((i) => {
			book.value = i.default;
		});
	}

	parseRoute();

	watch(route, () => {
		parseRoute();
	});
</script>

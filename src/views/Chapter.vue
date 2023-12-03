<template>
	<div class="book" v-if="book">
		<section class="book-header">
			<h1 v-html="book.fmlname"></h1>
		</section>

		<v-container style="max-width: 900px" class="pt-0">
			<section v-for="ch in book.ch.filter((i: any) => i.num == route.params.chapter)" class="book-ch" :id="ch.num">
				<v-divider class="my-8"></v-divider>
				<h3>
					<router-link :to="`/bible/${route.params.book}/${ch.num}`">Chapter {{ ch.num }}</router-link>
				</h3>

				<h4 v-html="ch.desc"></h4>

				<table class="book-body">
					<tr v-for="verse in book.verses.filter((i: any) => i.num == ch.num)" :id="`${ch.num}:${verse.verse}`">
						<td>
							<router-link :to="`/bible/${route.params.book}/${ch.num}#${verse.verse}`">{{ verse.verse }}</router-link>
						</td>
						<td v-html="verse.text"></td>
					</tr>
				</table>
			</section>
		</v-container>

		<v-btn
			size="x-large"
			position="fixed"
			location="left center"
			icon="mdi-chevron-left"
			variant="text"
			link
			:to="parseInt(route.params.chapter as string) == 1 ? `/bible/${route.params.book}` : `/bible/${route.params.book}/${parseInt(route.params.chapter as string) - 1}`"
		></v-btn>

		<v-btn
			size="x-large"
			position="fixed"
			location="right center"
			icon="mdi-chevron-right"
			variant="text"
			link
			:to="parseInt(route.params.chapter as string) == book.ch.length ? `/bible/${book.next}` : `/bible/${route.params.book}/${parseInt(route.params.chapter as string) + 1}`"
			:disabled="parseInt(route.params.chapter as string) == book.ch.length && !book.next"
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
					<v-btn v-bind="props" :text="(route.params.chapter as string)"></v-btn>
				</template>

				<v-list density="compact" style="max-height: 50vh">
					<v-list-item link :to="`/bible/${route.params.book}`" @click="parseRoute()" title="Introduction"></v-list-item>
					<v-list-item
						v-for="ch in book.ch"
						:key="ch.num"
						link
						:to="`/bible/${route.params.book}/${ch.num}`"
						@click="parseRoute()"
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
	let verse: Ref<number> = ref(1);

	function parseRoute() {
		window.scrollTo({ top: 0, behavior: "smooth" });

		import(`@/assets/books/${route.params.book}.json`).then((i) => {
			book.value = i.default;

			if (route.hash) {
				verse.value = parseInt(route.hash.replace("#", "")) || 1;
			}
		});
	}

	parseRoute();

	watch(
		() => route.params,
		async () => parseRoute()
	);
</script>

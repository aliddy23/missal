<template>
	<div>
		<v-container class="book" style="max-width: 1000px">
			<div class="book-title">
				<h2 style="color: #ef5350">THE</h2>
				<h1 style="color: #ef5350">HOLY BIBLE</h1>
				<h3 style="color: #ef5350">TRANSLATED FROM<br />THE LATIN VULGATE</h3>
				<h4>Diligently conferred with the Hebrew, Greek,<br />and other Editions in diverse languages.</h4>

				<p class="mt-8">THE OLD TESTAMENT</p>
				<p>First Published by the English College at Douay</p>
				<p>A.D. 1609 and 1610</p>

				<p class="my-4">and</p>

				<p>THE NEW TESTAMENT</p>
				<p>First Published by the English College at Rheims</p>
				<p>A.D. 1582</p>

				<p class="my-4">With Annotations</p>

				<p>The Whole Revised and Diligently Compared with<br />the Latin Vulgate by Bishop Richard Challoner A.D. 1749-1752</p>

				<v-divider class="my-12"></v-divider>
			</div>

			<div class="book-contents">
				<h2 style="color: #ef5350">CONTENTS</h2>

				<v-row>
					<v-col cols="12" md="6">
						<h3 style="color: #ef5350">THE OLD TESTAMENT</h3>

						<div v-for="group in oldgroups" class="mb-6">
							<h4 class="font-italic">{{ group }}</h4>
							<p v-for="book in books.filter((i) => i.group == group)">
								<router-link :to="`/bible/${book.id}`">{{ book.name }}</router-link>
							</p>
						</div>
					</v-col>

					<v-col cols="12" md="6">
						<h3 style="color: #ef5350">THE NEW TESTAMENT<br />OF OUR LORD AND SAVIOR<br />JESUS CHRIST</h3>

						<div v-for="group in newgroups" class="mb-6">
							<h4 class="font-italic">{{ group }}</h4>
							<p v-for="book in books.filter((i) => i.group == group)">
								<router-link :to="`/bible/${book.id}`">{{ book.name }}</router-link>
							</p>
						</div>

						<h3 style="color: #ef5350">ADDITIONAL BOOKS</h3>

						<p>The Prayer of Manasses King of Judah</p>
						<p>The Third Book of Esdras</p>
						<p>The Fourth Book of Esdras</p>
						<p>The Prophecy of Abdias</p>

						<h3 style="color: #ef5350">SUPPLEMENTAL MATERIAL</h3>
						<p>The Preface to the Reader</p>
						<p>Hard Words Explicated</p>
					</v-col>
				</v-row>
			</div>
		</v-container>

		<header class="book-ctrl" :class="{ 'mt-12': Capacitor.isNativePlatform() }">
			<v-divider style="max-width: 200px; margin-left: auto" class="mt-0 mb-3 hidden-sm-and-down"></v-divider>

			<v-menu offset-y>
				<template v-slot:activator="{ props }">
					<a class="mx-2" v-bind="props">Contents</a>
				</template>

				<v-list density="compact" style="max-height: 50vh" class="mt-2">
					<v-list-item link to="/bible" title="Contents"></v-list-item>
					<v-list-item v-for="b in books" :key="b.id" link :to="`/bible/${b.id}`" :title="b.name"></v-list-item>
				</v-list>
			</v-menu>

			<span class="mx-2 text-grey">Chapter</span>
		</header>
	</div>
</template>

<script setup lang="ts">
	import { Capacitor } from "@capacitor/core";
	import books from "@/assets/books.json";
	import { useRoute } from "vue-router";

	const route = useRoute();

	let oldgroups: any = [];
	let newgroups: any = [];

	for (let book of books) {
		if (book.testament == "o") {
			if (!oldgroups.includes(book.group)) oldgroups.push(book.group);
		} else if (book.testament == "n") {
			if (!newgroups.includes(book.group)) newgroups.push(book.group);
		}
	}
</script>

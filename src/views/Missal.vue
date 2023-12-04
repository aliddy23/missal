<template>
	<v-container class="book" style="max-width: 1000px">
		<div class="book-title">
			<h1 style="color: #ef5350">MISSALE ROMANUM</h1>
			<h3 style="color: #ef5350">EX DECRETO SACROSANCTI CONCILII TRIDENTINI RESTITUTUM SUMMORUM PONTIFICUM CURA RECOGNITUM</h3>
			<h4 class="font-italic">Latin-English Combined Ordinary and Propers <br />of the Mass of the Roman Rite, 1962</h4>

			<v-divider class="my-12"></v-divider>
		</div>

		<div class="book-contents">
			<h2 class="mb-4">CONTENTS</h2>

			<div v-for="season in seasons" class="mb-6">
				<h4 class="font-italic">{{ season.short }}</h4>
				<p v-for="mass in season.propers">
					<router-link :to="`/missal/mass/${mass.id}`">{{ mass.name }}</router-link>
				</p>
			</div>
		</div>
	</v-container>
</template>

<script setup lang="ts">
	import seasons from "@/assets/seasons.json";
</script>

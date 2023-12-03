<template>
	<div>
		<v-container style="max-width: 500px">
			<v-card link to="/bible" class="mb-6">
				<v-card-text class="text-center">
					<v-icon :size="36" class="mb-6">mdi-book</v-icon>
					<h1 class="mb-3">The Holy Bible</h1>
				</v-card-text>
			</v-card>

			<v-card link to="/missal">
				<v-card-text class="text-center">
					<v-icon :size="36" class="mb-6">mdi-cross</v-icon>
					<h1 class="mb-3">Missale Romanum</h1>
				</v-card-text>
			</v-card>
		</v-container>
	</div>
</template>

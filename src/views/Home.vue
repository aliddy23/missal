<template>
	<div>
		<v-container class="text-center hidden-sm-and-down" style="max-width: 800px">
			<v-row>
				<v-col cols="12" md="6">
					<v-card link to="/bible">
						<img style="height: 50vh" src="@/assets/pope.jpg" />
						<h1 class="mt-2 mb-4">The Holy Bible</h1>
					</v-card>
				</v-col>

				<v-col cols="12" md="6">
					<v-card link to="/missal">
						<img style="height: 50vh" src="@/assets/mass.jpg" />
						<h1 class="mt-2 mb-4">Missale Romanum</h1>
					</v-card>
				</v-col>
			</v-row>
		</v-container>

		<v-container class="text-center">
			<h1>
				<router-link to="/bible">The Holy Bible</router-link>
			</h1>

			<h1>
				<router-link to="/missal">Missale Romanum</router-link>
			</h1>

			<h1>
				<router-link to="/prayers">Most Necessary Prayers</router-link>
			</h1>
		</v-container>
	</div>
</template>

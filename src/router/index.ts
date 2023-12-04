import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			component: () => import("@/views/Home.vue"),
		},
		{
			path: "/bible",
			name: "Bible",
			component: () => import("@/views/Bible.vue"),
		},
		{
			path: "/bible/:book",
			name: "Book",
			component: () => import("@/views/Book.vue"),
		},
		{
			path: "/bible/:book/:chapter",
			name: "Chapter",
			component: () => import("@/views/Chapter.vue"),
		},
		{
			path: "/missal",
			name: "Missal",
			component: () => import("@/views/Missal.vue"),
		},
		{
			path: "/missal/mass/:mass",
			name: "Mass",
			component: () => import("@/views/Mass.vue"),
		},
		{
			path: "/prayers",
			name: "Prayers",
			component: () => import("@/views/Prayers/Index.vue"),
		},
		{
			path: "/prayers/rosary",
			name: "Rosary",
			component: () => import("@/views/Prayers/Rosary.vue"),
		},
	],
});

export default router;

<script setup lang="ts">
const columns = [
	{
		title: {
			img: { src: "/logo.svg", alt: "Logo" },
			heading: "Lichess Accuracy",
		},
		links: [
			{ label: "Source code", href: "https://github.com/dragunovartem99/lichess-accuracy" },
			{
				label: "MIT License",
				href: "https://github.com/dragunovartem99/lichess-accuracy/blob/main/LICENSE",
			},
			{ label: "Support Lichess", href: "https://lichess.org/patron" },
		],
	},
	{
		heading: "What is...",
		links: [
			{ label: "Accuracy", href: "https://lichess.org/page/accuracy" },
			{ label: "ACPL", href: "https://lichess.org/faq#acpl" },
		],
	},
	{
		heading: "Contact author",
		links: [
			{ label: "Email", href: "mailto:dragunovartem99@gmail.com" },
			{ label: "Lichess", href: "https://lichess.org/@/dragunovartem99" },
		],
	},
	{
		heading: "Other projects",
		links: [{ label: "HTML Diagram", href: "https://dragunovartem99.github.io/html-diagram" }],
	},
];
</script>

<template>
	<footer>
		<div class="columns container-wide">
			<div v-for="column of columns">
				<p class="title" v-if="column.title">
					<img :src="column.title.img.src" :alt="column.title.img.alt" />
					{{ column.title.heading }}
				</p>
				<p v-else>{{ column.heading }}</p>
				<a v-for="link of column.links" :href="link.href" target="_blank">
					{{ link.label }}
				</a>
			</div>
		</div>
	</footer>
</template>

<style scoped>
footer {
	background-color: var(--p-surface-800);
	color: var(--p-surface-100);
	padding-block: 3rem;
}
img {
	width: 20px;
}
p,
.title {
	font-weight: 700;
	margin-bottom: 1rem;
}
.columns {
	display: flex;
	gap: 3rem;
	justify-content: space-between;
	flex-wrap: wrap;
}
.columns > div:first-of-type {
	flex-basis: 100%;
}
.title {
	font-size: 1.4rem;
	margin-top: -0.5rem;
}
a {
	display: block;
}
a + a {
	margin-top: 0.5rem;
}
@media (min-width: 640px) {
	.columns > div:first-of-type {
		flex-basis: auto;
	}
}
</style>

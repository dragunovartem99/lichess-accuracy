<script setup lang="ts">
type ColumnLink = { label: string; href: string };

type BaseColumn = {
	links: ColumnLink[];
};

type MainColumn = BaseColumn & {
	title: {
		img: { src: string; alt: string };
		heading: string;
	};
};

type AuxColumn = BaseColumn & { heading: string };

const columns: [MainColumn, ...AuxColumn[]] = [
	{
		title: {
			img: { src: "logo.svg", alt: "Logo" },
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
				<p class="title" v-if="(column as MainColumn).title">
					<img
						:src="(column as MainColumn).title.img.src"
						:alt="(column as MainColumn).title.img.alt"
					/>
					{{ (column as MainColumn).title.heading }}
				</p>
				<p v-else>{{ (column as AuxColumn).heading }}</p>
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
	padding-block: var(--space-9);
}
img {
	width: 20px;
}
p,
.title {
	font-weight: 700;
	margin-bottom: var(--space-1);
}
.columns {
	display: flex;
	gap: var(--space-9);
	justify-content: space-between;
	flex-wrap: wrap;
}
.columns > div:first-of-type {
	flex-basis: 100%;
}
.title {
	font-size: var(--font-4);
	margin-top: calc(var(--space-0) * -1);
}
a {
	display: block;
	max-width: max-content;
	margin-top: var(--space-0);
}
@media (min-width: 640px) {
	.columns > div:first-of-type {
		flex-basis: auto;
	}
}
</style>

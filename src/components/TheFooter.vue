<template>
	<footer>
		<div class="columns container-wide">
			<div>
				<div class="title">
					<img src="/logo.svg" alt="Logo of Lichess Accuracy" />
					Lichess Accuracy
				</div>
				<a href="https://github.com/dragunovartem99/lichess-accuracy" target="_blank">
					Source code
				</a>
				<a
					href="https://github.com/dragunovartem99/lichess-accuracy/blob/main/LICENSE"
					target="_blank"
				>
					MIT License
				</a>
			</div>
			<div>
				<p>What is...</p>
				<a href="https://lichess.org/page/accuracy" target="_blank">Accuracy</a>
				<a href="">ACPL</a>
			</div>
			<div>
				<p>Contact author</p>
				<a href="https://lichess.org/@/dragunovartem99" target="_blank">Lichess</a>
				<a href="mailto:dragunovartem99@gmail.com" target="_blank">Email</a>
			</div>
			<div>
				<p>Other projects</p>
				<a href="https://dragunovartem99.github.io/html-diagram/" target="_blank">
					HTML Diagram
				</a>
			</div>
		</div>
	</footer>
</template>

<style scoped>
footer {
	background-color: var(--p-surface-700);
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
.title {
	font-size: 1.4rem;
	margin-top: -0.5rem;
}
a {
	display: block;
}
a + a {
	margin-top: 0.3rem;
}
</style>

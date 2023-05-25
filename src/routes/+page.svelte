<script lang="ts">
	let emojis = [
		'😀',
		'😃',
		'😄',
		'😁',
		'😆',
		'😅',
		'😂',
		'🤣',
		'😊',
		'😇',
		'🙂',
		'🙃',
		'😉',
		'😌',
		'😍',
		'😘',
		'😗',
		'😙',
		'😚',
		'😋',
		'😛',
		'😜',
		'😝',
		'😎',
		'🤩',
		'🥳',
		'🤗',
		'🙈',
		'🙉',
		'🙊',
		'💋',
		'💌',
		'💘',
		'💝',
		'💖',
		'💗',
		'💓',
		'💞',
		'💕',
		'💟',
		'❣️',
		'💔',
		'❤️',
		'🧡',
		'💛',
		'💚',
		'💙',
		'💜',
		'🤎',
		'🖤',
		'🤍',
		'💯',
		'💢',
		'💥',
		'💫',
		'💦',
		'💨',
		'🕳️',
		'💣',
		'💬',
		'🗨️',
		'🗯️',
		'💭',
		'💤',
		'👋',
		'🤚',
		'🖐️',
		'✋',
		'🖖',
		'👌',
		'🤏',
		'✌️',
		'🤞',
		'🤟',
		'🤘',
		'🤙',
		'👈',
		'👉',
		'👆',
		'🖕',
		'👇',
		'☝️',
		'👍',
		'👎',
		'✊',
		'👊',
		'🤛',
		'🤜',
		'👏',
		'🙌',
		'👐',
		'🤲',
		'🤝',
		'🙏',
		'✍️',
		'💅',
		'🤳',
		'💪',
		'🦾',
		'🦿',
		'🦵',
		'🦶',
		'👂',
		'🦻',
		'👃',
		'🧠',
		'🦷',
		'🦴',
		'👀',
		'👁️',
		'👅',
		'👄',
		'✨',
		'🌟',
		'💫',
		'💥',
		'🔥',
		'🌪️',
		'🌈',
		'💘'
	];

	let emojiRows = [
		['❓', '❓', '❓'],
		['❓', '❓', '❓'],
		['❓', '❓', '❓']
	];

	const selectRandomEmoji = (row: number, col: number) => () => {
		emojiRows[row][col] = emojis[Math.floor(Math.random() * emojis.length)];
	};
</script>

<div class="container">
	<div class="board">
		{#each emojiRows as emojiRow, row}
			{#each emojiRow as emoji, col}
				<button on:click={selectRandomEmoji(row, col)} class="emoji-button">
					{emoji}
				</button>
			{/each}
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.board {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		width: min(90vw, 90vh);
		height: min(90vw, 90vh);
	}

	.emoji-button {
		background: white;
		border-radius: 3%;
		border: none;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		cursor: pointer;

		text-decoration: none;
		outline: none;
		width: 95%;
		height: 95%;
		font-size: min(20vw, 20vh);
	}

	.emoji-button:hover {
		background: #fbfbfb;
	}

	.emoji-button:active {
		background: #fbfbfb;
		box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 3px;
		outline: none;
	}
</style>


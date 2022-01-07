<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    export let item;

    let addToCartLabel = "Add to Cart";
	let inCartLabel = "In Cart";

    function AddToCart()
    {
		dispatch("add", item);
    }
</script>

<div class="menu-item">
    <div class="menu-item-bg {item.color}"></div>
    <img class="menu-item-image" src={item.image} alt={item.name} />
    <div class="menu-item-data">
        <div class="menu-item-name">{item.name}</div>
        <div class="menu-item-price">{item.price}</div>
        {#if item.quantity > 0}
            <button class="in-cart-button"><img class="button-icon" src="images/check.svg" alt="Check"><span>{inCartLabel}</span></button>
        {:else}
            <button class="menu-item-button" on:click={AddToCart}>{addToCartLabel}</button>
        {/if}
    </div>
</div>

<style>
    .menu-item:last-child {
		margin-bottom: 24px;
	}

    .menu-item {
		width: 382.93px;
		height: 178.63px;
		position: relative;
	}

	.menu-item-bg {
		position: absolute;
		width: 370.27px;
		height: 152.27px;
		left: 12.66px;
		top: 17.5px;

		border-radius: 20px;
	}

	.bg-blue {
		background: rgba(122, 179, 243, 0.2);
	}

	.bg-pink {
		background: rgba(233, 121, 178, 0.2);
	}

	.bg-white {
		background: rgba(215, 215, 249, 0.2);
	}

	.menu-item-image {
		position: absolute;
		width: 148.41px;
		height: 144.64px;
		left: 0px;
		top: 0px;

		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	}

	.menu-item-data {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 0px;

		position: absolute;
		width: 158px;
		height: 136px;
		left: 168.92px;
		top: 42.63px;
	}

	.menu-item-name {
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 20px;

		color: #000000;
	}

	.menu-item-price {
		font-family: Poppins;
		font-style: normal;
		font-weight: bold;
		font-size: 32px;
		line-height: 32px;
		margin-top: 16px;
		margin-bottom: 16px;

		color: #000000;
	}

    .menu-item-price::before {
		content: "$";
	}

    .menu-item-button {
		padding: 4px 18px;
		width: 130px;
		height: 32px;
		background: var(--primary);
		border-radius: 20px;

		font-family: Poppins, sans-serif;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 24px;

		text-align: center;

		color: #FFFFFF;

		display: inline-block;
		border: none;
		margin: 0;
		text-decoration: none;
		cursor: pointer;
	}

	.menu-item-button:hover {
		background: #000000;
	}

	.in-cart-button {
        pointer-events: none;
		padding: 4px 18px;
		width: 130px;
		height: 32px;
		background: #000000;
		border-radius: 20px;

		font-family: Poppins;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 24px;

		text-align: center;

		color: #FFFFFF;

		display: inline-block;
		border: none;
		margin: 0;
		text-decoration: none;
		cursor: pointer;
	}

	.button-icon {
		width: 24px;
		height: 12px;
	}
</style>
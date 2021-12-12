<script>
	import CartItem from "./CartItem.svelte";
	import Total from "./Total.svelte";
	export let items;

	let subtotal = 0;
	function UpdateSubTotal(event)
	{
		subtotal = subtotal + parseFloat(event.detail);
	}
</script>

<div class="cart">
	<div class="container">
		<h1>Your Cart</h1>
		{#if items.filter((item) => item.quantity > 0).length == 0}
            <div id="empty-cart" class="empty-cart">Your cart is empty.</div>
        {:else}
            <div class="cart-items" id="cart-items">
                {#each items as cartItem (cartItem.name)}
					{#if cartItem.quantity > 0}
						<CartItem item={cartItem} on:delete on:qty={UpdateSubTotal}/>
					{/if}
                {/each}
            </div>
            <Total {subtotal} />
        {/if}
    </div>
</div>

<style>
	:root {
		--bg-color: #EFF0F6;
		--border-color: #D7D7F9;
		--primary: #6B00F5;
		--patterns-blue: #e1f1fe;
		--pale-rose: #ffe2f0;
		--ghost-white: #f7f7fe;
		--white-ice: #defef0;
	}

	/* custom scrollbar */
	::-webkit-scrollbar {
		width: 18px;
	}

	::-webkit-scrollbar-track {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: #d6dee1;
		border-radius: 18px;
		border: 6px solid transparent;
		background-clip: content-box;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: #a8bbbf;
	}

	.container {
		height: 812px;

		overflow-x: hidden;
		overflow-y: scroll;
		margin-top: 24px;
		margin-bottom: 24px;
	}

	.cart {
		position: absolute;
		width: 375px;
		left: 745px;
		top: 106px;

		background: #FFFFFF;
		box-shadow: 0px 0px 70px #C7CBE3;
		border-radius: 25px;
	}

    h1 {
		width: 190px;
		height: 48px;
		margin-left: 38px;
		margin-top: 49px;

		font-family: Poppins;
		font-style: normal;
		font-weight: bold;
		font-size: 32px;
		line-height: 48px;

		color: #000000;
	}

	.empty-cart {
		position: absolute;
		width: 149px;
		height: 24px;
		left: 37.07px;
		top: 126.43px;

		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;

		text-align: center;

		color: #000000;
	}

	.cart-items {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 0px;

		width: 387.15px;
		margin-top: 20px;
		margin-left: 24px;
	}
</style>
<script>
	import CartItem from "./CartItem.svelte";
    export let items = [frenchFries, salmonVegetables, spaghetti];
</script>

<div class="cart">
    <div class="container">
        <h1>Your Cart</h1>
        {#if items.length == 0}
            <div id="empty-cart" class="empty-cart">Your cart is empty.</div>
        {:else}
            <div class="cart-items" id="cart-items">
                {#each items as cartItem}
                    <CartItem item={cartItem}/>
                {/each}
            </div>
            <div id="total-container">
                <div class="subtotal">
                    <span class="label">Subtotal:</span><span class="amount">20.10</span>
                </div>
                <div class="subtotal">
                    <span class="label">Tax:</span><span class="amount">1.96</span>
                </div>
                <div class="subtotal">
                    <span class="label">Total:</span><span class="amount purple">30.12</span>
                </div>
            </div>
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

	/* body {
		background: url('images/bg__left.svg') left 10% no-repeat,
			url('images/bg__top-right.svg') right top no-repeat,
			#EFF0F6 url('images/bg__btm-right.svg') right bottom no-repeat;
		font-family: 'Poppins', sans-serif;
		margin: 0;
		padding: 0;
		min-height: 100%;
		min-width: 100%;
	} */

	.container {
		height: 812px;

		overflow-x: hidden;
		overflow-y: scroll;
		margin-top: 24px;
		margin-bottom: 24px;
	}

	.subtotal:last-child {
		margin-bottom: 24px;
	}

	.amount::before {
		content: "$";
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

	/* .cart-item {
		position: relative;
		width: 321.28px;
		height: 100.67px;

		border-bottom: 1px solid var(--border-color);
		padding-bottom: 24px;
		margin-bottom: 28px;
	} */

	/* .cart-item:last-of-type {
		border-bottom: 5px solid var(--border-color);
	} */

	/* .cart-item-image {
		width: 64.46px;
		height: 62.82px;

		filter: drop-shadow(0px 5.02591px 5.02591px rgba(0, 0, 0, 0.25));
	} */

	/* .cart-item-qty {
		position: absolute;
		width: 32px;
		height: 32px;
		left: 16px;
		top: 16px;

		background: #000000;
		border-radius: 20px;

		font-family: Poppins;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 32px;

		text-align: center;

		color: #FFFFFF;
	} */

	/* .cart-item-data {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 0px;

		position: absolute;
		width: 239px;
		height: 91.62px;
		left: 83px;
		top: 9px;
	} */

	/* .cart-item-name {
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 20px;

		color: #000000;
	} */

	/* .cart-item-price {
		font-family: Poppins;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 32px;

		color: #000000;
	} */

	/* .cart-item-menu {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0px;

		position: static;
		width: 239px;
		height: 32px;
	} */

	/* .cart-item-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 32px;
		height: 32px;
		left: 0px;
		top: 0px;

		background: var(--primary);
		border-radius: 20px;

		color: #FFFFFF;

		border: none;
		margin: 0;
		cursor: pointer;
	} */

	/* .cart-item-btn:hover,
	.menu-item-button:hover {
		background: #000000;
	} */

	/* .flip {
		-webkit-transform: scaleX(-1);
		transform: scaleX(-1);
	} */

	/* .cart-item-menu-qty {
		font-family: Poppins;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 24px;

		text-align: center;

		color: #000000;
	} */

	/* .cart-item-total {
		font-family: Poppins;
		font-style: normal;
		font-weight: bold;
		font-size: 32px;
		line-height: 32px;

		text-align: right;

		color: #000000;
	} */

	.subtotal {
		display: flex;
		justify-content: end;
		align-items: baseline;
		margin-right: 26px;
	}

	.label,
	.amount {
		display: inline-block;
	}

	.label {
		width: 96px;
		font-family: Poppins;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 32px;

		text-align: right;

		color: #000000;
		margin-right: 20px;
	}

	.amount {
		width: 105px;
		font-family: Poppins;
		font-style: normal;
		font-weight: bold;
		font-size: 32px;
		line-height: 32px;

		text-align: right;

		color: #000000;
	}

	.purple {
		color: var(--primary);
	}
</style>
<script>
	import MenuItem from "./MenuItem.svelte";
	export let items;
    // const frenchFries = {
	// 	name: 'French Fries with Ketchup',
	// 	price: '2.23',
	// 	image: 'images/plate__french-fries.png'
	// };
	// const salmonVegetables = {
	// 	name: 'Salmon and Vegetables',
	// 	price: '5.12',
	// 	image: 'images/plate__salmon-vegetables.png'
	// };
	// const spaghetti = {
	// 	name: 'Spaghetti with Meat Sauce',
	// 	price: '7.82',
	// 	image: 'images/plate__spaghetti-meat-sauce.png'
	// };
</script>

<div class="menu">
    <div class="container">
        <h1>To Go Menu</h1>
        <div class="menu-items">
			{#each items as menuItem}
                <MenuItem item={menuItem}/>
            {/each}
            <!-- <MenuItem item={frenchFries} />
            <MenuItem item={salmonVegetables} color="bg-pink" />
            <MenuItem item={spaghetti} color="bg-white"/>
            <MenuItem item={frenchFries} />
            <MenuItem item={salmonVegetables} color="bg-pink" />
            <MenuItem item={spaghetti} color="bg-white"/> -->
        </div>
    </div>
</div>

<style>
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

    .menu {
		position: absolute;
		width: 375px;

		left: 320px;
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

	.menu-items {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 0px;

		width: 387.15px;
		margin-top: 20px;
		margin-left: 24px;
	}
</style>
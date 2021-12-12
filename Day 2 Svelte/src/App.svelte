<svelte:head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import Menu from "./Menu.svelte";
	import Cart from "./Cart.svelte";

	const frenchFries = {
		name: "French Fries with Ketchup",
		price: 2.23,
		image: "images/plate__french-fries.png",
		quantity: 0,
		color: "bg-blue"
	};
    const salmonVegetables = {
		name: "Salmon and Vegetables",
		price: 5.12,
		image: "images/plate__salmon-vegetables.png",
		quantity: 0,
		color: "bg-pink"
	};
	const spaghetti = {
		name: "Spaghetti with Meat Sauce",
		price: 7.82,
		image: "images/plate__spaghetti-meat-sauce.png",
		quantity: 0,
		color: "bg-white"
	};
	const chickenSalad = {
		name: "Chicken Salad with Parmesean",
		price: 6.98,
		image: "images/plate__chicken-salad.png",
		quantity: 0,
		color: "bg-blue"
	};
	const fishSticks = {
		name: "Fish Sticks and Fries",
		price: 6.34,
		image: "images/plate__fish-sticks-fries.png",
		quantity: 0,
		color: "bg-pink"
	};
	const ravioli = {
		name: "Ravioli",
		price: 6.45,
		image: "images/plate__ravioli.png",
		quantity: 0,
		color: "bg-white"
	};
	const tortellini = {
		name: "Tortellini",
		price: 6.05,
		image: "images/plate__tortellini.png",
		quantity: 0,
		color: "bg-blue"
	};
	const baconEggs = {
		name: "Bacon, Eggs, and Toast",
		price: 5.99,
		image: "images/plate__bacon-eggs.png",
		quantity: 0,
		color: "bg-pink"
	};
	var menuItems = [frenchFries, salmonVegetables, spaghetti, chickenSalad, fishSticks, ravioli, tortellini, baconEggs];

	function AddToCart(event) {
		event.detail.quantity = 1;
		menuItems = menuItems;
	}

	function RemoveCartItem(event) {
		event.detail.quantity = 0;
		menuItems = menuItems;
	}
</script>

<main>
	<Menu items={menuItems} on:add={AddToCart}/>
	<Cart items={menuItems} on:delete={RemoveCartItem}/>
</main>
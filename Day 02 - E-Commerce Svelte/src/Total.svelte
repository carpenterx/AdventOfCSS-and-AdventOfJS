<script>
    export let subtotal;

    let taxRate = 0.0975;
</script>

<div id="total-container">
    <div class="subtotal">
        <span class="label">Subtotal:</span><span class="amount">{subtotal.toFixed(2)}</span>
    </div>
    <div class="subtotal">
        <span class="label">Tax:</span><span class="amount">{(subtotal * taxRate).toFixed(2)}</span>
    </div>
    <div class="subtotal">
        <span class="label">Total:</span><span class="amount purple">{((subtotal * taxRate) + subtotal).toFixed(2)}</span>
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

    .subtotal:last-child {
		margin-bottom: 24px;
	}

	.amount::before {
		content: "$";
	}

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
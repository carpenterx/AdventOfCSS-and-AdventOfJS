const budgetInput = document.getElementById("budget")
const expenseInput = document.getElementById("expense")
const amountInput = document.getElementById("amount")
const addBtn = document.getElementById("input-add")
const expensesContainer = document.getElementById("expenses-list")
const incomeValue = document.getElementById("income-value")
const expensesValue = document.getElementById("expenses-value")
const balanceValue = document.getElementById("balance-value")

expenses = []

addBtn.addEventListener("click", AddExpense)
budgetInput.addEventListener("blur", UpdateBudget)

function AddExpense() {
    expenses.push({name: expenseInput.value, amount: parseFloat(amountInput.value)})
    expensesValue.value = ""
    balanceValue.value = ""
    UpdateExpensesList()
    UpdateBudget()
}

function UpdateExpensesList() {
    expensesContainer.innerHTML = ""
    for (let i = 0; i < expenses.length; i++) {
        expensesContainer.innerHTML += 
        `
            <div class="expense">
                <div class="expense-name">${expenses[i].name}</div>
                <div class="expense-amount">$${expenses[i].amount}</div>
                <div class="expense-delete" onclick="RemoveExpenseAtIndex(${i})"><img src="images/trash.svg" alt="delete expense"></div>
            </div>
        `
    }
}

function RemoveExpenseAtIndex(index) {
    expenses.splice(index, 1)
    UpdateExpensesList()
    UpdateBudget()
}

function UpdateBudget() {
    let budget = parseFloat(budgetInput.value)
    let totalExpenses = CalculateExpenses()
    let balance = budget - totalExpenses
    incomeValue.innerText = `$${budget.toFixed(2)}`
    expensesValue.innerText = `$${totalExpenses.toFixed(2)}`
    balanceValue.innerText = `$${balance.toFixed(2)}`
    if (balance < 0) {
        balanceValue.classList.add("negative")
    } else {
        balanceValue.classList.remove("negative")
    }
}

function CalculateExpenses() {
    var totalExpenses = 0
    for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i].amount
    }

    return totalExpenses
}
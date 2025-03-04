// Expense Tracker
let expenses = [];

function addExpense() {
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (name && amount) {
        expenses.push({ name, amount });
        updateExpenseList();
    }
}

function updateExpenseList() {
    const list = document.getElementById('expense-list');
    list.innerHTML = '';
    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
        list.appendChild(li);
    });
}

// Currency Converter (Mock Function)
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    // Mock conversion rate (replace with real API later)
    const conversionRate = 0.85; // Example: 1 USD = 0.85 EUR
    const convertedAmount = amount * conversionRate;

    document.getElementById('conversion-result').textContent = 
        `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
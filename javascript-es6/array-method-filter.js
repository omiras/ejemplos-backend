const notasExamenFinal = [10, 9, 3, 5, 5, 5, 5];

// Dame todas las notas que tienen un excelente (mayor o igual a 9)

const notasExcelentes = notasExamenFinal.filter(n => n >= 9); // devuelve un array , SIEMPRE

console.log("Notas excelentes: ", notasExcelentes);

const expenses = [{ "id": 1, "timestamp": 1745452800, "category": "food", "concept": "Business meeting", "amount": 20 }, { "id": 2, "timestamp": 1745539200, "category": "groceries", "concept": "Weekly groceries", "amount": 45.5 }, { "id": 3, "timestamp": 1745625600, "category": "transport", "concept": "Bus ticket", "amount": 10 }];

const foodExpenses = expenses.filter( e => e.category == "food");

console.log("Food expenses: ", foodExpenses);

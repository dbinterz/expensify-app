import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup removeExpense action abject', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup editExpense action object', () => {
    const action = editExpense('2345', {note: 'new note value'});
    expect(action).toEqual({
        id: '2345',
        type:'EDIT_EXPENSE',
        updates:{
            note:'new note value'
        }
    });
});

test('should setup addExpense action object with provided values', () => {
    const expenseData = {
        description: "Rent",
        amount: 109500,
        createdAt: 1000,
        note: 'This was the rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
            expense:{
                ...expenseData,
                id: expect.any(String)
            }
    })
});

test('should setup addExpense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
            expense:{
                description:'', 
                note:'', 
                amount:0, 
                createdAt:0,
                id: expect.any(String)
            }
    });
});
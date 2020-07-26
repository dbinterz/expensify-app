import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',() => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () =>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state=expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense by id not found', () =>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    };
    const state=expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        id:'4',
        description:'Water',
        note: '',
        amount:4900,
        createdAt:0
    };
    const state=expensesReducer(expenses, action);
    expect(state.length).toBe(4);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates:{
            description:'New Gum'
        }
        
    };
    const state=expensesReducer(expenses, action);
    expect(state[0].description).toBe('New Gum');
});

test('should not edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '400',
        updates:{
            description:'New Gum'
        }
        
    };
    const state=expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
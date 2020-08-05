import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
            expense:expenses[2]
    })
});

test('should add expenses to database and store', (done) =>{
    const store = createMockStore({});
    const expenseData ={
        description: 'mouse',
        amount:3000,
        note: 'lwefhjj',
        createdAt: 0
    };
    
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});


test('should add expenses to database with defaults and store', (done) =>{
    const store = createMockStore({});
    const expenseDefaults ={
        description: '',
        amount:0,
        note: '',
        createdAt: 0
    };
    
    store.dispatch(startAddExpense(expenseDefaults)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
        });
});

// test('should setup addExpense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//             expense:{
//                 description:'', 
//                 note:'', 
//                 amount:0, 
//                 createdAt:0,
//                 id: expect.any(String)
//             }
//     });
// });
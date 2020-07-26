import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () =>{
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('Amount')
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('Date');

});

test('should set textFilter', () => {
    const text = 'something';
    const action = {
        type: 'SET_TEXT_FILTER', 
        text: text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set startDate Filter', () => {
    const startDate = 0;
    const action = {
        type: 'SET_START_DATE', 
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(0);
});

test('should set endDate Filter', () => {
    const endDate = 0;
    const action = {
        type: 'SET_END_DATE', 
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(0);
});
import {
    setStartDate, 
    setEndDate, 
    setTextFilter, 
    sortByDate, 
    sortByAmount
} from '../../actions/filters';
import moment from 'moment';

test('test should setup setStart action',() =>{
    const action= setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    });
});

test('test should setup setEnd action',() =>{
    const action= setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should call sortByAmount', () =>{
    const action=sortByAmount();
    expect(action).toEqual({type:'SORT_BY_AMOUNT'});
});

test('should call sortByDate', () =>{
    const action=sortByDate();
    expect(action).toEqual({type:'SORT_BY_DATE'});
});

test('should setup setTextFilter with provided values', () => {
    const action=setTextFilter('bill');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        update: 'bill'
    });
});

test('should setup setTextFilter with default values', () => {
    const action=setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        update: ''
    });
});
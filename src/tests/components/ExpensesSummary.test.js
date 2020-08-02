import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme';

const wrapper = shallow(<ExpensesSummary />);

test('should render ExpenseListFilter', ()=>{
    const wrapper = shallow(<ExpensesSummary />);
    expect(wrapper).toMatchSnapshot();
});

test('should render single expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={235123} />);
    expect(wrapper).toMatchSnapshot();
});
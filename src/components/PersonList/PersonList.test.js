import React from 'react';
import ReactDOM from 'react-dom';
import PersonList from './PersonList';
import { shallow } from 'enzyme';
import sinon from 'sinon';

it('displays a list of people', () => {
    //Setup
    const peopleData = [
        {firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'},
        {firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2'}
    ]
    const personListWrapper = shallow(<PersonList people={peopleData}/>)
    const personList = personListWrapper.find('a')

    //Assert
    expect(personList).toHaveLength(2)
});

it('calls selectPerson when a person is clicked', () => {
    //Setup
    const peopleData = [
        {firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'},
        {firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2'}
    ]

    const selectPerson = sinon.stub()
    const personListWrapper = shallow(<PersonList people={peopleData} selectPerson={selectPerson}/>)
    const onePerson = personListWrapper.find('a').at(0)

    //Exercise
    onePerson.simulate('click')

    //Assert
    expect(selectPerson.calledOnce).toBe(true)
});

it('check for Add button in PersonList', () => {

    // setup
    const personData = [{firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'}];

    const personListWrapper = shallow(<PersonList people={personData}/>)
    const personList = personListWrapper.find('button')

    // assert
    expect(personList).toHaveLength(1)
})

it('calls addPerson in PersonList when Add Button is clicked', () => {
    // setup
    const personData = [{firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'}];
    const addPerson = sinon.stub()
    const personListWrapper = shallow(<PersonList people={personData} addPerson={addPerson}/>)
    
    const addPersonButton = personListWrapper.find('button')

    // exercise
    addPersonButton.simulate('click');

    // assert
    expect(addPerson.calledOnce).toBe(true)
    
})


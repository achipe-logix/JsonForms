import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { Actions, jsonformsReducer } from '@jsonforms/core';
import {
  materialRenderers,
  materialCells
} from '@jsonforms/material-renderers';
import { JsonFormsReduxContext } from '@jsonforms/react';
import radioControl from './radio/';
import radioControlTester from './radio/tester';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  combineReducers({ jsonforms: jsonformsReducer() }),
  {
    jsonforms: {
      cells: materialCells,
      renderers: materialRenderers
    }
  }
);

const schema = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      minLength: 3,
      description: 'Please enter your first name'
    },
    lastName: {
      type: 'string',
      minLength: 3,
      description: 'Please enter your last name'
    },
    companyName: {
      type: 'string',
      minLength: 3,
      description: 'Please enter your company name'
    },
    email: {
      type: 'string',
      format: 'email',
      description: 'Please enter your email'
    },
    mobileNumber: {
      type: 'number',
      description: 'Please enter your mobile number'
    },
    homePhone: {
      type: 'number'
    },
    mailingAddress: {
      type: 'string',
      minLength: 3,
      description: 'Please enter your mailing address'
    },
    country: {
      type: 'string',
      enum: ['Canada', 'Chile', 'Finland', 'Philippines', 'Poland', 'Sweden']
    },
    state: {
      type: 'string',
      enum: ['Canada', 'Chile', 'Finland', 'Philippines', 'Poland', 'Sweden']
    },
    city: {
      type: 'string',
      description: 'Please enter your city'
    },
    zip: {
      type: 'string',
      description: 'Please enter your zip code'
    },
    ssn: {
      type: 'string',
      title: 'SSN',
    },
    dateOfBirth: {
      type: 'string',
      format: 'date',
      title: 'Date of Birth',
      description: 'Please enter your birth date.'
    },
    dateOfHire: {
      type: 'string',
      title: 'Date of Hire',
      format: 'date',
    },
    employeeID: {
      type: 'number'
    },
    gender: {
      type: 'boolean',
      title: 'Gender',
      enum: ['Male', 'Female']
    },
    status: {
      type: 'boolean',
      title: 'Status',
      enum: ['Single', 'Married', 'Divorced', 'Widowed']
    },
    callType: {
      type: 'boolean',
      title: 'Call Type',
      enum: ["Workers' Company", 'Medical']
    },
    languageSpoken: {
      type: 'string',
      enum: ['English', 'French']
    },
    companyName2: {
      type: 'string',
      minLength: 3,
      description: 'Company Name'
    },
    position: {
      type: 'string',
      minLength: 3,
      description: 'Position'
    },
    jobCategory: {
      type: 'string',
      minLength: 3,
      description: 'Job Category'
    },
    supervisorName: {
      type: 'string',
      minLength: 3,
      description: 'Supervisor Name'
    },
    supervisorContact: {
      type: 'string',
      minLength: 3,
      description: 'Supervisor Contact'
    },
    spouseEmployed: {
      type: 'string',
      enum: ['Yes', 'No']
    },
    numberOfDependents: {
      type: 'number',
      minLength: 3,
      description: 'Number of Dependents'
    },
    interpreter: {
      type: 'string',
      enum: ['Yes', 'No']
    },
    bodyPart: {
      type: 'string',
      minLength: 3,
      description: 'Body Part'
    },
    causeOfInjury: {
      type: 'string',
      minLength: 3,
      description: 'Cause of Injury'
    },
    objectOfInjury: {
      type: 'string',
      minLength: 3,
      description: 'Object of Injury'
    },
    lossType: {
      type: 'string',
      minLength: 3,
      description: 'Loss Type'
    },
    dateOfIllness: {
      type: 'string',
      format: 'date',
      title: 'Date of Illness/Injury Date',
      description: 'Please enter the date of your illness/injury'
    },
    timeInjury: {
      type: 'string',
      format: 'time',
      title: 'Time of Injury',
      description: 'Please enter the time of your injury'
    },
    timeZone: {
      type: 'string',
      enum: ['A', 'ACDT', 'ACST', 'ACT', 'ACWST', 'ADT','AEDT','AEST','AET','AFT']
    },
    dateEmployerNotified: {
      type: 'string',
      format: 'date',
      title: 'Date Employer Notified',
      description: 'Please enter the date of notification'
    },
    reportedTo: {
      type: 'string',
      minLength: 3,
      description: 'Reported To'
    },
  },
  required: ['firstName', 'lastName', 'companyName', 'email', 'mobileNumber', 'mailingAddress', 'state', 'city', 'zip', 'dateOfBirth', 'gender', 'status','position','jobCategory','bodyPart','causeOfInjury','objectOfInjury','lossType','dateOfIllness','timeInjury','dateEmployerNotified']
};

const uischema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/firstName'
        },
        {
          type: 'Control',
          scope: '#/properties/lastName'
        },
        {
          type: 'Control',
          scope: '#/properties/companyName'
        }
      ]
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/email'
        },
        {
          type: 'Control',
          scope: '#/properties/mobileNumber'
        },
        {
          type: 'Control',
          scope: '#/properties/homePhone'
        }
      ]
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/mailingAddress'
        },
      ]
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/country'
        },
        {
          type: 'Control',
          scope: '#/properties/state'
        },
        {
          type: 'Control',
          scope: '#/properties/city'
        },
        {
          type: 'Control',
          scope: '#/properties/zip'
        }
      ]
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/ssn'
        },
        {
          type: 'Control',
          scope: '#/properties/dateOfBirth'
        },
        {
          type: 'Control',
          scope: '#/properties/dateOfHire'
        }
      ]
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/employeeID'
        },
        {
          type: 'Control',
          scope: '#/properties/gender',
          options: {
            format: 'radio',
          }
        }
      ]
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/status',
          options: {
            format: 'radio',
          }
        },
        {
          type: 'Control',
          scope: '#/properties/languageSpoken',
        }
      ]
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/callType',
          options: {
            format: 'radio',
          }
        }
      ]
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/companyName2'
        },
        {
          type: 'Control',
          scope: '#/properties/position'
        },
        {
          type: 'Control',
          scope: '#/properties/jobCategory'
        }
      ]
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/supervisorName'
        },
        {
          type: 'Control',
          scope: '#/properties/supervisorContact'
        }
      ]
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/spouseEmployed',
          options: {
            format: 'radio',
          }
        },
        {
          type: 'Control',
          scope: '#/properties/numberOfDependents'
        }
      ]
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/interpreter',
          options: {
            format: 'radio',
          }
        }
      ]
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/bodyPart'
        },
        {
          type: 'Control',
          scope: '#/properties/causeOfInjury'
        }
      ]
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/objectOfInjury'
        },
        {
          type: 'Control',
          scope: '#/properties/lossType'
        }
      ]
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/dateOfIllness'
        },
        {
          type: 'Control',
          scope: '#/properties/timeInjury'
        },
        {
          type: 'Control',
          scope: '#/properties/timeZone'
        }
      ]
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/dateEmployerNotified'
        },
        {
          type: 'Control',
          scope: '#/properties/reportedTo'
        }
      ]
    },
  ]
};

store.dispatch(Actions.init({
  gender: 'Male',
  status: 'Single',
}, schema, uischema));
store.dispatch(Actions.registerRenderer(radioControlTester, radioControl));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <JsonFormsReduxContext>
        <App />
      </JsonFormsReduxContext>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

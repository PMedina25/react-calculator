import React, { Component} from "react";
import "./App.css";

/**
 * Import components
 */
import Result from './components/Result';
import Display from './components/Display';
import NumberKey from './components/NumberKey';
import ClearKey from './components/ClearKey';
import OperationKey from './components/OperationKey';
import EqualsKey from './components/EqualsKey';
import Footer from './components/Footer';


/**
 * Import constants
 */
import { NUMBER_KEYS } from './constants/numberKeys';
import { OPERATION_KEYS } from './constants/operationKeys';


/**
 * App component
 * @returns the render of the app
 */
const App = () => {

  return (
    <>
      <div id="calculator">

        <Result />

        <Display />

        <div id="keys-grid-area">

          <ClearKey />

          {
            NUMBER_KEYS.map(elem => <NumberKey key={elem.id} identificator={elem.id} numberKey={elem.number} />)
          }

          {
            OPERATION_KEYS.map(elem => <OperationKey key={elem.id} identificator={elem.id} operationKey={elem.operation} />)
          }

          <EqualsKey />

        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default App;
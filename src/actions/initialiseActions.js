/*
 * initialiseActions.js
 *
 */

import ActionTypes from '../constants/actionTypes';


/**
 * Initialisation actions.
 *
 */
class InitialiseActions {

  /**
   * Creates an initialise actions.
   *
   * @param dispatcher Dispatcher to use.
   */
  constructor(dispatcher) {
    this._dispatcher = dispatcher;
  }


  /**
   * Initialises the application.
   *
   */
  initApp() {
    this._dispatcher.dispatch({
      actionType: ActionTypes.INITIALISE
    });
  }

}


import Dispatcher from '../dispatcher/appDispatcher';
export default new InitialiseActions(Dispatcher);

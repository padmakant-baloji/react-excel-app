import { combineReducers } from 'redux';
import session from "./session"
import homepagereducer from './homepagereducer'

const reducers = {
    session,
    homepagereducer
  };
  
  module.exports = combineReducers(reducers);
import { combineReducers } from 'redux';
import productData from './productData'
import filters from './filters'

export default combineReducers({ productData, filters });
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';


const initialState = {
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    totalPrice:2,
    building: false
}

const ingredientPrices = {
    salad: 0.5,
    cheese : 0.4,
    meat: 1.3,
    bacon: 0.7   
}

const reducer = (state = initialState,action)=>{
        switch(action.type){
            case actionTypes.ADD_INGREDIENT:
                const updatedIngredient = {[action.ingredientName]:state.ingredients[action.ingredientName] + 1}
                const updatedIngredients = updateObject(state.ingredients,updatedIngredient);
                const updatedState = {
                    ingredients:updatedIngredients,
                    totalPrice: state.totalPrice + ingredientPrices[action.ingredientName],
                    building: true
                }
                return updateObject(state,updatedState);
            case actionTypes.REMOVE_INGREDIENT:
                const updatedIng = {[action.ingredientName]:state.ingredients[action.ingredientName] - 1}
                const updatedIngs = updateObject(state.ingredients,updatedIng);
                const updatedSt = {
                    ingredients:updatedIngs,
                    totalPrice: state.totalPrice - ingredientPrices[action.ingredientName],
                    building:true
                }
                return updateObject(state,updatedSt);
            default:
                return state;
        }
};
export default reducer;
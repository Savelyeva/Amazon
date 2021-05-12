import { goodsLoaded, myProductCreated, selectProduct ,editProduct,productEdited, preloaderState} from "../action/action";


const initialState={
    allGoods:[],
    goods:[],
    cartsNumbers:0,
    myGoods:[],
    editableProduct:{},
    preloaderState:true
};

function reducer(state=initialState,action){
    switch(action.type){
        case selectProduct:
            return{
                ...state,
                goods:[...state.goods,action.payload],
                cartsNumbers:state.cartsNumbers+1
            }
        case goodsLoaded:
            return {
                ...state,
                allGoods:action.payload
            }
        case myProductCreated:
            return{
                ...state,
                myGoods:[...state.myGoods,action.payload]
            }
        case editProduct:
            return{
              ...state,
              editableProduct:action.payload,
            }
        case productEdited:
            return{
                ...state,
                myGoods:state.myGoods.map(item=>{
                    if(item.id===action.payload.id){
                     return action.payload;
                    }else{
                     return item;
                    }
                })
            }
        case preloaderState:
            return {
                ...state,
                preloaderState:action.payload

            }
        default :return state;
    }
}
export default reducer;
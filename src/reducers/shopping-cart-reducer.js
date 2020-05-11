let moreIngredientsList = [
  {id: 1, imgUrl : 'https://cdn.mos.cms.futurecdn.net/EBEXFvqez44hySrWqNs3CZ-320-80.jpg'},
  {id: 2, imgUrl : 'https://www.aswaaqonline.ae/content/images/thumbs/009/0098512_tomato-500g_550.jpeg'},
  {id: 3, imgUrl : 'https://5.imimg.com/data5/NC/UD/MY-68350052/fresho-fresh-white-eggs-500x500.jpg'},
  {id: 4, imgUrl : 'https://upload.wikimedia.org/wikipedia/commons/2/21/Tuna_assortment.png'},
  {id: 5, imgUrl : 'https://3.imimg.com/data3/GJ/SP/MY-7625410/fresh-potato-500x500.jpg'},
  {id: 6, imgUrl : 'https://5.imimg.com/data5/TB/TU/MY-1542160/leaf-lettuce1-500x500.jpg'},
  {id: 7, imgUrl : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190423-microwave-corn-140-1556657770.jpg?crop=0.534xw:0.801xh;0.245xw,0.115xh&resize=480:*'},
  {id: 8, imgUrl : 'https://www.alkarty.com/images/gallery/onion.jpg'},
  {id: 9, imgUrl : 'https://static.punjabkesari.in/multimedia/2018_2image_09_11_131852300mushroom-ll.jpg'},
  {id: 10, imgUrl : 'https://www.carveyourcraving.com/wp-content/uploads/2019/05/Vegan-Pasta-primavera-with-roasted-vegetables-500x500.jpg'},
  {id: 11, imgUrl : 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/10/28/2/tm1c56_quick_pickles.jpg.rend.hgtvcom.826.620.suffix/1547586962900.jpeg'}
]



const defaultState = {
  allIngredientsList: [],
  currentPage  : "contains-greetings",
  noOfItemsInCart : [],
}

export default (state = defaultState, action) => {
  switch (action.type) {

    // case 'GET_ALL_INGREDIENTS_LIST_PENDING': {
    //   return {
    //     ...state,
    //     userProfile: {},
    //     loading: true,
    //     errors: {}
    //   }
    // }

    case 'GET_ALL_INGREDIENTS_LIST': {
      let tmpArr  = [];
      action.payload.map((item, key)=>{
        moreIngredientsList.map(items=>{
          if(key+1 === items.id){
            tmpArr.push({...item, ...items})
          }
        })
      })

      return {
        ...state,
        allIngredientsList: tmpArr,
        allIngredientsListCopy: tmpArr,
        loading: false,
        errors: {}
      }
    }

    // case 'GET_ALL_INGREDIENTS_LIST_REJECTED': {
    //   return {
    //     ...state,
    //     loading: false,
    //     errors: { global: action.payload.message },
    //   }
    // }


    case 'UPDATE_CURRENT_PAGE': {
      return {
        ...state,
        currentPage : action.payload,
        loading: false,
        errors: {}
      }
    }

    case 'ADD_TO_CART_PRODUCT': {
      let crntData = action.payload;
      let tmpArr = [];
       state.allIngredientsList.map(item=>{
        if(item.id === crntData.id ){
          tmpArr.push({
            ...item, isSelected : true , noOfSelect : item.noOfSelect ? item.noOfSelect + 1 : 1, totalPrice : item.noOfSelect ? (item.noOfSelect + 1) * item.price : item.price,
          })
        } else {
          tmpArr.push(item)
        }
      })
      // for filtering all selected item and assigning to noOfItemsInCart
      let selecredItem = tmpArr.filter(item=> item.isSelected !== undefined && item.isSelected === true );

      return {
        ...state,
        noOfItemsInCart : selecredItem,
        allIngredientsList: tmpArr,
        allIngredientsListCopy: tmpArr,
        loading: false,
        errors: {}
      }
    }

    default:
      return state;
  }
}
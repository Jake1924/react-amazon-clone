export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [
    {
      id: 1223455,
      title: "The Rishav show how to Startup: How constant Innovation creates",
      price: 11.96,
      rating: 4,
      image: "https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg",
    },
  ],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic to add to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      //Logic to remove item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exist in basket, remove it ..
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "cant remove product (id: ${action.id}) as its not in basket "
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
      break;
    default:
      return state;
  }
};

export default reducer;

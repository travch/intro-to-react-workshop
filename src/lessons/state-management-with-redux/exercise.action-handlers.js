export const deleteItem = (state, action) => {
  const newItems = state.items.filter((_, index) => {
    return index !== action.index;
  });
  return {
    ...state,
    items: newItems,
  };
};

/*********************************************************************
 *         Don't look below here unless you want the answer!         *
 * Try your best, but if you get stuck, you have this to reflect on! *
 *********************************************************************/











































/**
 * export const deleteItem = (state, { itemIndex }) => ({
 *   ...state,
 *   items: state.items.filter((item, index) => index !== itemIndex),
 * });
 **/

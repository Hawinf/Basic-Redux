
export const handleAdd = (counterReducer) => dispatch => {
    let newTotal = counterReducer.total + 1;

    dispatch({
      type: 'TAMBAH',
      payload: newTotal,
    });
  };

  export const handleMin = (counterReducer) => dispatch => {
    let newTotal = counterReducer.total - 1;

    dispatch({
      type: 'KURANG',
      payload: newTotal,
    });
  };
export const handleAuth = (isLogin) => dispatch => {
    // logic
    // let newIsLogin = isLogin === true ? false : true;
    let newIsLogin = !isLogin;

    dispatch({
        type: 'AUTH',
        payload: newIsLogin,
    });
};
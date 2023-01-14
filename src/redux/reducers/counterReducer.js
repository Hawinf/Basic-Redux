const counterState = {
    total: 0,
}

export const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case 'TAMBAH':
            return {
                ...counterState,
                total: action.payload,
            };

        case 'KURANG':
            return {
                ...counterState,
                total: action.payload,
            };
        default:
            return state;
    }
}
export const authReducer = (state, action) => {
    const {
        type, 
        payload: {isAuthenticated, user, message}
    } = action

    switch(type) {
        case 'SET_AUTH':
            return {
                ...state,
                isAuthenticated,
                user,
                message,
            }

        default:
            return state

        
    }
} 
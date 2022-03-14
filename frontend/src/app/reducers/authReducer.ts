const initialState = {data:[]}
export const authReducer= (state:any = initialState, action:any) => {
    switch (action.type) {
        case 'ADDED_USER':
           return { data: [
            ...state.data,
                  action.payload  ] }
        default:
          return state
      }
}

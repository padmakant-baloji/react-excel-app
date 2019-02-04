const initialSession = {
    data:[]
   
}

const homepagereducer = (state = initialSession, action) => {
    switch (action.type) {
        case "UPDATE_DETAILS":
        const newdata = action.payload;
        // let data = [];
        // data.push(...state,...newdata)
            return {
                ...state,
                data:[
                    ...state.data,
                    ...newdata
                ]
            }
            break;

        default:
            return {
                ...state,
            }
            break;
    }
}

module.exports = homepagereducer; 
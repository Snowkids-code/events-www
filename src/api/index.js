import axios from 'axios'

let ourApi = {
    events:{
        getAllEvents: async()=> await axios.get('http://localhost:500/api/event')
    },
    cart:{
        addToCart: async()=>await axios.post('http://localhost:2121/api/cart/add-to-cart')
    }
}

export default ourApi
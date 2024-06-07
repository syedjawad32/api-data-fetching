import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key:'1e0ef89e3fd6429783091ea38bd1da9c'
    }
})


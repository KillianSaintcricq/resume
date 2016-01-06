// This file is temporary. It will be deleted when the API will be implemented.

const api = () => {
    if (process.env.NODE_ENV === 'production') {
        return "https://killiansaintcricq.herokuapp.com/";
    } else {
        return "http://localhost:1993/";
    }
};

export default api;
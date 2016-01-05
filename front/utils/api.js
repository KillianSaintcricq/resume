// This file is temporary. It will be deleted when the API will be implemented.

const api = () => {
    if (process.env.NODE_ENV === 'development') {
        return "http://localhost:1993/";
    } else {
        return "https://killiansaintcricq.herokuapp.com/";
    }
};

export default api;
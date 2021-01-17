export const apilogin = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const apisignup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
    '/api/movies',{headers: {
        'Authorization': window.localStorage.getItem('token')
        }
    }).then(res => res.json());
};

export const getTopRatingMovies = () => {
    return fetch(
    '/api/toprated/db',{headers: {
        'Authorization': window.localStorage.getItem('token')
        }
    }).then(res => res.json());
};

export const getSimilarMovies = (id) => {
    return fetch(
    `/api/similar/db/${id}`,{headers: {
        'Authorization': window.localStorage.getItem('token')
        }
    }).then(res => res.json());
};

export const getMovieKeywords = (id) => {
    return fetch(
    `/api/keywords/db/${id}`,{headers: {
        'Authorization': window.localStorage.getItem('token')
        }
    }).then(res => res.json());
};

export const deleteTopratedMovie = (id) => {
    return fetch(`/api/toprated/${id}`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        },
        method: 'delete'
    }).then(res => res.json())
};

export const deleteSimilarMovies = (id) => {
    return fetch(`/api/similar/${id}`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        },
        method: 'delete'
    }).then(res => res.json())
};
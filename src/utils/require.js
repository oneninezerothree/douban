import fetchJSONP from 'fetch-jsonp';

export default function requires(url,options) {
    fetchJSONP(url)
        .then(response => response.json()).then(data => {
            options(data);
        })
}

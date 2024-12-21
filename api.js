// Example: Fetch trending artwork (dummy API)
fetch('https://api.artsy.net/api/artworks')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Replace with logic to display artworks
    })
    .catch(error => console.error('Error fetching artwork data:', error));


    const categorySelect = document.getElementById('category');
    const locationInput = document.getElementById('locationInput');
    const products = document.querySelectorAll('.post');

    categorySelect.addEventListener('change', filterPosts);
    locationInput.addEventListener('input', filterPosts);

    function filterByLocation() {
        const selectedLocation = locationInput.value.trim().toLowerCase();

        products.forEach(function(product) {
            const productLocation = product.getAttribute('data-location').toLowerCase();

            if (productLocation === selectedLocation) {
                product.style.display = 'inline-block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    function cancelLocationFilter() {
        locationInput.value = '';
        filterPosts();
    }

    function filterPosts() {
        const selectedCategory = categorySelect.value.toLowerCase();
        const selectedLocation = locationInput.value.trim().toLowerCase();

        products.forEach(function(product) {
            const productCategory = product.classList[1].toLowerCase(); // Assuming each post has only one category
            const productLocation = product.getAttribute('data-location').toLowerCase();

            if ((selectedCategory === 'all' || productCategory === selectedCategory) &&
                (selectedLocation === '' || productLocation === selectedLocation)) {
                product.style.display = 'inline-block';
            } else {
                product.style.display = 'none';
            }
        });
    }
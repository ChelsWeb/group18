document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-review-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const reviewerName = document.getElementById('reviewer-name').value;
        const reviewText = document.getElementById('review-text').value;

        if (reviewerName === '' || reviewText === '') {
            alert('Please fill out both the name and the review text.');
            return; 
        }
        displayReview(reviewerName, reviewText);
    });

    function displayReview(name, text) {
        const reviewsContainer = document.querySelector('.reviews');

        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <img id="man" src="images/noprofile.jpg" alt="Reviewer Image">
            <div class="review-details">
                <div class="review-author">${name}</div>
                <div class="review-text">${text}</div>
            </div>
        `;

        reviewsContainer.appendChild(reviewElement);
    }
});

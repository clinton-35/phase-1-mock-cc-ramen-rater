// request ramen data from server
fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(data => {
    // display all ramen images in #ramen-menu div
    const ramenMenuDiv = document.querySelector('#ramen-menu');
    data.forEach(ramen => {
      const img = document.createElement('img');
      img.src = `./assets/ramen/${ramen.image}`;
      img.alt = ramen.name;
      img.addEventListener('click', () => {
        // display ramen details in #ramen-detail div when image is clicked
        const ramenDetailDiv = document.querySelector('#ramen-detail');
        const ratingDisplay = document.querySelector('#rating-display');
        const commentDisplay = document.querySelector('#comment-display');
        ramenDetailDiv.querySelector('.detail-image').src = `./assets/ramen/${ramen.image}`;
        ramenDetailDiv.querySelector('.name').textContent = ramen.name;
        ramenDetailDiv.querySelector('.restaurant').textContent = ramen.restaurant;
        ratingDisplay.textContent = ramen.rating;
        commentDisplay.textContent = ramen.comment;
        // display edit form to update ramen rating and comment
        const editRamenForm = document.querySelector('#edit-ramen');
        editRamenForm.querySelector('#new-rating').value = ramen.rating;
        editRamenForm.querySelector('#new-comment').value = ramen.comment;
        editRamenForm.addEventListener('submit', event => {
          event.preventDefault();
          ramen.rating = editRamenForm.querySelector('#new-rating').value;
          ramen.comment = editRamenForm.querySelector('#new-comment').value;
          ratingDisplay.textContent = ramen.rating;
          commentDisplay.textContent = ramen.comment;
        });
      });
      ramenMenuDiv.append(img);
    });
  });

// add new ramen to #ramen-menu div when form is submitted
const newRamenForm = document.querySelector('#new-ramen');
newRamenForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = newRamenForm.querySelector('#new-name').value;
  const restaurant = newRamenForm.querySelector('#new-restaurant').value;
  const image = newRamenForm.querySelector('#new-image').value;
  const rating = newRamenForm.querySelector('#new-rating').value;
  const comment = newRamenForm.querySelector('#new-comment').value;
  const ramen = { name, restaurant, image, rating, comment };
  const img = document.createElement('img');
  img.src = `./assets/ramen/${ramen.image}`;
  img.alt = ramen.name;
  img.addEventListener('click', () => {
    // display ramen details in #ramen-detail div when image is clicked
    const ramenDetailDiv = document.querySelector('#ramen-detail');
    const ratingDisplay = document.querySelector('#rating-display');
    const commentDisplay = document.querySelector('#comment-display');
    ramenDetailDiv.querySelector('.detail-image').src = `./assets/ramen/${ramen.image}`;
    ramenDetailDiv.querySelector('.name').textContent = ramen.name;
    ramenDetailDiv.querySelector('.restaurant').textContent = ramen.restaurant;
    ratingDisplay.textContent = ramen.rating;
    commentDisplay.textContent = ramen.comment;
    // display edit form to update ramen rating and comment
    const editRamenForm = document.querySelector('#edit-ramen');
    editRamenForm.querySelector('#new-rating').value = ramen.rating;
    editRamenForm.querySelector('#new-comment').value = ramen.comment;
    editRamenForm.addEventListener('submit', event => {
      event.preventDefault();
    });
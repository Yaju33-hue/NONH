 // Optional: Add JavaScript to capture the selected rating
 const stars = document.querySelectorAll('.star-rating input');
 stars.forEach(star => {
   star.addEventListener('change', () => {
     alert(`You rated this ${star.value} star(s)!`);
   });
 });
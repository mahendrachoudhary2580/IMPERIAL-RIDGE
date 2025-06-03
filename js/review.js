const reviewForm = document.getElementById("reviewForm");
  const reviewList = document.getElementById("reviewList");

  reviewForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value.trim();

    if (!name || !rating || !comment) return;

    const review = document.createElement("div");
    review.style.marginBottom = "1rem";
    review.style.borderBottom = "1px solid #ccc";
    review.style.paddingBottom = "0.5rem";

    review.innerHTML = `
      <strong>${name}</strong> - ${"★".repeat(rating)}${"☆".repeat(5 - rating)}<br/>
      <p>${comment}</p>
    `;

    reviewList.prepend(review);

    // Clear form
    reviewForm.reset();
  });
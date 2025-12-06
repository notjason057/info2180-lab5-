document.addEventListener('DOMContentLoaded', () => {
    const lookupBtn = document.getElementById("lookup");
    const resultDiv = document.getElementById("result");
    const countryInput = document.getElementById("country");

    lookupBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const country = countryInput.value.trim();
        const url = `world.php?country=${encodeURIComponent(country)}`;

        fetch(url)
      .then(response => response.text())
      .then(data => {
      
        resultDiv.innerHTML = data;
      })
      .catch(error => {
        console.error(error);
        resultDiv.innerHTML = "<p>There was an error fetching the data.</p>";
      });
  });
});
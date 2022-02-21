function storeSearchterm(term) {
  let searchbar = document.getElementById("searchbar");
  searchbar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      let searchbar = document.getElementById("searchbar").value;
      localStorage.setItem("article", searchbar);
      window.location.href = "search.html";
    }
  });
}

export default storeSearchterm;

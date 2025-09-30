const params = new URLSearchParams(window.location.search);
const user = params.get("user");

if (user) {
  fetch(`/Openlight/platform/users/${user}.json`)
    .then(res => {
      if (!res.ok) throw new Error("User not found");
      return res.json();
    })
    .then(data => {
      document.getElementById("name").textContent = data.name;
      document.getElementById("bio").textContent = data.bio;
      document.getElementById("category").textContent = data.category;
      document.getElementById("projects").innerHTML = data.projects
        .map(p => `<li>${p}</li>`)
        .join("");
    })
    .catch(err => {
      document.body.innerHTML = `<h1>User not found</h1>`;
    });
}

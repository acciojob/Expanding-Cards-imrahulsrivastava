let prevActive = document.getElementById("panel-1");

document.querySelectorAll(".panel").forEach((e) => {
  e.addEventListener("click", (e) => {
    prevActive.classList.remove("active");
    e.target.classList.add("active");
    prevActive = e.target;
  });
});

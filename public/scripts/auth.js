const authForm = document.querySelector(".authForm");

if (authForm) {
  authForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name } = e.target;
    const res = await fetch("/", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
      }),
    });
    const data = await res.json();
    if (data.message === "ok") {
      window.location.assign("/themes");
    }
    res.json({ message: "No" });
  });
}

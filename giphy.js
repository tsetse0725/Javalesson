const resultContainer = document.getElementById("buhIrsenDatagHaruulah");

const getGiphyByName = async (name) => {
  const GIP_URL = `https://api.giphy.com/v1/gifs/search?api_key=QPHq62keOwy2IJ46dWicOPFANBwsBnK4&limit=10&offset=0&q=${name}`;

  try {
    const response = await fetch(GIP_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();

    if (jsonData.data) {
      jsonData.data.map((el) => {
        const father = document.createElement("div");
        const title = document.createElement("div");
        const image = document.createElement("img");

        title.innerHTML = el.title;
        image.src = el.images.original.webp || el.images.original.url;

        father.appendChild(title);
        father.appendChild(image);

        resultContainer.appendChild(father);
      });
    } else {
      resultContainer.innerHTML = "<p>Үр дүн олдсонгүй.</p>";
    }
  } catch (error) {
    console.error("Алдаа гарлаа:", error);
    resultContainer.innerHTML = "<p>Алдаа гарлаа, дахин оролдоно уу.</p>";
  }
};

const search = () => {
  const input = document.getElementById("search").value;
  resultContainer.innerHTML = "";
  getGiphyByName(input);
};

window.addEventListener("keypress", (button) => {
  if (button.key === "Enter") {
    search();
  }
});

// Array of books
const books = [
  {
    id: 0,
    title: "Eloquent JavaScript",
    author: "by Marijn Haverbeke",
    description: "A modern introduction to JavaScript fundamentals.",
    image: "image/eloquent_js.png",
  },
  {
    id: 1,
    title: "You Don't Know JS",
    author: "by Kyle Simpson",
    description: "A deep dive into how JavaScript really works.",
    image: "image/you_dont_know_js.png",
  },
  {
    id: 2,
    title: "StatQuest",
    author: "by Josh Starmer",
    description: "Clear explanations of statistics and machine learning.",
    image: "image/statquest.png",
  },
  {
    id: 3,
    title: "Automate the Boring Stuff",
    author: "by Al Sweigart",
    description: "Learn Python by automating real-world tasks.",
    image: "image/automate_boring_stuff.png",
  },
  {
    id: 4,
    title: "Build a Large Language Model",
    author: "by Sebastian Raschka",
    description:
      "A practical, hands-on guide to understanding tokenization, embeddings, attention, and building large language models from scratch.",
    image: "image/build_a_llm.png",
  },
];

// Select elements
const featured = document.querySelector("#home");
const sidebarBooks = document.querySelectorAll("#reviews img");
console.log(sidebarBooks);

// Add click events
sidebarBooks.forEach((img) => {
  img.addEventListener("click", (elements) => {
    const book = books[img.id];

    featured.innerHTML = `
          <img class="book-cover" src="${book.image}" alt="${book.title}">
          <h3>${book.title}</h3>
          <h4>${book.author}</h4>
          <p>${book.description}</p>
        `;
  });
});

import { useState } from "react";
import BOOKS from "../books";
import Book from "../components/Book";
import { SearchIcon, ExternalLinkIcon } from "@heroicons/react/solid";

const IndexScreen = () => {
  const [filter, setFilter] = useState("");

  const onSearch = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="min-h-screen bg-slate-800 flex flex-col">
      <header className="text-white text-center text-xs p-2 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 animate-gradient-x">
        School Resources 📚️
      </header>
      <div className="p-2 bg-slate-900 flex items-center justify-center sticky top-0 left-0 z-20 shadow-lg">
        <SearchIcon className="text-slate-500 w-5 h-5 ml-2" />
        <input
          type="text"
          className="text-white text-center font-normal w-full p-2 bg-transparent outline-none focus:outline-none placeholder:text-slate-500"
          placeholder="Look for a Book or a Tag"
          value={filter}
          onChange={onSearch}
        />
      </div>
      <main className="p-8 flex flex-1 flex-wrap items-start justify-center gap-4">
        {BOOKS.filter((book) => {
          let bookMatch = false;

          // Check if filter match book title
          if (book.title.toLowerCase().includes(filter.toLowerCase())) {
            bookMatch = true;
          }

          // Check if filter match book author
          if (book.author.toLowerCase().includes(filter.toLowerCase())) {
            bookMatch = true;
          }

          // Check if filter matchs any tag
          book.tags.forEach((item) => {
            if (item.toLowerCase().includes(filter.toLowerCase())) {
              bookMatch = true;
            }
          });

          return bookMatch;
        }).map(({ title, author, cover, url, tags }) => {
          return (
            <Book
              title={title}
              author={author}
              cover={cover}
              url={url}
              tags={tags}
            />
          );
        })}
        <a
          href="https://github.com/pjreyes05/schlib" target="_blank"
          className="text-white text-center w-44 h-60 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 flex flex-col justify-center items-center gap-2 box-content transition"
        >
          <p className="w-2/3 text-slate-500 text-sm font-medium">Learn How to Contribute</p>
          <ExternalLinkIcon className="w-5 h-5 text-slate-600" />
        </a>
      </main>
      <footer className="font-medium text-center w-full p-8 bg-slate-900">
        <small className="text-slate-500">
          Crafted with ❤️ by{" "}
          <a href="https://reyes.cool" className="text-indigo-500">
            Jorge Reyes
          </a>
        </small>
      </footer>
    </div>
  );
};

export default IndexScreen;

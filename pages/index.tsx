import { useState } from "react";
import BOOKS from "../books";
import Book from "../components/Book";
import { SearchIcon } from "@heroicons/react/solid";

const IndexScreen = () => {
  const [filter, setFilter] = useState("");

  const onSearch = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="min-h-screen bg-slate-800">
      <header className="text-white text-center text-xs p-2 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        School Resources 📚️
      </header>
      <div className="m-4 p-2 rounded-xl bg-slate-900/50 flex items-center justify-center">
        <SearchIcon className="text-slate-700 w-5 h-5 ml-2" />
        <input
          type="text"
          className="text-white text-center font-medium w-full p-2 bg-transparent outline-none focus:outline-none placeholder:text-slate-700"
          placeholder="Look for a Book or a Tag"
          value={filter}
          onChange={onSearch}
        />
      </div>
      <main className="p-8 flex gap-4">
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
      </main>
    </div>
  );
};

export default IndexScreen;

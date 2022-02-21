import Image from "next/image";

interface BookProps {
  title: string;
  author: string;
  cover?: string;
  url: string;
  tags: string[];
}

const Book = ({ title, author, cover, url, tags }: BookProps) => {
  return (
    <a href={url} target="_blank">
      <article className="text-white text-center w-40 p-4 rounded-xl hover:bg-slate-700/50 box-content transition">
        <div className="w-40 h-52 mb-4 relative rounded-lg shadow overflow-hidden">
          <Image src={cover} layout="fill" />
        </div>
        <h2 className="font-bold leading-5">{title}</h2>
        <small>{author}</small>
        <section className="mt-3 flex flex-wrap gap-2 justify-center items-center">
        {tags.map(tag => {
           return <small className="text-yellow-500 py-1 px-2 text-xs font-medium rounded-md bg-yellow-500/25 capitalize">{tag}</small>
        })}
        </section>
      </article>
    </a>
  );
};

export default Book;

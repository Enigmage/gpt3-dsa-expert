import { useState } from "react";

const Prompt = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  // useEffect(() => {
  //   console.log(query);
  // }, [query]);

  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log("clicked");
    setAnswer("This is the answer");
    setQuery("");
  };

  return (
    <div className="min-h-[70vh]">
      <div className="flex justify-center items-center py-3">
        <h1 className="antialiased font-semibold lg:text-3xl md:text-2xl sm:text-xl">
          Ask DSA Expert
        </h1>
      </div>
      <div className="flex flex-row gap-5 justify-around items-center ">
        <div className="flex flex-col justify-center items-center gap-8">
          <textarea
            className="sm:w-full p-2 border-double border-zinc-50"
            name="query-box"
            cols={30}
            rows={10}
            value={query}
            placeholder="write your query"
            onChange={e => setQuery(e.target.value)}
          ></textarea>
          <button
            onClick={handleClick}
            className="btn btn-blue disabled:opacity-30"
            disabled={query.length == 0}
          >
            Submit
          </button>
        </div>
        <div>{answer && <p>{answer}</p>}</div>
      </div>
    </div>
  );
};

export default Prompt;

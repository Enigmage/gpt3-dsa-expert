import { useState } from "react";

const Prompt = () => {
  const [query, setQuery] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    // console.log("clicked");
    setLoading(true);
    try {
      const resp = await fetch("/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const data = await resp.json();
      // console.log(data.answer);
      setAnswer(data.answer);
    } catch (err) {
      console.error(err);
      setAnswer("There was some error in fetching the response...");
    } finally {
      setLoading(false);
      setQuery("");
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-3 pb-5">
        <h1 className="antialiased font-semibold lg:text-3xl md:text-2xl sm:text-xl">
          Ask DSA Expert
        </h1>
        <p className="antialiased font-extralight sm:text-sm text-center px-5">
          Got a coding problem? Ask Abbas - he's got the answers to all your tech-related questions, from Leetcode problems to CS fundamentals!
        </p>
      </div>
      <div className="flex flex-col-reverse gap-2 justify-around items-center border-t border-solid border-black border-opacity-20 pt-3">
        <div className="">
          <textarea
            className="min-w-[45vw] min-h-[40vh] p-2 border border-solid border-x-black border-opacity-30 hover:border-black"
            name="query-box"
            cols={32}
            rows={10}
            value={query}
            placeholder="Explain this..."
            onChange={e => setQuery(e.target.value)}
          ></textarea>
        </div>
        {answer && (
          <div className="sm:w-[75%] min-h-[30vh] px-2 md:px-3">
            <p className="text-center sm:break-words">{answer}</p>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleClick}
          className="btn btn-blue disabled:opacity-40 mt-5"
          disabled={!query.length || loading}
        >
          {loading ? "Loading..." : "Ask"}
        </button>
      </div>
    </div>
  );
};

export default Prompt;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const delay = 200;
    let timerId;
    const featchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${search}`
        );
        const data = await response.json();

        setSearchResult(data.products);
      } catch (error) {
        console.error(error);
      }
    };
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      if (search.trim() !== "") {
        featchSearchResults();
      } else {
        setSearchResult([]);
      }
    }, delay);

    return () => clearTimeout(timerId);
  }, [search]);
  const clickHandler = () =>{
    setSearch("")
  }
  return (
    <>
      <div className="md:w-1/2 w-full relative flex justify-between items-center bg-[#F6F6F6] rounded-md p-1">
        <div className="w-5 h-5 mr-1">
          <div>
            <IoSearchOutline className="w-full h-full font-thin" />
          </div>
        </div>
        <div className="  w-full flex flex-col">
          <div>
            <input
              type="text"
              className="w-full p-1 bg-[#F6F6F6] rounded-md text-sm outline-none font-medium placeholder:font-thin"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              maxLength={20}
              aria-label="Search"
              style={{ caretColor: "#ff003c" }}
            />

            {searchResult.length > 0 && search && (
              <div className="w-full bg-white rounded-md absolute left-0 top-[100%] border-black border-0 shadow-lg cursor-pointer max-h-64 overflow-auto">
                {searchResult.map((result) => (
                  <Link key={result.id} to={`/product/${result.id}`} onClick={clickHandler}>
                    <div className="flex p-5 items-center">
                      <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-5">
                        <img
                          src={result.thumbnail}
                          alt="image"
                          className="w-full h-full"
                        />
                      </div>

                      <div>{result.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInput;

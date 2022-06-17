import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination2 from "../Pagination/pagination";
import LocalSearch from "../search/LocalSearch";
import SingleData from "../singleData/SingleData";
import Myloader from "react-spinners/PuffLoader";
import Genre from "../genres/Genre";
import useGenre from "../genres/UseGenre";
import "./listMovies.css"

const ListMovies = () => {
  const [treadingContent, setTreadingContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filterGenre, setFilterGenre] = useState([]);
  const [genreTitle, setGenreTitle] = useState();
  // eslint-disable-next-line
  const [color, setColor] = useState("grey");
  const genreforURL = useGenre(filterGenre);

  // fetch Movies from TMDB
  const fetchMovieApi = async () => {
    try {
      const { data } = await axios.get(
        ` 
      https://api.themoviedb.org/3/discover/movie?api_key=f05cb163c10b18356ae3d8962baeb237&page=${page}&language=en-US&sort_by=popularity.desc&with_genres=${genreforURL}
      `
      );
      setTreadingContent(data.results);
      setNumOfPages(100);
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSearchApi = async () => {
    if (searchTerm) {
      const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=f05cb163c10b18356ae3d8962baeb237&query=${searchTerm}&page=${page}&sort_by=popularity.desc&page=2`;
      const { data } = await axios.get(SEARCH_API);
      setTreadingContent(data.results);
      setNumOfPages(data.total_pages);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    if (searchTerm) {
      fetchSearchApi();
    } else {
      fetchMovieApi();
    }
    return () => {
      setTreadingContent();
    };
    // eslint-disable-next-line
  }, [page, isLoading, genreforURL]);

  return (
    <>
      <main className="all__movies">
        <div className="my__main">
          <div className="TreadingHome">
            <h3>{genreTitle && genreTitle.name}</h3>
          </div>
          <LocalSearch
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            fetchSearchApi={fetchSearchApi}
            numOfpages={numOfPages}
            setIsLoading={setIsLoading}
            media="movies"
            placehold="Search Movies"
            isLoading={isLoading}
            treadingContent={treadingContent}
          />
        </div>
        <div className="sec__main ">
          <span className="all_genres ">
            <Genre
              media="movie"
              setFilterGenre={setFilterGenre}
              filterGenre={filterGenre}
              setTreadingContent={setTreadingContent}
              setPage={setPage}
              numOfpages={numOfPages}
              page={page}
              genreTitle={genreTitle}
              setGenreTitle={setGenreTitle}
              treadingContent={treadingContent}
            />
          </span>
          <div className="pag">
          </div>
        </div>

        <div className="ListContent">
          {isLoading && treadingContent ? (
            treadingContent.map((n) => (
              <SingleData key={n.id} {...n} mediaType="movie" />
            ))
          ) : (
            <div
              className="loading  "
              style={{
                display: "flex",
                height: "450px",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Myloader color={color} size={60} />
              <p
                style={{
                  color: "grey",
                  fontSize: "13px",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                fetching data ...
              </p>
            </div>
          )}
        </div>
        <Pagination2
          setPage={setPage}
          numOfPages={numOfPages}
          media="movies"
          searchTerm={searchTerm}
          setIsLoading={setIsLoading}
          page={page}
        />
      </main>
    </>
  );
};

export default ListMovies;

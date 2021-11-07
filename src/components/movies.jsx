import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import _ from 'lodash';
import { ChairIcon} from 'meistericons';
class Movies extends Component {
  state = {
    // movies: getMovies(),
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn:{path:'title', order:"asc"} // asc means ascending
  };

  // when instance of the memory is rendered in the DOM is componentDidMount

  componentDidMount() {
    const genres = [{_id:'',name:"All Genres"},...getGenres()]
    this.setState({ movies: getMovies(), genres});
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  //    if this is true it becomes true otherwise it become false

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    // this will cause new rendering
  };
  handleGenreSelect = genre => {
    this.setState({selectedGenre : genre, currentPage:1});
  };

  // here sortColumn take the sort object
  handleSort = sortColumn =>{
     this.setState({ sortColumn})
  };

  render() {
    // const { length: count } = this.state.movies;
    const { pageSize, currentPage,selectedGenre, movies: allMovies , sortColumn} = this.state;

    if (this.state.movies.length === 0)return <p>There are no movies in the database.</p>;

    const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m =>m.genre_id === selectedGenre._id) : allMovies;

     const sorted = _.orderBy(filtered,[sortColumn.path], [sortColumn.order])
     const movies = paginate(sorted, filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem = {this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p> Showing {filtered.length} movies in the datatable <ChairIcon/></p>
         
         <MoviesTable  
         movies={movies} 
         sortColumn= {sortColumn}
         onLike= {this.handleLike} 
         onDelete ={this.handleDelete}
         onSort ={this.handleSort}
          />
         {/* movies are passed from another moviesTable  */}
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>

        {/* This is an input method */}
      </div>
    );
  }
}

export default Movies;
// NOte: there should be one element while returning the jsx
// Note: while rendering more than two element we can wrap two elements with the div or use React.fragments
// Note: JSX represents to  javascript syntax XML .. this allows us to directly write HTML in React (javascript within code)

// ??? How does handledelete function works

// type checking is added to react


// here all components are high level components like ListGroup, MoviesTable, Pagination 
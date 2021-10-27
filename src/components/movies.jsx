import React, {Component} from 'react'
import {getMovies} from "../services/fakeMovieService";
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
class Movies extends Component{
   state = {
       movies: getMovies(),
       currentPage:1,
       pageSize:4,
   };
   
   handleDelete = movie =>{
    const movies = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({movies: movies});
   }
   handleLike = movie =>{
       const movies =[...this.state.movies];
       const index = movies.indexOf(movie);
       movies[index]= {...movies[index]};
       movies[index].liked = !movies[index].liked;
       this.setState({movies});
   };
//    if this is true it becomes true otherwise it become false

handlePageChange = page =>{
    this.setState({currentPage: page});
    // this will cause new rendering
};

   render(){
       const {length:count} = this.state.movies;
       const {pageSize, currentPage, movies:allMovies} = this.state;

       if (this.state.movies.length === 0) return <p>There are no movies in the database.</p>;
   
       const movies = paginate(allMovies, currentPage, pageSize );

       return (
        <div>
        <p> Showing {count} movies in the datatable</p>
        <table className="table">
           <thead>
               <tr>
                   <th>Title</th>
                   <th>Genre</th>
                   <th>Stock</th>
                   <th>Rate</th>
                   <th></th>
                   <th></th>

               </tr>
           </thead>
           <tbody>
               {movies.map(movie =>(
               <tr key={movie._id}>
                   <td>{movie.title}</td>
                   <td>{movie.genre.name}</td>
                   <td>{movie.numberInStock}</td>
                   <td>{movie.dailyRentalRate}</td>
                   <td><Like liked={movie.liked} onClick={() =>this.handleLike(movie)}/></td>
                   <td><button onClick={()=>this.handleDelete(movie)} className="btn-danger btn-sm">Delete</button></td>
               </tr>
            ))}            
           </tbody>
       </table>
       <Pagination  
       itemsCount = {count} 
       pageSize = {pageSize} 
       currentPage = {currentPage}
       onPageChange = {this.handlePageChange}
       />
     {/* This is an input method */}
       </div>   
       )
   }
}

export default Movies;
// NOte: there should be one element while returning the jsx
// Note: while rendering more than two element we can wrap two elements with the div or use React.fragments
// Note: JSX represents to  javascript syntax XML .. this allows us to directly write HTML in React (javascript within code)

// ??? How does handledelete function works

// type checking is added to react

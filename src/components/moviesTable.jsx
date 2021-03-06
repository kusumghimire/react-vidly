import React, {Component} from 'react';
import TableHeader from './common/tableHeader';
import Like from "./common/like";
class MoviesTable extends Component{
   columns=[  //  here columns are new operating columns
    {path:'title', label:'Title'},
    {path:'genre.name', label:'Genre'},
    {path:'numberInStock', label:'Stock'},
    {path:'dailyRentalRate', label:'Rate'},
    {key:'like', content: movie=>(
    <Like
    liked={movie.liked}
    onClick={() => this.props.onLike(movie)}
  />
    )
},
    {key:'delete', content: movie=>(
       <button
      onClick={() => this.props.onDelete(movie)}
      className="btn btn-danger btn-sm"
    >
      Delete
    </button>
    )
    },
      
  ];
   
  render(){
    const {movies,onDelete, onLike, onSort,sortColumn} = this.props;

    return(

    <table className="table">
      <TableHeader 
      columns={this.columns}
      sortColumn={sortColumn} 
      onSort={onSort} 
    />
    {/* <TableBody columns={columns} data = {data}  /> */}
     <tbody>
      {movies.map((movie) => (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Like
              liked={movie.liked}
              onClick={() => onLike(movie)}
            />
          </td>
          <td>
            <button
              onClick={() => onDelete(movie)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody> 
  </table>
    )
  }
}


export default MoviesTable;

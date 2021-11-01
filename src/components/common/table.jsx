import React from 'react';
import TableHeader from './tableHeader';
import Like from "./like";

const Table = props => {

    const {columns, sortColumn, onSort, data, movies, onLike, onDelete} = props;
    // this props defines the interface of table
    return (
        <div>
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

        </div>
    )
}

export default Table;

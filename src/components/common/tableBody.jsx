import React from "react";

class TableBody extends Component {
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr>
            {columns.map((column) => (
              <td></td>
            ))}
          </tr>
        ))}
        <tr></tr>
      </tbody>
    );
  }
}

export default TableBody;

import Cell from "./Cell";

const Row = () => {
  return (
    <tr>
      <td>
        <Cell />
      </td>
      <td>
        <Cell />
      </td>
      <td>
        <Cell />
      </td>
    </tr>
  );
};

const Grid = () => {
  return (
    <table>
      <Row />
      <Row />
      <Row />
    </table>
  );
};

export default Grid;

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
      <tbody>
        <Row />
        <Row />
        <Row />
      </tbody>
    </table>
  );
};

export default Grid;

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { WeatherResponse } from "../api/schemas";

function createData(name: string, value: string | number) {
  return {
    name,
    definition: value,
  };
}

export default function DenseTable({ Data }: { Data: WeatherResponse }) {
  const rows = [
    createData("Название", Data?.name),
    createData("Временная зона", Data?.timezone / 3600),
    createData("Температура сейчас", Data?.main.temp),
    createData("Ощущается как", Data?.main.feels_like),
    createData("Максимальная температура", Data?.main.temp_max),
    createData("Минимальная температура", Data?.main.temp_min),
    createData("Давление", Data?.main.pressure),
  ];

  if (!Data) {
    return <div>loading...</div>;
  }

  return (
    <TableContainer component={Paper} sx={{ maxWidth: "50vw" }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.definition}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

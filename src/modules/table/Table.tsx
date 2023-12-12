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

export default function DenseTable({ data }: { data: WeatherResponse }) {
  const rows = [
    createData("Название", data?.name),
    createData("Временная зона", data?.timezone / 3600),
    createData("Температура сейчас", data?.main.temp),
    createData("Ощущается как", data?.main.feels_like),
    createData("Максимальная температура", data?.main.temp_max),
    createData("Минимальная температура", data?.main.temp_min),
    createData("Давление", data?.main.pressure),
  ];

  if (!data) {
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

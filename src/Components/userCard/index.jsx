import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// eslint-disable-next-line react/prop-types
const UserCard = ({ data, TableRowData }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {TableRowData.map((item, index) => {
                console.log(
                  "%csrcComponentsindex.jsx:20 item",
                  "color: #007acc;",
                  item,
                );
                return (
                  <TableCell align="left" key={`${Date.now()}___${index}`}>
                    {item}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => {
              return (
                <TableRow
                  key={`${index}__${Date.now()}`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {TableRowData.map((headerKey) => {
                    return (
                      <TableCell
                        key={`${item[headerKey]}__${Date.now()}`}
                        align="left"
                      >
                        {headerKey === "Id" ? (
                          <span
                            style={{
                              color: "#2F60DD",
                              borderBottom: `1px solid #2F60DD`,
                            }}
                          >
                            {item[headerKey]}
                          </span>
                        ) : (
                          item[headerKey]
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserCard;

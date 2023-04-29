import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EC6337",
    },
  },
});

export default function Paginations() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination count={10} color="primary" hideNextButton hidePrevButton />
      </Stack>
    </ThemeProvider>
  );
}

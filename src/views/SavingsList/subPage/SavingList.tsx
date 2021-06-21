import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  Chart,
  PieSeries,
  Title,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import {
  Animation,
  EventTracker,
  SeriesRef,
  Palette,
} from "@devexpress/dx-react-chart";
import React, { useEffect, useState } from "react";
import useFirebaseServices from "../../../hooks/useFirebaseServices";
import { TSavings } from "./../types";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { savingAddUrl, savingUpdateUrl } from "../../../app/paths";
import { ChartDataI } from "../Savings";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export interface SavingListProps {
  loading: boolean;
  savingList: ChartDataI[];
}

const SavingList: React.FC<SavingListProps> = ({ loading, savingList }) => {
  const classes = useStyles();
  const history = useHistory();
  const [targetItem, setTargetItem] = useState<SeriesRef | undefined>();
  const getTotal = (newSavingList: ChartDataI[]) => {
    return newSavingList.reduce((acc: number, data) => {
      return acc + data.amount;
    }, 0);
  };
  const totalAmount = React.useMemo(() => getTotal(savingList), [savingList]);
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <Box p={2}>
            <Paper elevation={3}>
              <Chart data={savingList}>
                <PieSeries
                  valueField="amount"
                  argumentField="category"
                  name="category"
                  outerRadius={0.75}
                />
                <Title text="Asset" />
                <Title text={totalAmount.toString()} />
                <Animation />
                <EventTracker />
                <Tooltip
                  targetItem={targetItem}
                  onTargetItemChange={(item) => setTargetItem(item)}
                />
                <Palette
                  scheme={["#666166", "#76e", "#6d4", "#fff", "#000", "#e5e5e"]}
                />
              </Chart>
            </Paper>
          </Box>
          <Box>
            <Button onClick={() => history.push(savingUpdateUrl)}>
              Update
            </Button>
            <Button onClick={() => history.push(savingAddUrl)}>Add</Button>
          </Box>
          <Box p={2}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Category</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="h6">Amount</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h6">Date</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {savingList.map((row) => (
                    <TableRow key={row.category}>
                      <TableCell component="th" scope="row">
                        {row.category}
                      </TableCell>
                      <TableCell align="right">{row?.amount}</TableCell>
                      <TableCell align="right">{row?.updatedDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </div>
      )}
    </>
  );
};

export default SavingList;

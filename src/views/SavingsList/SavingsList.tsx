import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import React, { useEffect } from "react";
import useFirebaseServices from "../../hooks/useFirebaseServices";
import { TSavings } from "./types";

const SavingsList: React.FC = () => {
  const { loading, getData } = useFirebaseServices<TSavings>("savings");
  const data = [
    { country: "Russia", area: 12 },
    { country: "Canada", area: 7 },
    { country: "USA", area: 7 },
    { country: "China", area: 7 },
    { country: "Brazil", area: 6 },
    { country: "Australia", area: 5 },
    { country: "India", area: 2 },
    { country: "Others", area: 55 },
  ];

  const loadData = async () => {
    const data = await getData();
    console.log("data", data);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <Box p={2}>
        <Paper elevation={3}>
          <Chart data={data}>
            <PieSeries valueField="area" argumentField="country" />
            <Title text="Area of Countries" />
            <Animation />
          </Chart>
        </Paper>
      </Box>
      <Box p={2}>
        <Card elevation={3}>
          <CardContent>
            <Typography>Savings1</Typography>
            <Typography>Savings2</Typography>
            <Typography>Savings3</Typography>
            <Typography>Savings2</Typography>
            <Typography>Savings3</Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default SavingsList;

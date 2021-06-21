import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import ColorPicker from "material-ui-color-picker";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import SavingList from "./SavingList";
import { Button, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { savingUrl } from "../../../app/paths";
import { TSavings } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: "2rem",
      padding: "2rem",
      boxSizing: "border-box",
      position: "relative",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
  })
);

interface SavingUpdateProps {
  loading: boolean;
  savingList: TSavings[];
  onAdd: (saving: TSavings) => {};
}

const SavingAdd: React.FC<SavingUpdateProps> = (props) => {
  const { loading, savingList, onAdd } = props;
  const history = useHistory();
  const classes = useStyles(props);
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<string>("0");
  const [color, setColor] = useState<string>("#fff");
  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setCategory(event.target.value as string);
  };

  const getSaving = (): TSavings | undefined => {
    const currentSaving = savingList.find(
      (saving) => saving.category.toLowerCase() === category.toLowerCase()
    );
    return currentSaving;
  };

  useEffect(() => {
    const currentSaving = getSaving();
    if (currentSaving) {
      setAmount(currentSaving.amount.toString());
    } else {
      setAmount("0");
    }
  }, [category]);

  const handleAdd = () => {
    const currentSaving = getSaving();
    if (!currentSaving) {
      onAdd({
        category,
        amount: Number(amount),
        updatedAt: new Date().toISOString().split("T")[0],
        liquidable: 0,
        color,
        id: new Date().toString(),
      });
    } else {
      setAmount("0");
    }
  };

  return (
    <Paper elevation={2} className={classes.container}>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="category">Category</InputLabel>
        <Input id="category" value={category} onChange={handleChange} />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="amount">Amount</InputLabel>
        <Input
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <ColorPicker
          label="Color"
          name="color"
          defaultValue={color}
          value={color}
          onChange={(color) => setColor(color)}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add
        </Button>
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push(savingUrl)}
        >
          Cancel
        </Button>
      </FormControl>
    </Paper>
  );
};

export default SavingAdd;

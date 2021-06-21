import React, { useEffect, useState } from "react";
import useFirebaseServices from "../../hooks/useFirebaseServices";
import { TSavings } from "./types";
import { Switch, Route, useHistory } from "react-router-dom";
import SavingList from "./subPage/SavingList";
import SavingUpdate from "./subPage/SavingUpdate";
import { savingAddUrl, savingUpdateUrl, savingUrl } from "../../app/paths";
import SavingAdd from "./subPage/SavingAdd";

export interface ChartDataI {
  amount: number;
  category: string;
  updatedDate: string;
}

const Savings: React.FC = () => {
  const history = useHistory();
  const { loading, getData, updateData, addData, deleteData } =
    useFirebaseServices<TSavings>("savings");
  const [savingList, setSavingList] = useState<TSavings[]>([]);
  const [savingChartList, setSavingChartList] = useState<ChartDataI[]>([]);

  const loadData = async () => {
    const savings = await getData();
    setSavingList(savings);
  };
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (savingList.length) {
      const savingChartList: ChartDataI[] = savingList.map((saving) => ({
        amount: saving.amount,
        category: saving.category,
        updatedDate: saving.updatedAt,
      }));
      setSavingChartList(savingChartList);
    }
  }, [savingList]);

  const handleUpdate = async (savings: TSavings) => {
    try {
      await updateData(savings);
      const newSavingList = [...savingList];
      const currentSavingIndex = savingList.findIndex(
        (saving) => saving.category === savings.category
      );
      newSavingList.splice(currentSavingIndex, 1, savings);
      setSavingList(newSavingList);
      history.push(savingUrl);
    } catch (err) {}
  };

  const handleAdd = async (savings: TSavings) => {
    try {
      await addData(savings);
      const newSavingList = [...savingList, savings];
      setSavingList(newSavingList);
      history.push(savingUrl);
    } catch (err) {}
  };

  const handleDelete = async (savings: TSavings) => {
    try {
      await deleteData(savings);
      const newSavingList = [...savingList];
      const currentSavingIndex = savingList.findIndex(
        (saving) => saving.category === savings.category
      );
      newSavingList.splice(currentSavingIndex, 1);
      setSavingList(newSavingList);
      history.push(savingUrl);
    } catch (err) {}
  };

  const renderList = () => {
    return <SavingList loading={loading} savingList={savingChartList} />;
  };

  const renderUpdate = () => {
    return (
      <SavingUpdate
        loading={loading}
        savingList={savingList}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    );
  };

  const renderAdd = () => {
    return (
      <SavingAdd loading={loading} savingList={savingList} onAdd={handleAdd} />
    );
  };

  return (
    <Switch>
      <Route exact path={savingUrl} component={renderList} />
      <Route path={savingUpdateUrl} component={renderUpdate} />
      <Route path={savingAddUrl} component={renderAdd} />
    </Switch>
  );
};

export default Savings;

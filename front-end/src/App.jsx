import { React, useState } from "react";
import "./App.css";
import Tabs from "./Tabs";
import Map from "./Map";
import Profile from "./Profile";
import List from "./List";

export default function App() {
  const [activeTab, setActiveTab] = useState(<Map />);

  function changeTab(e) {
    console.log(e);

    switch(e.target.id) {
      case "map-tab":
        setActiveTab(<Map />);
        break;
      case "list-tab":
        setActiveTab(<List />);
        break;
      default:
        setActiveTab(<Profile />);
    }
  }

  return (
    <>
      {activeTab}
      <Tabs setActiveTab={changeTab} />
    </>
  );
}

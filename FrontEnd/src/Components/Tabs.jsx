import React from "react";
import { TABS } from "../Redux/Actions/type";
import { useDispatch } from "react-redux";
import { toggleTab } from "../Redux/Actions";

const Tabs = ({ currentTab }) => {
  const dispatch = useDispatch();

  return (
    <>
      {TABS.map((tab) => {
        return (
          <button 
            className={tab === currentTab ? "btn-tab selected" : "btn-tab" }
            onClick={() => dispatch(toggleTab(tab))}
        >
            {tab}
          </button>
        );
      })}
    </>
  );
};

export default Tabs;

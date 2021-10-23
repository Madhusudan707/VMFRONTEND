import React, { useState } from 'react';
import './Tabs.scss';
const Tabs = ({ tabs, classes }: any) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div>
      <div className="container">
        {tabs.map((val: any, index: any) => {
          return (
            <div
              key={index}
              className="container-items"
              onClick={() => {
                setSelectedTab(val);
              }}
            >
              {selectedTab.label === val.label ? (
                <div className="selected pb-10">{val.label}</div>
              ) : (
                <div className="unselected pb-10">{val.label}</div>
              )}
            </div>
          );
        })}
      </div>
      <div className={`${classes}`}>{selectedTab.component}</div>
    </div>
  );
};

export default Tabs;

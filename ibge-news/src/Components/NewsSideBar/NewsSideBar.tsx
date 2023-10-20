import React, { useState } from 'react';
import store from '../../Redux/store/dataStore';
import { DataState } from '../../Redux/reducers/dataReducer';
import { ItemType } from '../../Utils/types';

import NewsCard from './NewsSideCard/NewsSideCard';

import './NewsSideBar.css';

function NewsSideBar() {
  const [data, setData] = useState<ItemType[] | null>(null);

  store.subscribe(() => {
    const globalState: DataState = store.getState();
    if (globalState.data !== null) {
      setData(globalState.data.items.slice(1, 4));
    }
  });

  return (
    <div className="container__sideBar">
      {
        data?.map((item, index) => (
          <React.Fragment key={ index }>
            <NewsCard data={ item } />
            {index !== 2 && <hr />}
          </React.Fragment>
        ))
      }
    </div>
  );
}

export default NewsSideBar;

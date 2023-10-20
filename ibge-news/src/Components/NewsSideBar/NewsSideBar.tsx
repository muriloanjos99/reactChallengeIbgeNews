import NewsCard from "./NewsSideCard/NewsSideCard";

import './NewsSideBar.css';
import store from "../../Redux/store/dataStore";
import { DataState } from "../../Redux/reducers/dataReducer";
import { ItemType } from "../../Redux/actions/actionTypes";
import { useEffect, useState } from "react";
import { sideCardsImages } from "../../Utils/consts";
import React from "react";

function NewsSideBar() {
  const [data, setData] = useState<ItemType[] | null>(null);
  const [imagesUrl, setImagesUrl] = useState<sideCardsImages>({
    imageUrl1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png',
    imageUrl2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png',
    imageUrl3: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png',
  });

  store.subscribe(() => {
    const globalState: DataState = store.getState();
    if (globalState.data !== null) {
      setData(globalState.data.items.slice(1, 4));
    }
  })

  useEffect(() => {
    const ibgeUrl = 'https://agenciadenoticias.ibge.gov.br/';
    if (data !== null) {      
      for (let index = 0; index < data.length; index += 1) {
        const actualData = data[index];
        const fullImageUrl = ibgeUrl + (JSON.parse(actualData.imagens?.replace(/\\/g, '')).image_intro);

        setImagesUrl((prevImagesUrl) => ({
          ...prevImagesUrl,
          [`imageUrl${index + 1}`]: fullImageUrl
        }))
      }      
    }
  }, [data])

  return (
    <div className="container__sideBar">
      {
        data?.map((item, index) => (
          <React.Fragment key={index}>
            <NewsCard image={imagesUrl[`imageUrl${index + 1}` as keyof sideCardsImages]} data={item} />
            {index !== 2 && <hr />}
          </React.Fragment>
        ))
      }
    </div>
  )
}

export default NewsSideBar;

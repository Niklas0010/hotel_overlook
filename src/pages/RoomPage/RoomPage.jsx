import { useEffect, useState } from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import { doFetch } from "../../helpers/Fetch";

export const RoomPage = () => {
  const [apiData, setApiData] = useState("");

  const { room } = useParams()

  const getRooms = async () => {
    const url = "https://api.mediehuset.net/overlook/rooms/by_hotel/1";
    const result = await doFetch(url);
    setApiData(result);
  };

  useEffect(() => {
    getRooms();
  }, [room]);

  console.log(room);

  return (
    
    <Switch>
      <Route exact path="/RoomPage">
      <p>Værelser</p>
        <ul>
          {apiData &&
            apiData.items.map((item, key) => {
              console.log(item.images)
              return (
                <>
                  <Link to={`/RoomPage/${item.id}`}>
                    <li key={key}>
                      <h4>{item.room_title}</h4>
                    </li>
                    {
                      item?.images && item.images.map((image, index) => ( 
                          <img src={image.image} alt="" />
                      ))
                    }
                  </Link>
                  <p>{item.description}</p>
                  <p>Værelset er {item.area} stort</p>
                  <p>Værelset er beregnet til {item.num_persons} person(er)</p>
                  <p>{item.day_price_normal} dkk</p>
                  <p>{item.day_price_flex} dkk</p>
                </>
              );
            })}
        </ul>
      </Route>
    </Switch>
  );
};

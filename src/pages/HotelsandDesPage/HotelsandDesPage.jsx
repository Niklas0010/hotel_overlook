import { useEffect, useState } from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import { doFetch } from "../../helpers/Fetch";
import Style from './Hotelsanddes.module.scss'

export const HotelsandDesPage = () => {
  const [apiData, setApiData] = useState("");
  const [apiData_cities, setApiData_cities] = useState("");
  const [apiData_hotels, setApiData_hotels] = useState("");

  const {land, city } = useParams()

  const getCountries = async () => {
    const url = "https://api.mediehuset.net/overlook/countries";
    const result = await doFetch(url);
    setApiData(result);
  };

  const getCities = async () => {
    const url = `https://api.mediehuset.net/overlook/cities/by_country/${land}`;
    const result = await doFetch(url);
    setApiData_cities(result);
  };

  const getHotels = async () => {
    const url = `https://api.mediehuset.net/overlook/hotels/by_city/${city}`;
    const result = await doFetch(url);
    setApiData_hotels(result);
  };

  useEffect(() => {
    getCountries();
    getCities();
    getHotels();
  }, [land, city]);

  console.log(apiData_cities?.items?.findIndex(obj => obj.id === String(city)))

  return (
    
    <Switch>
      <Route exact path="/HotelsandDesPage">
      <p className={Style.countryP}>Lande</p>
        <ul className={Style.countryUnordered}>
          {apiData &&
            apiData.items.map((item, key) => {
              return (
                <>
                  <Link className={Style.ulLink} to={`/HotelsandDesPage/${item.id}`}>
                    <li className={Style.countryList} key={key}>
                      <figure className={Style.imgContainer}>
                        <img className={Style.countryImgs} src={item.image} alt="" />
                        <figcaption>{item.name}</figcaption>
                      </figure>
                    </li>
                  </Link>
                  {/* <p>{item.description}</p> */}
                </>
              );
            })}
        </ul>
      </Route>

      <Route exact path="/HotelsandDesPage/:id">
      <p>Byer i {apiData && apiData?.items[Number(land) - 1]?.name}</p>
        <ul>
          {apiData_cities &&
            apiData_cities.items.map((item, key) => {
              return (
                <>
                  <Link to={`/HotelsandDesPage/${land}/${item.id}`}>
                    <li key={key}>
                      <h4>{item.name}</h4>
                    </li>
                    <img src={item.image} width="200px" alt="" />
                  </Link>
                  <p>{item.description}</p>
                </>
              );
            })}
        </ul>
      </Route>

      <Route exact path="/HotelsandDesPage/:id/:city" >
      <p>Hoteller i {apiData_cities && apiData_cities?.items[apiData_cities?.items?.findIndex(obj => obj.id === String(city))]?.name}</p>
        <ul>
          {apiData_hotels &&
            apiData_hotels.items.map((item, key) => {
              return (
                <>
                  <Link to={`/HotelsandDesPage/${land}/${city}/`}>
                    <li key={key}>
                      <h4>{item.title}</h4>
                    </li>
                    <img src={item.image} width="200px" alt="" />
                  </Link>
                  <p>{item.teaser}</p>
                </>
              );
            })}
        </ul>
      </Route>
    </Switch>
  );
};

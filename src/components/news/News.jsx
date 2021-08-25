import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doFetch } from "../../helpers/Fetch";
import Style from './news.module.scss'

export const News = () => {

  const [apiData, setApiData] = useState("");

  const { room } = useParams()

  const getNews = async () => {
    const url = "https://api.mediehuset.net/overlook/news";
    const result = await doFetch(url);
    setApiData(result);
  };

  useEffect(() => {
    getNews();
  }, []);

  console.log(apiData);

  return(
    <section className={Style.container}>
      <h3>Sidste nyt</h3>
      <ul className={Style.gridContainer}>{apiData && apiData.items.splice(0,3).map((item, key) => {
        return(
          <li key={key}>
              <figure className={Style.img_container}>
                <img className={Style.images} src={item.image} alt="" />
                <figcaption>{item.title}</figcaption>
              </figure>
            </li>
        )
      })}</ul>
    </section>
  )

}
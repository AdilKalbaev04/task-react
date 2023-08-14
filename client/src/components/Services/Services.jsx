import { useGetServicesQuery } from "../../store/reducers/restoraunt.reducer";
import styles from "./Services.module.css";
import { NavLink } from "react-router-dom";

export const Services = () => {
  const { data, isLoading } = useGetServicesQuery();
  return (
    <div>
      {data && (
        <div className={styles.services_cont}>
          <div className={styles.under_cont}>
            <NavLink to={"/construction"}>
              <div>
                <img
                  src={data.data[0].images[0].url}
                  alt={data.data[0].title}
                />
              </div>
            </NavLink>
            <div>
              <span>{data.data[0].title}</span>
            </div>
          </div>
          <div className={styles.under_cont}>
            <NavLink to={"/budgeting"}>
              <div>
                <img src={data.data[1].images[0].url} at={data.data[1].title} />
              </div>
            </NavLink>
            <div>
              <span>{data.data[1].title}</span>
            </div>
          </div>
          <div className={styles.under_cont}>
            <NavLink to={"/album"}>
              <div>
                <img
                  src={data.data[2].images[0].url}
                  alt={data.data[2].title}
                />
              </div>
            </NavLink>
            <div>
              <span>{data.data[2].title}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

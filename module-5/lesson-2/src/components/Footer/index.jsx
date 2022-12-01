import "./style.scss";
import { context } from "../../context";
import { useContext } from "react";

const index = () => {
  const { lang, langs } = useContext(context);

  const t = lang[langs];

  return (
    <>
      <footer>
        <div className="container">
          <h5 className="text-center">{new Date().getFullYear()}</h5>
          <small>{t.copyright}</small>
        </div>
      </footer>
    </>
  );
};

export default index;

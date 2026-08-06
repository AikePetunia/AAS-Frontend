import "./MiniSearchbar.css";
import SearchBar from "../common/SearchBar/SearchBar";

export function MiniSearchbar() {
  const isPhone = window.innerWidth <= 768;
  return (
    <>
      <div className="fp__container">
        <h2
          className={
            isPhone ? "highlight-green center" : "" + `sm__title-w-line`
          }
          style={{ color: "white" }}
        >
          Probá buscar.
        </h2>
        <br />
        <br />
        <div className="fp__test-search">
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default MiniSearchbar;

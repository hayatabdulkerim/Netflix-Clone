import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
import { movies } from "../../Data/Data";

function DisplayRow() {
  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Movie suggestions" movies={movies} />
      <SlideShow title="Movie suggestions" movies={movies} />
      <SlideShow title="Movie suggestions" movies={movies} />
      <SlideShow title="Movie suggestions" movies={movies} />
    </div>
  );
}

export default DisplayRow;

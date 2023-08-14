import { Plus, PlusOrange } from "../../icons";
import styles from "./Main.module.css";
import { useState } from "react";

const Test = () => {
  const [plus, setPlus] = useState(false);
  const [plus2, setPlus2] = useState(false);
  const [plus3, setPlus3] = useState(false);
  const [plus4, setPlus4] = useState(false);
  const [plus5, setPlus5] = useState(false);
  return (
    <div className={styles.block_8}>
      <h3 className={styles.block_8_title}>Часто задаваемые вопросы</h3>
      <details className={styles.details}>
        <summary onClick={() => setPlus(!plus)} className={styles.summary}>
          {plus ? <PlusOrange /> : <Plus />}
          Вопрос
        </summary>
        <h3 className={styles.details__h3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
          nibh at ornare turpis sit lacus, in viverra volutpat. Id sed quam
          consectetur condimentum tellus pellentesque a, convallis metus. Hac
          dui sit cursus ac id aliquet. A convallis suspendisse in nulla risus,
          senectus vitae. Condimentum in aliquet egestas aliquam at eu. Id
          bibendum iaculis netus ipsum quis amet lectus nisi mattis. Sit
          porttitor a vulputate aliquam elementum, odio lacus.
        </h3>
      </details>
      <details className={styles.details}>
        <summary onClick={() => setPlus2(!plus2)} className={styles.summary}>
          {plus2 ? <PlusOrange /> : <Plus />}
          Вопрос
        </summary>
        <h3 className={styles.details__h3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
          nibh at ornare turpis sit lacus, in viverra volutpat. Id sed quam
          consectetur condimentum tellus pellentesque a, convallis metus. Hac
          dui sit cursus ac id aliquet. A convallis suspendisse in nulla risus,
          senectus vitae. Condimentum in aliquet egestas aliquam at eu. Id
          bibendum iaculis netus ipsum quis amet lectus nisi mattis. Sit
          porttitor a vulputate aliquam elementum, odio lacus.
        </h3>
      </details>
      <details className={styles.details}>
        <summary onClick={() => setPlus3(!plus3)} className={styles.summary}>
          {plus3 ? <PlusOrange /> : <Plus />}
          Вопрос
        </summary>
        <h3 className={styles.details__h3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
          nibh at ornare turpis sit lacus, in viverra volutpat. Id sed quam
          consectetur condimentum tellus pellentesque a, convallis metus. Hac
          dui sit cursus ac id aliquet. A convallis suspendisse in nulla risus,
          senectus vitae. Condimentum in aliquet egestas aliquam at eu. Id
          bibendum iaculis netus ipsum quis amet lectus nisi mattis. Sit
          porttitor a vulputate aliquam elementum, odio lacus.
        </h3>
      </details>
      <details className={styles.details}>
        <summary onClick={() => setPlus4(!plus4)} className={styles.summary}>
          {plus4 ? <PlusOrange /> : <Plus />}
          Вопрос
        </summary>
        <h3 className={styles.details__h3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
          nibh at ornare turpis sit lacus, in viverra volutpat. Id sed quam
          consectetur condimentum tellus pellentesque a, convallis metus. Hac
          dui sit cursus ac id aliquet. A convallis suspendisse in nulla risus,
          senectus vitae. Condimentum in aliquet egestas aliquam at eu. Id
          bibendum iaculis netus ipsum quis amet lectus nisi mattis. Sit
          porttitor a vulputate aliquam elementum, odio lacus.
        </h3>
      </details>
      <details className={styles.details}>
        <summary onClick={() => setPlus5(!plus5)} className={styles.summary}>
          {plus5 ? <PlusOrange /> : <Plus />}
          Вопрос
        </summary>
        <h3 className={styles.details__h3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
          nibh at ornare turpis sit lacus, in viverra volutpat. Id sed quam
          consectetur condimentum tellus pellentesque a, convallis metus. Hac
          dui sit cursus ac id aliquet. A convallis suspendisse in nulla risus,
          senectus vitae. Condimentum in aliquet egestas aliquam at eu. Id
          bibendum iaculis netus ipsum quis amet lectus nisi mattis. Sit
          porttitor a vulputate aliquam elementum, odio lacus.
        </h3>
      </details>
    </div>
  );
};

export default Test;

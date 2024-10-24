import { FaHandHoldingWater } from 'react-icons/fa';
import { FaFireBurner } from 'react-icons/fa6';
import {
  BsCupHot,
  BsDiagram3,
  BsDisplay,
  BsDroplet,
  BsFuelPump,
  BsGrid,
  BsGrid1X2,
  BsGrid3X3Gap,
  BsUiRadios,
  BsWind,
} from 'react-icons/bs';
import { TbFridge, TbMicrowave } from 'react-icons/tb';
import { CiGrid32 } from 'react-icons/ci';

import css from './Category.module.css';

const Category = ({ truckInfo }) => {
  const {
    transmission,
    engine,
    AC,
    kitchen,
    refrigerator,
    radio,
    bathroom,
    microwave,
    TV,
    gas,
    water,
    form,
  } = truckInfo;

  return (
    <ul className={css.categoryList}>
      <li className={css.category}>
        <BsDiagram3 className={css.iconCategory} />
        <p className={css.categoryText}>{transmission}</p>
      </li>
      <li className={css.category}>
        <BsFuelPump className={css.iconCategory} />
        <p className={css.categoryText}>{engine}</p>
      </li>
      {form === 'alcove' && (
        <li className={css.category}>
          <BsGrid3X3Gap className={css.iconCategory} />
          <p className={css.categoryText}>Alcove</p>
        </li>
      )}
      {form === 'fullyIntegrated' && (
        <li className={css.category}>
          <BsGrid className={css.iconCategory} />
          <p className={css.categoryText}>Fully Integrated</p>
        </li>
      )}
      {form === 'van' && (
        <li className={css.category}>
          <BsGrid1X2 className={css.iconCategory} />
          <p className={css.categoryText}>Van</p>
        </li>
      )}
      {form === 'panelTruck' && (
        <li className={css.category}>
          <CiGrid32 className={css.iconCategory} />
          <p className={css.categoryText}>Panel Truck</p>
        </li>
      )}

      {AC && (
        <li className={css.category}>
          <BsWind className={css.iconCategory} />
          <p className={css.categoryText}>AC</p>
        </li>
      )}
      {kitchen && (
        <li className={css.category}>
          <BsCupHot className={css.iconCategory} />
          <p className={css.categoryText}>Kitchen</p>
        </li>
      )}
      {refrigerator && (
        <li className={css.category}>
          <TbFridge className={css.iconCategory} />
          <p className={css.categoryText}>Refrigerator</p>
        </li>
      )}
      {radio && (
        <li className={css.category}>
          <BsUiRadios className={css.iconCategory} />
          <p className={css.categoryText}>Radio</p>
        </li>
      )}
      {bathroom && (
        <li className={css.category}>
          <BsDroplet className={css.iconCategory} />
          <p className={css.categoryText}>Bathroom</p>
        </li>
      )}
      {microwave && (
        <li className={css.category}>
          <TbMicrowave className={css.iconCategory} />
          <p className={css.categoryText}>Microwave</p>
        </li>
      )}
      {TV && (
        <li className={css.category}>
          <BsDisplay className={css.iconCategory} />
          <p className={css.categoryText}>TV</p>
        </li>
      )}
      {gas && (
        <li className={css.category}>
          <FaFireBurner className={css.iconCategory} />
          <p className={css.categoryText}>Gas</p>
        </li>
      )}
      {water && (
        <li className={css.category}>
          <FaHandHoldingWater className={css.iconCategory} />
          <p className={css.categoryText}>Water</p>
        </li>
      )}
    </ul>
  );
};

export default Category;

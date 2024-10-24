import { Field } from 'formik';
import {
  BsCupHot,
  BsDisplay,
  BsDroplet,
  BsUiRadios,
  BsWind,
} from 'react-icons/bs';
import { TbFridge, TbMicrowave } from 'react-icons/tb';
import { FaFireBurner } from 'react-icons/fa6';
import { FaHandHoldingWater } from 'react-icons/fa';

import css from './VehicleEquipment.module.css';

const equipmentOptions = [
  { key: 'AC', icon: <BsWind className={css.checkboxIcon} /> },
  { key: 'bathroom', icon: <BsDroplet className={css.checkboxIcon} /> },
  { key: 'kitchen', icon: <BsCupHot className={css.checkboxIcon} /> },
  { key: 'water', icon: <FaHandHoldingWater className={css.checkboxIcon} /> },
  { key: 'gas', icon: <FaFireBurner className={css.checkboxIcon} /> },
  { key: 'TV', icon: <BsDisplay className={css.checkboxIcon} /> },
  { key: 'radio', icon: <BsUiRadios className={css.checkboxIcon} /> },
  { key: 'refrigerator', icon: <TbFridge className={css.checkboxIcon} /> },
  { key: 'microwave', icon: <TbMicrowave className={css.checkboxIcon} /> },
];

const VehicleEquipment = () => {
  return (
    <>
      <p className={css.filterText}>Filters</p>
      <div className={css.equipmentContainer}>
        <h2 className={css.equipmentTitle}>Vehicle equipment</h2>
        <ul className={css.checkboxContainers}>
          {equipmentOptions.map(item => (
            <li key={item.key} className={css.customCheckboxWrapper}>
              <Field
                className={css.checkboxInput}
                type="checkbox"
                name={item.key}
                id={item.key}
              />
              <label htmlFor={item.key} className={css.customCheckboxContainer}>
                <div className={css.customCheckbox}>
                  {item.icon}
                  <span className={css.checkboxText}>{item.key}</span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default VehicleEquipment;

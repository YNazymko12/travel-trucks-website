import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';
import { useField, useFormikContext } from 'formik';

import css from './Calendar.module.css';

registerLocale('en-GB', enGB);

const Calendar = ({ name }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const error = meta.touched && meta.error;
  const currentDate = field.value ? new Date(field.value) : null;

  return (
    <div>
      <DatePicker
        className={css.reactDatepicker}
        placeholderText="Booking date*"
        dayClassName={date =>
          currentDate && date.toDateString() === currentDate.toDateString()
            ? css['selected_day']
            : css['non_selected_day']
        }
        {...field}
        selected={currentDate}
        minDate={new Date()}
        locale="en-GB"
        onChange={date => {
          setFieldValue(name, date);
        }}
      />
      {error && <div className={css.error}>{meta.error}</div>}
    </div>
  );
};

export default Calendar;

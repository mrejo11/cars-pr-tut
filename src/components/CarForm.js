
import { useDispatch,useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";
import { createSelector } from 'reselect';

function CarForm() {
  const dispatch = useDispatch();
  const selectFormData = createSelector(
    (state) => state.form.name,
    (state) => state.form.cost,
    (name, cost) => ({ name, cost }) // خروجی مموایز شده به صورت آبجکت
  );

  // استفاده از useSelector با selector مموایز شده
  const { name, cost } = useSelector(selectFormData);


  const handleChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    dispatch(changeCost(parseInt(e.target.value) || 0));
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addCar({name,cost}))
    //جون کی ولیو یکی هستند ما فقظ داریم...
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">لیست خرید را وارد کنید</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <label className="label">نام</label>
          <input
            className="input is-expanded"
            value={name}
            onChange={handleChange}
          ></input>
        </div>

        <div className="field-group">
          <label className="label">قیمت</label>
          <input
            className="input is-expanded"
            value={cost || ""}
            onChange={handleCostChange}
          ></input>
        </div>
        <div className="field">
            <button className="button is-link">وارد کردن</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;

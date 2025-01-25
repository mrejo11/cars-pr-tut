import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  //گرفتن استیت از ریداکس
  const { data, searchTerm } = useSelector((state) => state.cars);

  //ممورایز کردن ارایه فیلتر شده برای جلوگیری از ریرندر شدن غیر ضرور
  const cars = useMemo(() => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },[data,searchTerm]);

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // console.log(car)
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name}-ریال{car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          حذف
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderedCars} <hr />
    </div>
  );
}

export default CarList;

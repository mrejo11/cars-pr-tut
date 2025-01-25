import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      //برای بروز رسانی استیت داریم
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
        //assumption:
        //action.payload==={name:'ab' , cost:140}
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      //action.payload=== the id of car we wanto to remove
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data=updated
    },
  },
});

//سازنده هایی که برای ما اکشن میسازن رو اکسپورت کردم
export const { changeSearchTerm, addCar,removeCar } = carsSlice.actions;
//حالا کامباین ردوسر هرو هم اکسپورت میکنم
export const carsReducer = carsSlice.reducer;

//compined reducers means==>types====form/changeName>>>form/changeCost

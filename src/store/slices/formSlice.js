import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carSlice";
const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {//ندریت اکشن های محلی
    changeName(state, action) {
      //برای بروز رسانی استیت داریم
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {//مدریت اکشن های خارجی
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

//سازنده هایی که برای ما اکشن میسازن رو اکسپورت کردم
export const { changeName, changeCost } = formSlice.actions;
//حالا کامباین ردوسر هرو هم اکسپورت میکنم
export const formReducer = formSlice.reducer;

//compined reducers means==>types====form/changeName>>>form/changeCost


//ریدوسر ها چه کاری انجام میدهند

import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from "./actionTypes";

/*Objective Page Charts and Maps:
Build a simple dashboard with:
- A line graph showing the cases fluctuations
- A react leaflet map with markers that indicates the country name, total number
of active, recovered cases and deaths in that particular country as a popup.

Please use below APIs to fetch data and create dashboards.

World wide data of cases: https://disease.sh/v3/covid-19/all
Country Specific data of cases: https://disease.sh/v3/covid-19/countries
Graph data for cases with date:
https://disease.sh/v3/covid-19/historical/all?lastdays=all*/

export const addContact = (payload) => {
  console.log(payload);
  return {
    type: ADD_CONTACT,
    payload,
  };
};

export const removeContact = (id) => {
  return {
    type: REMOVE_CONTACT,
    payload: {
      id,
    },
  };
};
export const editContact = (payload) => {
  console.log(payload);
  return {
    type: EDIT_CONTACT,
    payload,
  };
};

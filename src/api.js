import axios from "axios";

export const getToken = async () => {
  const res = await axios({
    method: "post",
    url: "https://stage.api.sloovi.com/login",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      email: "spicebluetest2@gmail.com",
      password: "12345678",
    },
  });

  const data = await res.data;

  const token = data.results.token;

  return token;
};

// ADD TASK

export const addTask = async ({ token, description, date, time , user_id}) => {
  await axios({
    method: "POST",
    url:
      "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      assigned_user: user_id,
      task_date: date,
      task_time: time,
      is_completed: 0,
      time_zone: 19800,
      task_msg: description,
    },
  });
};

// UPDATE TASK

export const updateTask = async ({token, description, date, time, id , user_id}) => {


  await axios({
    method: "put",
    url: `https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/${id}`,
    headers: {
      Authorization: `Bearer ${token}` ,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      assigned_user: user_id,
      task_date: date,
      task_time: time,
      is_completed: 0,
      time_zone: 19800,
      task_msg: description,
    },
  });
};

// FETCH ALL TASKS

export const getTasks = async (token) => {
  let res = await axios({
    method: "GET",
    url:
      "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303",
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  let data = res.data;
  return data.results;
};

// GET USER

export const getUser = async (token) => {
  let res = await axios({
    method: "GET",
    url: "https://stage.api.sloovi.com/user",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  let data = res.data;

  return data.results;
};

// DELETE TASK

export const deleteTask = async ({token, id}) => {
  console.log("delete api ", token, id );
  await axios({
    method: "DELETE",
    url:
      `https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

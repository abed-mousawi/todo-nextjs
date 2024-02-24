const baseURL = "http://localhost:8000";
export const GET_DATA = async () => {
  const res = await fetch(`${baseURL}/Tasks`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};

export const ADD_DATA = async (data) => {
  const newData = { text: data };
  await fetch(`${baseURL}/Tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });
};

export const DELETE_DATA = async (id) => {
  await fetch(`${baseURL}/Tasks/${id}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return;
};

export const EDIT_DATA = async (data, id) => {
  await fetch(`${baseURL}/Tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return;
};

const api = '/api/v1/posts'; //with absolute path i had a CORS Error

export async function fetchAllPosts() {
  const response = await fetch(api);
  const posts = await response.json();
  return posts;
}

export async function sendAddPost(newData) {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  });
  const newId = await response.json();
  return newId;
}

export async function sendPostUpdate(id, dataToUpdate) {
  const uri = `${api}/${id}`;
  const response = await fetch(uri, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToUpdate),
  });
  const updated = await response.json();
  return updated; //true or false
}

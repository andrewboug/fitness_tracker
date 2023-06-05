const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/`;

export async function registerUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    console.log("Result from register user: ", result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMe(token) {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log("Result in fetchMe: ", result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    console.log("Result from logged in user: ", result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchActivies() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const postsList = await response.json();
    return postsList;
  } catch (error) {
    console.error(error);
  }
}

export async function createActivity(title, description, price, token) {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
        },
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

// export async function updatePost(token) {
//   try {
//     const response = await fetch(`${BASE_URL}/posts/${ROUTINE_ID}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         post: {
//           title,
//           description,
//           price,
//           location,
//           willDeliver,
//         },
//       }),
//     });
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (err) {
//     console.error(err);
//   }
// }

// export async function deletePost(token, POST_ID) {
//   try {
//     const response = await fetch(`${BASE_URL}/posts/${POST_ID}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function messagePost(content, token, postId) {
//   try {
//     const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         message: {
//           content,
//         },
//       }),
//     });
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }

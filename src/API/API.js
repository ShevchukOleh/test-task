// Function to handle errors in the fetch requests
import axios from "axios";

const handleErrors = (response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
};
  
export const login = async (userData) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

return handleErrors(response);
};
  
export const getPostsByUserId = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return handleErrors(response);
};
  
export const createPost = async (postData) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });
    return handleErrors(response);
};
  
// export const updatePost = async (postId, updatedData) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
//         method: 'PUT',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedData),
//     });
//     return handleErrors(response);
// };
  
// export const deletePost = async (postId) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
//         method: 'DELETE',
//     });
//     return handleErrors(response);
// };
  
//   // // Example usage
//   // const runExample = async () => {
//   //   try {
//   //     // Create a new user
//   //     const newUser = await createUser({
//   //       name: 'John Doe',
//   //       email: 'john.doe@example.com',
//   //     });
//   //     console.log('New user:', newUser);
  
//   //     // Get posts for the user with userId = 1
//   //     const userId = 1;
//   //     const userPosts = await getPostsByUserId(userId);
//   //     console.log('User posts:', userPosts);
  
//   //     // Create a new post
//   //     const newPost = await createPost({
//   //       userId: 1,
//   //       title: 'New Post Title',
//   //       body: 'This is the body of the new post.',
//   //     });
//   //     console.log('New post:', newPost);
  
//   //     // Update the newly created post
//   //     const postIdToUpdate = newPost.id;
//   //     const updatedPost = await updatePost(postIdToUpdate, {
//   //       title: 'Updated Post Title',
//   //       body: 'This is the updated body of the post.',
//   //     });
//   //     console.log('Updated post:', updatedPost);
  
//   //     // Delete the post
//   //     await deletePost(postIdToUpdate);
//   //     console.log('Post deleted successfully');
//   //   } catch (error) {
//   //     console.error('Error:', error.message);
//   //   }
//   // };
  
//   // // Run the example
//   // runExample();
  


export const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const methods = {
  get: async (endpoint) => {
    const response = await client.get(endpoint);
    return response.data;
  },
  post: async (endpoint, body) => {
    const response = await client.post(endpoint, body);
    return response.data;
  },
  delete: async (endpoint) => {
    return await client.delete(endpoint);
  },
};

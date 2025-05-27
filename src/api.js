export async function fetchAllPosts() {
  const uri = 'api/v1/posts'; //with absolute path i had a CORS Error
  const response = await fetch(uri);
  const posts = await response.json();
  console.log(posts);
  return posts;
}

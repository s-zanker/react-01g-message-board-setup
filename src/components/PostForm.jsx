import './PostForm.css';

export function PostForm({ addPost }) {
  function handleFormSubmit(event) {
    event.preventDefault(); //prevents the browser of sending an http request
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    console.log('PostForm.jsx - handleFormSubmit - form fields:');
    console.log(fields);
    addPost({
      ...fields,
      votes: 0,
    });
    event.target.reset();
  }
  return (
    <>
      <form className='PostForm' onSubmit={(e) => handleFormSubmit(e)}>
        <h2>Add a new post</h2>
        <label htmlFor='post-title'>Post Title:</label>
        <input id='post-title' name='title' />
        <label htmlFor='post-author'>Post Author:</label>
        <input id='post-author' name='author' type='text' />
        <label htmlFor='post-summary'>Post Summary:</label>
        <input id='post-summary' name='summary' type='text' />
        <label htmlFor='post-date'>Post Date:</label>
        <input id='post-date' name='date' type='date' />
        <button className='PostForm-add-button' type='submit'>
          Add Post
        </button>
      </form>
    </>
  );
}

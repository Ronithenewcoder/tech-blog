const newFormHandler = async (event) => {
    event.preventDefault();
console.log("hello")
    const title = document.querySelector('#project-name').value.trim();
    const body = document.querySelector('#project-desc').value.trim();
    const id = document.querySelector('#update-btn').dataset.id;
  
    if (title && body) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  };
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  

  
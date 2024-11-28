document.getElementById('solve-btn').addEventListener('click', function() {
    const input = document.getElementById('user-input').value;
    const answer = document.getElementById('answer');
  
    if (input.trim() === '') {
      answer.textContent = 'Please ask a problem!';
    } else {
      answer.textContent = `Here's a funny solution for "${input}": Go ask your mom!`;
    }
  });
  
function handleSubmit(e){
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.style.display = 'block';
  toast.textContent = 'Thank you for your message. We\'ll get back to you soon.';
  setTimeout(()=>{ toast.style.display='none'; }, 4200);
  e.target.reset();
  return false;
}
document.getElementById('year').textContent = new Date().getFullYear();

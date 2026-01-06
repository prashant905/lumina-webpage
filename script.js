function fakeSubmit(e){
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.style.display = 'block';
  toast.textContent = 'Message captured (demo). Wire this form to your backend when ready.';
  setTimeout(()=>{ toast.style.display='none'; }, 4200);
  e.target.reset();
  return false;
}
document.getElementById('year').textContent = new Date().getFullYear();

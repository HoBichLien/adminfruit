 const fadePopup = document.getElementById('fadePopup');
    const slidePopup = document.getElementById('slidePopup');
    const addBtn = document.getElementById('addBtn');
    const editBtns = document.querySelectorAll('.edit_pro');
    const uploadImg = document.getElementById('uploadImg');
    const imgPreview = document.getElementById('imgPreview');

    addBtn.onclick = () => fadePopup.classList.add('active');
    function closeFade() { fadePopup.classList.remove('active'); }

    editBtns.forEach(btn => btn.onclick = () => slidePopup.classList.add('active'));
    function closeSlide() { slidePopup.classList.remove('active'); }

    uploadImg?.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => imgPreview.innerHTML = `<img src="${ev.target.result}">`;
      reader.readAsDataURL(file);
    });

    fadePopup.addEventListener('click', e => { if(e.target===fadePopup) closeFade(); });
    slidePopup.addEventListener('click', e => { if(e.target===slidePopup) closeSlide(); });
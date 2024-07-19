// scripts.js
document.querySelectorAll('.faq__list__item__question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.classList.contains('open');
    
    // すべてのアコーディオン項目を閉じる
    document.querySelectorAll('.faq__list__item__answer').forEach(ans => {
      ans.classList.remove('open');
    });


    document.querySelectorAll('.faq__list__item__question').forEach(q => {
      q.classList.remove('open');
    });

    // クリックした項目を開く
    if (!isOpen) {
      answer.classList.add('open');
      question.classList.add('open');
    }
  });
});
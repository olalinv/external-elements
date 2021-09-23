const component = document.querySelector('post-detail');

const select = document.querySelector('#post-select');
select.addEventListener('change', onSelectPost);

function onSelectPost() {
  component.setAttribute('id', select.value);
}
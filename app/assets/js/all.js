$(document).ready(() => {
  console.log('HesSchool Hello!');
  var pathname = window.location.pathname.split('/')[1].split('.')[0];
  $(`#${pathname}`).addClass('active');
});
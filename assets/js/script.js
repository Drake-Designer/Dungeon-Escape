/* jshint esversion: 11 */

// -------------------------------------> Game difficulty selection

let saveDifficulty = Number(localStorage.getItem('gameDifficulty'));
if (![1, 2, 3].includes(saveDifficulty)) saveDifficulty = 1;
window.gameDifficulty = saveDifficulty;

function updateSelectedBtn() {
  for (let i = 1; i <= 3; i++) {
    document.getElementById('btn-difficulty-' + i).classList.remove('active');
  }
  document.getElementById('btn-difficulty-' + window.gameDifficulty).classList.add('active');
}
updateSelectedBtn();

for (let i = 1; i <= 3; i++) {
  document.getElementById('btn-difficulty-' + i).onclick = () => {
    localStorage.setItem('gameDifficulty', i);
    location.reload();
  };
}

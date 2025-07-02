/* jshint esversion: 11 */

// -------------------------------------> Game difficutly selection

let saveDifficutly = Number(localStorage.getItem('gameDifficulty'));
if (![1, 2, 3].includes(saveDifficutly)) saveDifficutly = 1;
window.gameDifficulty = saveDifficutly;

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

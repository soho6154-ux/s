const showLetterBtn = document.getElementById('showLetter');
const loveLetter = document.getElementById('loveLetter');
const flowersContainer = document.getElementById('flowers');

showLetterBtn.addEventListener('click', () => {
  loveLetter.classList.toggle('hidden');
  if (!loveLetter.classList.contains('hidden')) {
    launchFlowers();
  }
});

function launchFlowers() {
  for(let i = 0; i < 30; i++) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = (Math.random() * 3 + 2) + 's';
    flowersContainer.appendChild(flower);
    
    setTimeout(() => {
      flower.remove();
    }, 5000); // Remove after animation
  }
}

const ugisInput = document.getElementById('ugis-input');
const ugisValue = document.getElementById('ugis');

ugisInput.addEventListener('input', () => {
    ugisValue.textContent = ugisInput.value;
});
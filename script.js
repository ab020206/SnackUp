// Function to fetch recipes by mood
function getRecipesByMood(mood) {
    return recipes[mood] || [];
}

// Function to display recipes
function displayRecipes(mood) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    const selectedRecipes = getRecipesByMood(mood);
    if (selectedRecipes.length === 0) {
        recipeList.innerHTML = '<p>No recipes available for this mood. Try a different one!</p>';
        return;
    }

    selectedRecipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';
        recipeDiv.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Steps:</strong> ${recipe.steps}</p>
            <p><strong>Time:</strong> ${recipe.time}</p>
        `;
        recipeList.appendChild(recipeDiv);
    });
}

//  event listeners for each mood button
document.querySelectorAll('.mood-selection button').forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.id;
        displayRecipes(mood);
    });
});

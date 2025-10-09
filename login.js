const roleButtons = document.querySelectorAll('.role-btn');
const forms = document.querySelectorAll('.role-form');
const formTitle = document.getElementById('formTitle');
const formSubtext = document.getElementById('formSubtext');

roleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const role = button.getAttribute('data-role');

        // Hide all forms
        forms.forEach(form => form.classList.add('d-none'));

        // Show selected role form
        document.getElementById(`${role}Form`).classList.remove('d-none');

        // Update text
        formTitle.innerText = `Create ${capitalize(role)} Account`;
        formSubtext.innerText = `Join as a ${capitalize(role)} today!`;
    });
});

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
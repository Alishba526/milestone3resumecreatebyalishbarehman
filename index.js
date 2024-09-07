var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        education: document.getElementById('education').value,
        experience: document.getElementById('experience').value
    };
    updateResume(formData);
});
function updateResume(data) {
    document.getElementById('resumeName').innerText = data.name;
    document.getElementById('resumeEmail').innerText = data.email;
    document.getElementById('resumeEducation').innerText = data.education;
    document.getElementById('resumeExperience').innerText = data.experience;
}

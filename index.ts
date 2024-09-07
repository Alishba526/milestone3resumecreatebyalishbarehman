interface ResumeData {
    name: string;
    email: string;
    education: string;
    experience:string;
}

document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData: ResumeData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        education: (document.getElementById('education') as HTMLTextAreaElement).value,
        experience: (document.getElementById('experience') as HTMLTextAreaElement).value
    };

    updateResume(formData);
});

function updateResume(data: ResumeData) {
    (document.getElementById('resumeName') as HTMLSpanElement).innerText = data.name;
    (document.getElementById('resumeEmail') as HTMLSpanElement).innerText = data.email;
    (document.getElementById('resumeEducation') as HTMLParagraphElement).innerText= data.education;
    (document.getElementById('resumeExperience') as HTMLParagraphElement).innerText = data.experience;
}

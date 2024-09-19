let arts = [];

function addNewArt() {
    const photo = document.getElementById('art-photo').files[0];
    const size = document.getElementById('art-size').value;
    const description = document.getElementById('art-description').value;
    const priority = document.getElementById('art-priority').value;

    if (!size || !description || !priority) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const newArt = {
        id: uuid.v4(),
        photo: photo ? URL.createObjectURL(photo) : null,
        size: size,
        description: description,
        status: 'desenho',
        rejected: false,
        priority: priority,
        createdAt: new Date(),
        comments: [],
        designerVersion: null
    };

    arts.push(newArt);
    renderArts();
    clearForm();
}

function clearForm() {
    document.getElementById('art-photo').value = '';
    document.getElementById('art-size').value = '';
    document.getElementById('art-description').value = '';
    document.getElementById('art-priority').value = 'urgent';
}

// Funções auxiliares como moveArt, approveArt, etc. continuam aqui...

setInterval(renderArts, 60000); // Atualiza a cada minuto

renderArts();

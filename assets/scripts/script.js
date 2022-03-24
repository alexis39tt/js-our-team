function AddToPage(){
    const employees = [
        {
            'name': 'Wayne Barnett',
            'occupation': 'Founder & CEO',
            'photo': 'wayne-barnett-founder-ceo.jpg'
        },
        {
            'name': 'Angela Caroll',
            'occupation': 'Chief Editor',
            'photo': 'angela-caroll-chief-editor.jpg'
        },
        {
            'name': 'Walter Gordon',
            'occupation': 'Office Manager',
            'photo': 'walter-gordon-office-manager.jpg'
        },
        {
            'name': 'Angela Lopez',
            'occupation': 'Social Media Manager',
            'photo': 'angela-lopez-social-media-manager.jpg'
        },
        {
            'name': 'Scott Estrada',
            'occupation': 'Developer',
            'photo': 'scott-estrada-developer.jpg'
        },
        {
            'name': 'Barbara Ramos',
            'occupation': 'Graphic Designer',
            'photo': 'barbara-ramos-graphic-designer.jpg'
        }
    ];

    let container = document.getElementById("container");
    
    employees.forEach(employee => {
        container.innerHTML += `
        <div class="card">
            <div><img src="./assets/img/${employee.photo}"></div>
            <div class="text">
            <p class="name">${employee.name}</p>
            <p class="occupation">${employee.occupation}</p>
            </div>
        </div>`;
    });
}

AddToPage();
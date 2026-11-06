async function fetchUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        return users;

    } catch (error) {
        console.error('Error fetching data:', error);   
    }
}

async function ejercicio1() {
    const users = await fetchUsers();

    if (!users) return;

    // Mostrar el numero total de usuarios
    console.log("Numero total de usuarios:", users.length);

    //Usuario con mayor ID
    console.log("Usuario con mayor ID:", users.reduce((maxUser, user) => user.id > maxUser.id ? user : maxUser));

    //Nombre y email del usuario cuyo username sea "Samantha" o un mensaje si no existe.
    const userSama = users.find(user => user.username === "Samantha");
    if (userSama) {
        console.log("El nombre y el email del usuario con el username de Samthanta es:", userSama.name, userSama.email);
    } else {
        console.log("No existe un usuario con el username de Samantha");
    }
    
    //Numero usuarios cuyo ciudad contiene la letra "0"
    const userCiudad = users.filter(user => user.address.city.toLowerCase().includes("o")
    );
    console.log("Usuarios con una O en su ciudad:", userCiudad.length);

    //Empresa en la que trabaja "Bret"
    const userBret = users.find(user => user.username === "Bret");
    console.log("La empresa en donde trabaja Bret es:", userBret.company.name);
}

async function ejercicio2() {
    const users = await fetchUsers();

    if(!users) return;

    const arrayUsuarios = users.map(user => (
        {
            nombre: user.name,
            nombre_User: user.username,
            email: user.email,
            ciudad: user.address.city
        }
    ));
    
    arrayUsuarios.sort((a,b) =>
        a.nombre.localeCompare(b.nombre)
    );
    console.table(arrayUsuarios);
}

async function ejercicio3() {
    const users = await fetchUsers();

    if(!users) return;

    const userBuscar = prompt("Introduce un username:");

    const userEncontrao = users.find(user => user.username.toLowerCase() === userBuscar.trim().toLowerCase());

    if (userEncontrao) {

        console.log("Nombre:", userEncontrao.name);
        console.log("Email:", userEncontrao.email);
        console.log("Ciudad:", userEncontrao.address.city);
        console.log("Empresa:", userEncontrao.company.name);

        const newUser = 
        {
            nombre: userEncontrao.name,
            email: userEncontrao.email,
            ciudad: userEncontrao.address.city
        };
        console.log("Objeto nuevo:", newUser);

    } else {
        console.log("No encontrado");
    }
}

async function ejercicio4() {
    const users = await fetchUsers();

    if (!users) return;

    const text = prompt("Introduce un texto para buscar:");

    const textBuscao = text.trim().toLowerCase();

    const result = users.filter(user => user.name.toLowerCase().includes(textBuscao) || user.username.toLowerCase().includes(textBuscao) || user.address.city.toLowerCase().includes(textBuscao));

    if (result.length > 0) {
        result.forEach(user => {
            console.log("Nombre:", user.name);
            console.log("Usuario:", user.username);
            console.log("Email:", user.email);
            console.log("Ciudad:", user.address.city);
            console.log("----------------------");
        });
    } else {
        console.log("No se encontraron");
    }
}

//ejercicio1();
//ejercicio2();
//ejercicio3();
//ejercicio4();

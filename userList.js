const userList = document.getElementById("user-list");
const loadUsersButton = document.getElementById("load-users");

const createUser = (user) => {
  const { name, email, phone, website } = user;

  return `
        <div class="user">
            <img
                src="https://randomuser.me/api/portraits/men/69.jpg"
                height="50px"
                width="50px"
                alt="man"
            />
            <div class="info">
                <p>${name}</p>
                <p>${email}</p>
                <p>${phone}</p>
                <p>${website}</p>
            </div>
        </div>`;
};

const addUsers = async () => {
  const users = await getUsers();

  let usersHTML = "";

  users.forEach((user) => {
    const userHTML = createUser(user);
    usersHTML += userHTML;
  });

  userList.innerHTML = usersHTML;
};

const getUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(url);
    const users = await response.json();

    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
};

loadUsersButton.addEventListener("click", addUsers);

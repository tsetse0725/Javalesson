const bagatoonuudiinToo = (nums) => {
  const result = [];

  nums.forEach((numI, i) => {
    let count = 0;
    nums.forEach((numJ, j) => {
      if (i !== j && numJ < numI) {
        count++;
      }
    });
    result.push(count);
  });
  return result;
};

const nums1 = [8, 1, 2, 2, 3];
console.log(bagatoonuudiinToo(nums1));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const names = users.map((user) => user.name);
    console.log(names);
  })
  .catch((error) => console.error("Өгөгдөл татахад алдаа гарлаа:", error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const filteredUsers = users.filter((user) =>
      user.address.city.toLowerCase().includes("view")
    );
    console.log(filteredUsers);
  })
  .catch((error) => console.error("Өгөгдөл татахад алдаа гарлаа:", error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const nameEmailArray = users.map((user) => ({
      name: user.name,
      email: user.email,
    }));
    console.log(nameEmailArray);
  })
  .catch((error) => console.error("Өгөгдөл татахад алдаа гарлаа:", error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const sortedUsers = users.sort((a, b) => {
      return parseFloat(a.address.geo.lat) - parseFloat(b.address.geo.lat);
    });
    console.log(sortedUsers);
  })
  .catch((error) => console.error("Өгөгдөл татахад алдаа гарлаа:", error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const cityCounts = users.reduce((acc, user) => {
      const city = user.address.city;
      acc[city] = (acc[city] || 0) + 1;
      return acc;
    }, {});
    console.log(cityCounts);
  })
  .catch((error) => console.error("Өгөгдөл татахад алдаа гарлаа:", error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const companyNamesUpperCase = users.map((user) =>
      user.company.name.toUpperCase()
    );
    console.log(companyNamesUpperCase);
  })
  .catch((error) => console.error("Өгөгдөл татахад алдаа гарлаа:", error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const orgWebsites = users
      .filter((user) => user.website.endsWith(".org"))
      .map((user) => user.website);
    console.log(orgWebsites);
  })
  .catch((error) => console.error("Өгөгдөл татахад алдаа гарлаа:", error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const totalLat = users.reduce(
      (sum, user) => sum + parseFloat(user.address.geo.lat),
      0
    );
    const averageLat = totalLat * users.length;
    console.log(averageLat);
  })
  .catch((error) => console.error("Өгөгдөл татахад алдаа гарлаа:", error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const interfaceUsers = users
      .filter((user) =>
        user.company.catchPhrase.toLowerCase().includes("interface")
      )
      .map((user) => user.name);
    console.log(interfaceUsers);
  })
  .catch((error) => console.error("Өгөгдөл татахад алдаа гарлаа:", error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const groupedUsers = users.reduce((acc, user) => {
      const companyName = user.company.name;
      if (!acc[companyName]) {
        acc[companyName] = [];
      }
      acc[companyName].push(user);
      return acc;
    }, {});
    console.log(groupedUsers);
  })
  .catch((error) => console.error("Өгөгдөл татахад алдаа гарлаа:", error));

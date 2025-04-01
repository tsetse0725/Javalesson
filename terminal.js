const data = [
  { username: "Erdenebaatar Gankhuu", nickname: "Baatarscc", suggested: true },
  { username: "Erdenebaatar Gankhuu", nickname: "Baatarscc", suggested: false },
  { username: "Erdenebaatar Gankhuu", nickname: "Baatarscc", suggested: true },
  { username: "Erdenebaatar Gankhuu", nickname: "Baatarscc", suggested: false },
  { username: "Erdenebaatar Gankhuu", nickname: "Baatarscc", suggested: true },
  { username: "Erdenebaatar Gankhuu", nickname: "Baatarscc", suggested: false },
  { username: "Erdenebaatar Gankhuu", nickname: "Baatarscc", suggested: true },
];

const getSuggestedUsers = async () => {
  return new Promise((resolver) => {
    const suggestedUsers = data.filter((user) => user.suggested);
    resolve(suggestedUsers);
  });
};

const printSuggestedUsers = async () => {
  try {
    const suggestedUsers = await getSuggestedUsers();

    if (suggestedUsers.length > 0) {
      console.log("Санал болгосон хэрэглэгчид:");
      suggestedUsers.forEach((user) => {
        console.log(
          ` Хэрэглэгчийн нэр: ${user.username}, Хоч: ${user.nickname}`
        );
      });
    } else {
      console.log("Санал болгосон хэрэглэгч байхгү.");
    }
  } catch (error) {
    console.log("Алдаа гарлаа:", error);
  }
};

printSuggestedUsers;

const data2 = [
  {
    username: "Javkhlantugs Batmanlai",
    nickname: "Jvkhlntgs333",
    followedByNickName: "123",
  },
  {
    username: "Erdenebaatar Gankhuu",
    nickname: "Baatarscc",
    followedByNickName: "Jvk333",
  },
  {
    username: "Erdenebaatar Gankhuu",
    nickname: "Baatarscc",
    followedByNickName: "121",
  },
  {
    username: "Erdenebaatar Gankhuu",
    nickname: "Baatarscc",
    followedByNickName: "Jvk333",
  },
  {
    username: "Erdenebaatar Gankhuu",
    nickname: "Baatarscc",
    followedByNickName: "123",
  },
  {
    username: "Erdenebaatar Gankhuu",
    nickname: "Baatarscc",
    followedByNickName: "Jvk333",
  },
  {
    username: "Erdenebaatar Gankhuu",
    nickname: "Baatarscc",
    followedByNickName: "123",
  },
];

const getFollowedUsers = async (myNickname) => {
  return new Promise((resolve) => {
    const followedUsers = data2.filter(
      (user) =>
        user.nickname !== myNickname && user.followedByNickName === myNickname
    );
    resolve(followedUsers);
  });
};

const printFollowedUsers = async (myNickname) => {
  try {
    const followedUsers = await getFollowedUsers(myNickname);

    if (followedUsers.length > 0) {
      console.log("Таны дагадаг хүмүүс:");
      followedUsers.forEach((user) => {
        console.log(
          ` Хэрэглэгчийн нэр: ${user.username}, Хоч: ${user.nickname}`
        );
      });
    } else {
      console.log("Таныг дагадаг хүн байхгүй.");
    }
  } catch (error) {
    console.error("Алдаа гарлаа:", error);
  }
};

const myNickname = "Baatarscc";
printFollowedUsers(myNickname);

let data0 = [
  {
    username: "Javkhlantugs Batmanlai",
    nickname: "Jvkhlntgs333",
    followedByNickName: "123",
  },
  {
    username: "Erdenebaatar Gankhuu",
    nickname: "Baatarscc",
    followedByNickName: "Jvk333",
  },
  {
    username: "Erdenebaatar Gankhuu",
    nickname: "Baatarscc",
    followedByNickName: "121",
  },
  {
    username: "Erdenebaatar Gankhuu",
    nickname: "Baatarscc",
    followedByNickName: "Jvk333",
  },
  {
    username: "Erdenebaatar Gankhuu",
    nickname: "Baatarscc",
    followedByNickName: "123",
  },
  {
    username: "Erdenebaatar Gankhuu",
    nickname: "Baatarscc",
    followedByNickName: "Jvk333",
  },
  {
    username: "Erdenebaatar Gankhuu",
    nickname: "Baatarscc",
    followedByNickName: "123",
  },
];

const addFollower = async (newUser) => {
  return new Promise((resolve) => {
    data0 = [...data0, newUser];
    resolve(data0);
  });
};

const checkFollower = async (myNickname) => {
  return new Promise((resolve) => {
    const followedUsers = data0.filter(
      (user) =>
        user.nickname !== myNickname && user.followedByNickName === myNickname
    );
    resolve(followedUsers);
  });
};

const printFollowedUsers0 = async (myNickname) => {
  try {
    const followedUsers = await checkFollower(myNickname);

    if (followedUsers.length > 0) {
      console.log("Таны дагадаг хүмүүс:");
      followedUsers.forEach((user) => {
        console.log(
          `  Хэрэглэгчийн нэр: ${user.username}, Хоч: ${user.nickname}`
        );
      });
    } else {
      console.log("Таныг дагадаг хүн байхгүй.");
    }
  } catch (error) {
    console.error("Алдаа гарлаа:", error);
  }
};

const myNickname0 = "Baatarscc";
const newUser = {
  username: "Tsetsgee",
  nickname: "Tsetsgee123",
  followedByNickName: "Baatarscc",
};

(async () => {
  await addFollower(newUser);
  await printFollowedUsers(myNickname);
})();

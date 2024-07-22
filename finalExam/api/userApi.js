
export const getUser = async () => {
    let req = await fetch(`http://localhost:3000/user`);
    let res = await req.json();
    return res;
};

const isExist = async (email) => {
    let req = await fetch(`http://localhost:3000/user?email=${email}`);
    let res = await req.json();
    return res.length == 0;
};

export const creatUser = async (user) => {
    if (await isExist(user.email)) {
        alert("user already exists");
    } else {
        fetch("http://localhost:3000/user", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(user),
        });
    }
};

export const loginUser = async (user) => {
    let req = await fetch(`http://localhost:3000/user?email=${user.email}`);
    let res = await req.json();

    if (res.length == 0) {
        alert("user not found");
    } else {
        if (res[0].password == user.password) {
            alert("logged in");
        } else {
            alert("inccorect password");
        }
    }
};

export const upadteUser = async (id, data) => {
    let req = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
};

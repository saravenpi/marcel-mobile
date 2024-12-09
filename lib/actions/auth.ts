import PocketBase from "pocketbase";

const pb = new PocketBase("https://marcel.pockethost.io");

type LoginCredentials = {
  email: string;
  password: string;
};

type RegisterCredentials = {
  email: string;
  username: string;
  password: string;
};

export async function login({ email, password }: LoginCredentials) {
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    console.log(authData);
    return authData;
  } catch (error) {
    throw new Error("Invalid credentials");
  }
}

export async function register({
  email,
  username,
  password,
}: RegisterCredentials) {
  try {
    const user = await pb.collection("users").create({
      email,
      username,
      password,
      passwordConfirm: password,
    });
    return user;
  } catch (error) {
    throw new Error("Registration failed");
  }
}

export function logout() {
  pb.authStore.clear();
}

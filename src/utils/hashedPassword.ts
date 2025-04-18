import bcrypt from "bcrypt";

const generateHashedPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

export const compareHashedPassword = async (
  password: string,
  encriptedPassword: string
) => {
  return await bcrypt.compare(password, encriptedPassword);
};

export default generateHashedPassword;

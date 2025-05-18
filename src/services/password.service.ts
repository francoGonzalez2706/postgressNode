import bcrypt from "bcrypt";

const SALT_Rounds: number = 10;

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, SALT_Rounds);
};

export const comparePasswords = async (
  passWord: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(passWord, hash);
};

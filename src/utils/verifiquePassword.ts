const bcrypt = require("bcrypt");

const verifiquePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  if (!password || !hashedPassword) return false;
  return await bcrypt.compare(password, hashedPassword);
};

export default verifiquePassword;

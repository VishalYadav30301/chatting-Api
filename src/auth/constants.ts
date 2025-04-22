export const jwtConstants = {
  secret: `${process.env.CHATTING_JWTSECRET || 'default'}`,
  expiresIn: '3600s', 
};

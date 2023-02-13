import { User } from '@prisma/client';

export const sanitizeUser = (user: User) => {
  return {
    name: user.name,
    email: user.email,
    emailVerification: user.emailVerification,
    mfa: user.mfaEnabled,
  };
};

export const sanitizeError = (
  error: Error,
  value: string,
  location = 'body'
) => {
  return {
    success: false,
    errors: [
      {
        msg: error.message,
        location,
        value,
      },
    ],
  };
};

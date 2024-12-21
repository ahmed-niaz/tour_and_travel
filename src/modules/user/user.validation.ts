import { z } from 'zod';

const userValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Name must be provided and must be string ',
    })
    .min(3)
    .max(24),
  age: z
    .number({
      required_error: 'Age must be provided and must be number ',
    })
    .int()
    .positive(),
  email: z
    .string({
      required_error: 'Email must be provided and must be string ',
    })
    .email(),
  photo: z
    .string({
      required_error: 'Photo must be provided and must be string ',
    })
    .optional(),
  role: z.string({}),
});

export const UserValidation = {
  userValidationSchema,
};

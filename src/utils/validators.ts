import { ValidationChain, body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (const validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        break;
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return res.status(422).json({ errors: errors.array() });
  };
};

export const loginValidator = [
  body("email")
    .trim()
    .isEmail()
    .withMessage(
      "Yang anda masukan bukan Email, Tolong Masukkan Email yang benar!!!"
    ),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password Harus lebih dari 6 karakter"),
];

export const signupValidator = [
  body("name").notEmpty().withMessage("Nama Tidak Boleh Kosong"),
  ...loginValidator,
];

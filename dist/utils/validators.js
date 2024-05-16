import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
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
export const signupValidator = [
    body("name").notEmpty().withMessage("Nama Tidak Boleh Kosong"),
    body("email").trim().isEmail().withMessage("Yang anda masukan bukan Email, Tolong Masukkan Email yang benar!!!"),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password Harus lebih dari 6 karakter"),
];
//# sourceMappingURL=validators.js.map
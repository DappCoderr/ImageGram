export function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      console.log("Validation failed:", result.error.errors);
      return res
        .status(400)
        .json({ success: false, error: result.error.errors });
    }
    req.body = result.data;
    next();
  };
}

class CustomError {
  public get message(): string {
    return "error";
  }
}

throw new CustomError();

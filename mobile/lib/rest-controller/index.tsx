import AuthController from "./auth/auth-controller";
import UserController from "./user/user-controller";
export default class RestControllerInstance {
  private static _instance: RestControllerInstance;
  private _authController: AuthController;
  private _userController: UserController;
  private constructor() {
    this._authController = new AuthController();
    this._userController = new UserController();
  }

  public static get instance() {
    if (!this._instance) {
      this._instance = new RestControllerInstance();
    }
    return this._instance;
  }

  public static get authController() {
    return this.instance._authController;
  }

  public static get userController() {
    return this.instance._userController;
  }
}

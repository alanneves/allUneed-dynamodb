import { HttpResponse, HttpRequest } from '../protocols/http';
import { MissingParamError, InvalidParamError } from '../errors/index';
import { badRequest, internalServerError } from '../helpers/http-helper';
import { Controller, EmailValidator } from '../protocols';

export default class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];
      // eslint-disable-next-line no-restricted-syntax
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const isEmailValid = this.emailValidator.isValid(httpRequest.body.email);
      if (!isEmailValid) return badRequest(new InvalidParamError('email'));

      return badRequest(new MissingParamError('a'));
    } catch (error) {
      return internalServerError();
    }
  }
}

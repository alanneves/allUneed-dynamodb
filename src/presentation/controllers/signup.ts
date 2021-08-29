import { HttpResponse, HttpRequest } from '../protocols/http';
import MissingParamError from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';
import Controller from '../protocols/controller';

export default class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];

    let missingParam = '';
    requiredFields.forEach((field) => {
      if (!httpRequest.body[field]) {
        missingParam = field;
      }
    });

    return badRequest(new MissingParamError(missingParam)) || badRequest(new MissingParamError('a'));
  }
}

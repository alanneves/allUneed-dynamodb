import { HttpResponse, HttpRequest } from '../protocols/http';
import MissingParamError from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';

export default class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password'];

    let missingParam = '';
    requiredFields.forEach((field) => {
      if (!httpRequest.body[field]) {
        missingParam = field;
      }
    });

    return badRequest(new MissingParamError(missingParam)) || badRequest(new MissingParamError('a'));
  }
}

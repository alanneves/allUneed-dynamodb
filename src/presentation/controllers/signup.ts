import { HttpResponse, HttpRequest } from '../protocols/http';
import MissingParamError from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';

export default class SignUpController {
  handle(httpRequest: HttpRequest) :HttpResponse {
    const missingParameter = !httpRequest.body.name ? 'name' : 'email';
    return badRequest(new MissingParamError(missingParameter));
  }
}

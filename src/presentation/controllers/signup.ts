import { HttpResponse, HttpRequest } from '../protocols/http';

export default class SignUpController {
  handle(httpRequest: HttpRequest) :HttpResponse {
    const missingParameter = !httpRequest.body.name ? 'name' : 'email';
    return {
      statusCode: 400,
      body: new Error(`Missing Param: ${missingParameter}`),
    };
  }
}

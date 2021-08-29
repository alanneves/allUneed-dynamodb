export default class SignUpController {
  handle(httpRequest: any) :any {
    const missingParameter = !httpRequest.body.name ? 'name' : 'email';
    return {
      statusCode: 400,
      body: new Error(`Missing Param: ${missingParameter}`),
    };
  }
}

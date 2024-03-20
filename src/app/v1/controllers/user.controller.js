const { SuccessResponse } = require("../../../core/success.response");
const MailService = require("../services/mail.service");

class UserController {
    async login(req, res) {
        new SuccessResponse({
            metadata: await MailService.Send(req, req.body),
        }).send(res);
    }
}

module.exports = new UserController();

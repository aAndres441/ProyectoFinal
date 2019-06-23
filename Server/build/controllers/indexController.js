"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: ' la API Is /api/producto' });
    }
}
exports.indexController = new IndexController();

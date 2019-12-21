import Card from '../models/Card';

class CardController {
  async index(req, res) {
    const cards = await Card.findAll();

    return res.json(cards);
  }

  async show(req, res) {
    const card = await Card.findByPk(req.params.id);
    return res.json(card);
  }

  async store(req, res) {
    const { title, content } = req.body;

    const nextId = await Card.nextID();

    const card = await Card.create({
      id: nextId,
      title,
      content,
    });

    res.json(card);
  }

  async update(req, res) {
    const { title, content } = req.body;

    const { card } = req;

    card.title = title;
    card.content = content;

    card.save();

    res.json(card);
  }

  async delete(req, res) {
    const { card } = req;

    card.destroy();

    const cards = await Card.findAll();

    res.json(cards);
  }
}

export default new CardController();

import uuid


class ItemModel:
    def __init__(self, name, text):
        self._id = str(uuid.uuid4())
        self.name = name
        self.text = text

    def to_dict(self):
        return {
            "_id": self._id,
            "name": self.name,
            "text": self.text,
        }

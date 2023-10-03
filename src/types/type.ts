export enum CardType {
    TEXT = 1,
    IMAGE = 2,
    BOTH = 3,
};

export enum CardColor {
    BLUE = "#3498db",
    GREEN = "#2ecc71",
    YELLOW = "#f1c40f",
    RED = "#e74c3c",
    PURPLE = "#9b59b6",
    ORANGE = "#e67e22",
    TEAL = "#1abc9c",
    PINK = "#e91e63",
    LIGHT_GRAY = "#ecf0f1",
    DARK_GRAY = "#95a5a6",
  };

export enum DeckCategory {
    QNA = 'qna',
    INSTRUCTION = 'instruction',
    COLLECTION = 'collection',
    OTHER = 'other',
}

export interface FlashcardResponse {
    title: string;
    image?: string;
    description: string;
};

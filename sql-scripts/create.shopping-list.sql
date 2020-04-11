DROP TYPE IF EXISTS grocery;
CREATE TYPE grocery AS ENUM (
    'Main',
    'Snack',
    'Lunch',
    'Breakfast'
);

CREATE TABLE IF NOT EXISTS shopping_list (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price decimal(10, 2) NOT NULL,
    category grocery NOT NULL
    checked BOOLEAN DEFAULT false,
    dateadded TIMESTAMP DEFAULT now() NOT NULL,
);




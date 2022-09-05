BEGIN;
DROP TABLE IF EXISTS users, posts, likes, comments CASCADE;

CREATE TABLE "users"(
     id SERIAL PRIMARY KEY,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "about" TEXT NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "image" TEXT
);

CREATE TABLE "posts"(
    id SERIAL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "image" VARCHAR(255),
    "created_by" INTEGER NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT fk_user_id FOREIGN KEY (created_by) REFERENCES users(id)
);

CREATE TABLE "likes"(
    id SERIAL PRIMARY KEY,
    "post_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT fk_post_id FOREIGN KEY("post_id") REFERENCES "posts"("id"),
    CONSTRAINT fk_likes_user_id FOREIGN KEY("user_id") REFERENCES "users"("id")
);

CREATE TABLE "comments"(
    id SERIAL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "post_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "comment_id" INTEGER NOT NULL,
    CONSTRAINT fk_comments_post_id FOREIGN KEY("post_id") REFERENCES "posts"("id"),
    CONSTRAINT fk_comments_user_id FOREIGN KEY("user_id") REFERENCES "users"("id")
);

INSERT INTO users (username, password, email, about) values 
('test1', '$2b$10$PuF03nm0/cAlmut2KrCKbe0QMFoZmLVS3hLUGxM5yd1v9060AJ0Ne', 'test1@gmail.com', 'test'),
('test2', '$2b$10$eDuZGepJ4sbQtA0PlZH4nugOKOHN1fx0TrXtx5Lx6I.O3Qom.eN3K', 'test2@gmail.com' , 'test'),
('test3', '$2b$10$UCli9.UB4HudL/cNKyuWx.VxsZG.q4f7/DZnzzMtovK6/WXIjDXS2', 'test3@gmail.com', 'test'); 

INSERT INTO posts(content, image, created_by) values 
('13 years ago today, a true patriot lost his life. Rest in Peace big guy.'
,'https://i.redd.it/dx8cabvncnl91.jpg'
,'1'),

('13 years ago today, a true patriot lost his life. Rest in Peace big guy.'
,'https://i.redd.it/dx8cabvncnl91.jpg'
,'2'),

('13 years ago today, a true patriot lost his life. Rest in Peace big guy.'
,'https://i.redd.it/dx8cabvncnl91.jpg'
,'2'),

('13 years ago today, a true patriot lost his life. Rest in Peace big guy.'
,'https://i.redd.it/dx8cabvncnl91.jpg'
,'3'),

('13 years ago today, a true patriot lost his life. Rest in Peace big guy.'
,'https://i.redd.it/dx8cabvncnl91.jpg'
,'3'),

('13 years ago today, a true patriot lost his life. Rest in Peace big guy.'
,'https://i.redd.it/dx8cabvncnl91.jpg'
,'3');

COMMIT;
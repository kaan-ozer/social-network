import { Request, Response, NextFunction } from "express";

export const getPosts = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    title: "First Post",
    content: "This is the first post!",
  });
};

export const createPost = (req: Request, res: Response, next: NextFunction) => {
  const title: string = req.body.title;
  const content: string = req.body.content;

  //create in db

  res.status(201).json({
    message: "Post created successfully!",
    post: {
      id: new Date().toISOString(),
      title: title,
      content: content,
    },
  });
};

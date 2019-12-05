const express = require("express");
const route = express.Router();

const Blog = require("../models/blogs/blog_model");
const Blog_category = require("../models/blogs/blog_category_model");

//managing blogs

route.get("/", (req, res) => {
  Blog.find().then(blog => {
    res.send(blog);
  });
});

route.post("/new", (req, res) => {
  // console.log(req.body);
  let blog = new Blog({
    category_id: req.body.category,
    topic: req.body.topic,
    heading: req.body.heading,
    content: req.body.content
  });

  blog
    .save()
    .then(blog => {
      res.send(blog);
    })
    .catch(err => {
      res.send(err);
    });
});

route.post("/delete", (req, res) => {
  Blog.remove({ _id: req.body.id });
});

route.post("/edit", (req, res) => {
  Blog.update(
    { _id: req.body._id },
    {
      $set: {
        topic: req.body.topic,
        heading: req.body.heading,
        content: req.body.content
      }
    }
  )
    .then(result => {
      res.send({ result });
    })
    .catch(err => {
      res.send({ err });
    });
});

//managing categories

route.get("/blog-cat", (req, res) => {
  Blog_category.find()
    .sort({ name: 1 })
    .then(category => {
      res.send(category);
    });
});

route.post("/edit-cat", (req, res) => {
  Blog_category.update(
    { _id: req.body.id },
    {
      $set: {
        name: req.body.name
      }
    }
  )
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

route.post("/add-cat", (req, res) => {
  blog_cat = new Blog_category({
    name: req.body.cat_name
  });
  blog_cat
    .save()
    .then(cat => {
      res.send(cat);
    })
    .catch(err => {
      res.send(err);
    });
});

route.post("/del-cat", (req, res) => {
  Blog_category.deleteOne({ _id: req.body.id })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = route;

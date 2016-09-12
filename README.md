# Workshop

## Adding blog post comments & tags

----

## Work with a partner

* partials
* associations
* nested routes and resources
* Learn to utilize documentation
* Learn to write programs based on an algorithm

----

**Establish a basic CRUD blog app**

This blog app should be able to:

* Create a blog post at `/posts/new`
* Edit a blog post at `/posts/edit`
* Show a blog post at `/posts/:id`
* Delete a blog post on `/posts/:id`

What are the routes (contoller action, route, template)?

----

## Steps to launching this data-backed node app

1. Create a db connection (`db.js`)
2. Define your models (db tables)
  - Create data schema (`models/*.js`)
  - Aka, **data migrations**
3. Sync your models (`bin/www`)
  - `Model.sync()` creates any missing tables
4. Seed your database (with fixtures)  (`seed.js`)
5. Create routes (controllers) (`routes/posts.js`)
  - Controllers interact with:
    - Models
    - Views
6. Mount your routes (`app.js`: `app.use('/posts', posts)`)
7. Run your server (`$ node bin/www`)


----

## Routes

```
+---------------------------------------------------------------+
| controller action   |    route                | template      |
+---------------------------------------------------------------+
|  Create a blog post | GET    /posts/new       | new_post.ejs  |
|                     | POST   /posts           |               |
|  Edit a blog post   | GET    /posts/:id/edit  | edit_post.ejs |
|                     | POST   /posts/:id/edit  |               |
|  Show a blog post   | GET    /posts/:id       | post.ejs      |
|  Delete a blog post | DELETE /posts/:id       | post.ejs      |
+---------------------------------------------------------------+
```

----

## Partials for new and edit post 

---

### Create a blog post at `/posts/new`

Bare bones:

new_post.ejs

```html
<h1>New Post</h1>
<form action="/posts/new" method="post">
  <label>Title</label>
  <input type="text" name="title">
  <label>Description</label>
  <textarea name="description"></textarea>
</form>
```

---

### Edit a blog post at `/posts/edit`

Bare bones:

edit_post.ejs

```html
<h1>Edit Post</h1>
<form action="/posts/new" method="post">
  <label>Title</label>
  <input type="text" name="title">
  <label>Description</label>
  <textarea name="description"></textarea>
</form>
```

---

### Use a Blog Post Form Partial

Implement an EJS partial `post_form.ejs` for the blog post form, so that

in new_post.ejs

```html
<h1>New Post</h1>
<%= includes _post_form.ejs %>
```

in edit_post.ejs

```html
<h1>Edit Post</h1>
<%= includes _post_form.ejs %>
```

`_` underscore to indicate it's a partial

---

# End of Sunday Workshop (9/11/2016)

---

## Blog posts and comments

### What is the relationship between posts and comments?

---

## A blog post *has many* comments
## A comment *belongs to* a blog post

### One-to-Many

---

# Objective 

## Add, show, edit, and delete comments to a blog post

* What steps should we take to implement comments?

* Think MVC: What *routes* should we have?

---

# Comments routes

```
+-----------------------------------------------------------------------------------------+
| controller action           |    route                               | template         |
+-----------------------------------------------------------------------------------------+
|  Create a blog post comment | GET /posts/:post_id/comments/new       | new_comment.ejs  |
|                             | POST /posts/:post_id/comments          |                  |
|  Edit a blog post comment   | GET /posts/:post_id/comments/:id/edit  | edit_post.ejs    |
|                             | POST /posts/:post_id/comments/:id/edit |                  |
|  Show a blog post comment   | GET /posts/:id/comments/:id            | comment.ejs      |
|  Delete a blog post comment | DELETE /posts/:id/comments/:id         | comment.ejs      |
+-----------------------------------------------------------------------------------------+
```

- Deleting a blog post should delete its comments

----

### Tagging

- Create a many-to-many relationship between posts and tags
- Be able to create tags on a blog post
- Add search functionality for posts with a given tag
- Deleting a blog post should delete its comments *and* delete its tags

---

## Be able to create tags on a blog post
### What are the steps?

---

# Challenge

* Add a taggable input field to the edit blog post

See: http://sliptree.github.io/bootstrap-tokenfield/

Add Bootstrap, and use bootstrap-tokenfield.

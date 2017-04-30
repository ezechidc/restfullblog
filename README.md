A RESTFULL app built using NodeJs and Express

RESTFULL Routes

Name     Path              Http Verb    Purpose
index    /blogs            GET          List all blog post
New      /blogs/new       GET          Show new blog form
Create   /blogs            POST         Create a new blog 
Show     /blog/:id        GET          Show a specific blog 
Edit     /blog/:id/edit   GET          Show edit orm for a blog
Update   /blog/:id         PUT          Update a particular blog post
Destroy  /blog/:id        DELETE       Delete a particular blog post 
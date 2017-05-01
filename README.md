A RESTFULL app built using NodeJs and Express

RESTFULL Routes


|Name   |  Path           |  Http Verb |   Purpose                       | Mongoose Method|
|-------|-----------------|------------|:--------------------------------|:---------------
|index  | /blogs          |  GET       |   List all blog post            | blogs.find     |
|New    |  /blogs/new     |  GET       |   Show new blog form            | N/A|
|Create |  /blogs         |   POST     |    Create a new blog            | blogs.create()|
|Show   |  /blogs/:id     |  GET       |   Show a specific blog          | blogs.findById()|
|Edit   |  /blogs/:id/edit|  GET       |   Show edit orm for a blog      | blogs.findById()|
|Update |  /blogs/:id     |   PUT      |    Update a particular blog post| blogs.findByIdAndUpdate()|
|Destroy|  /blogs/:id     |  DELETE    |   Delete a particular blog post | blogs.findByIdAndRemove()|

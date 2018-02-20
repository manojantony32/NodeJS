CORS Configuration
To allow Cross Origin Request(Request from our Angular Frontend) add these lines beneath the Mongoose Connection code.
The reason is the Frontend Application will be on http://localhost:4200, which is different origin from http://localhost:3000. That’s why the CORS policy of Browsers blocks these kinds of request. We need to allow these kinds of requests from the Backend’s preflight response.

Architecture
The Database Connection is done. Before adding the model we need to clear up about the architecture of the Application. We are going to have several layers.
Data — This Layer is the MongoDB Models or Mongoose Models
Services — This layer is going to execute atomic CRUD operations on the models
Controller — This Layer is going to control the request body parsing, validating, checking , responding and Error returning actions.
API — This layer is a very simple mapping layer. Where specific api endpoints will be mapped to the Controller Functions.
Data Layer
Let’s add the Model.
Create a file /models/todo.model.js

We’ve made the necessary properties for the Schema and then create a Model from that Schema . We’ve used mongoose-paginate Package, so that in the future pagination would be much easier. The Data layer is done. The simplicity of mongoose is that awesome.
Service Layer
We need to create the services that will actually access the Mongoose Models. Let’s create Services Directory and todo.service.js file.
/services/todo.service.js

The Service layer is done for now. Next is Controller Layer.
Controller Layer
Make a new directory named /controllers and place todos.controller.js there
/controllers/todos.controller.js


CORS Configuration
To allow Cross Origin Request(Request from our Angular Frontend) add these lines beneath the Mongoose Connection code.
The reason is the Frontend Application will be on http://localhost:4200, which is different origin from http://localhost:3000. That’s why the CORS policy of Browsers blocks these kinds of request. We need to allow these kinds of requests from the Backend’s preflight response.

Architecture
The Database Connection is done. Before adding the model we need to clear up about the architecture of the Application. We are going to have several layers.
Data — This Layer is the MongoDB Models or Mongoose Models
Services — This layer is going to execute atomic CRUD operations on the models
Controller — This Layer is going to control the request body parsing, validating, checking , responding and Error returning actions.
API — This layer is a very simple mapping layer. Where specific api endpoints will be mapped to the Controller Functions.
Data Layer
Let’s add the Model.
Create a file /models/todo.model.js

We’ve made the necessary properties for the Schema and then create a Model from that Schema . We’ve used mongoose-paginate Package, so that in the future pagination would be much easier. The Data layer is done. The simplicity of mongoose is that awesome.
Service Layer
We need to create the services that will actually access the Mongoose Models. Let’s create Services Directory and todo.service.js file.
/services/todo.service.js

The Service layer is done for now. Next is Controller Layer.
Controller Layer
Make a new directory named /controllers and place todos.controller.js there
/controllers/todos.controller.js

CORS Configuration
To allow Cross Origin Request(Request from our Angular Frontend) add these lines beneath the Mongoose Connection code.
The reason is the Frontend Application will be on http://localhost:4200, which is different origin from http://localhost:3000. That’s why the CORS policy of Browsers blocks these kinds of request. We need to allow these kinds of requests from the Backend’s preflight response.

Architecture
The Database Connection is done. Before adding the model we need to clear up about the architecture of the Application. We are going to have several layers.
Data — This Layer is the MongoDB Models or Mongoose Models
Services — This layer is going to execute atomic CRUD operations on the models
Controller — This Layer is going to control the request body parsing, validating, checking , responding and Error returning actions.
API — This layer is a very simple mapping layer. Where specific api endpoints will be mapped to the Controller Functions.
Data Layer
Let’s add the Model.
Create a file /models/todo.model.js

We’ve made the necessary properties for the Schema and then create a Model from that Schema . We’ve used mongoose-paginate Package, so that in the future pagination would be much easier. The Data layer is done. The simplicity of mongoose is that awesome.
Service Layer
We need to create the services that will actually access the Mongoose Models. Let’s create Services Directory and todo.service.js file.
/services/todo.service.js

The Service layer is done for now. Next is Controller Layer.
Controller Layer
Make a new directory named /controllers and place todos.controller.js there
/controllers/todos.controller.js


CORS Configuration
To allow Cross Origin Request(Request from our Angular Frontend) add these lines beneath the Mongoose Connection code.
The reason is the Frontend Application will be on http://localhost:4200, which is different origin from http://localhost:3000. That’s why the CORS policy of Browsers blocks these kinds of request. We need to allow these kinds of requests from the Backend’s preflight response.

Architecture
The Database Connection is done. Before adding the model we need to clear up about the architecture of the Application. We are going to have several layers.
Data — This Layer is the MongoDB Models or Mongoose Models
Services — This layer is going to execute atomic CRUD operations on the models
Controller — This Layer is going to control the request body parsing, validating, checking , responding and Error returning actions.
API — This layer is a very simple mapping layer. Where specific api endpoints will be mapped to the Controller Functions.
Data Layer
Let’s add the Model.
Create a file /models/todo.model.js

We’ve made the necessary properties for the Schema and then create a Model from that Schema . We’ve used mongoose-paginate Package, so that in the future pagination would be much easier. The Data layer is done. The simplicity of mongoose is that awesome.
Service Layer
We need to create the services that will actually access the Mongoose Models. Let’s create Services Directory and todo.service.js file.
/services/todo.service.js

The Service layer is done for now. Next is Controller Layer.
Controller Layer
Make a new directory named /controllers and place todos.controller.js there
/controllers/todos.controller.js

CORS Configuration
To allow Cross Origin Request(Request from our Angular Frontend) add these lines beneath the Mongoose Connection code.
The reason is the Frontend Application will be on http://localhost:4200, which is different origin from http://localhost:3000. That’s why the CORS policy of Browsers blocks these kinds of request. We need to allow these kinds of requests from the Backend’s preflight response.

Architecture
The Database Connection is done. Before adding the model we need to clear up about the architecture of the Application. We are going to have several layers.
Data — This Layer is the MongoDB Models or Mongoose Models
Services — This layer is going to execute atomic CRUD operations on the models
Controller — This Layer is going to control the request body parsing, validating, checking , responding and Error returning actions.
API — This layer is a very simple mapping layer. Where specific api endpoints will be mapped to the Controller Functions.
Data Layer
Let’s add the Model.
Create a file /models/todo.model.js

We’ve made the necessary properties for the Schema and then create a Model from that Schema . We’ve used mongoose-paginate Package, so that in the future pagination would be much easier. The Data layer is done. The simplicity of mongoose is that awesome.
Service Layer
We need to create the services that will actually access the Mongoose Models. Let’s create Services Directory and todo.service.js file.
/services/todo.service.js

The Service layer is done for now. Next is Controller Layer.
Controller Layer
Make a new directory named /controllers and place todos.controller.js there
/controllers/todos.controller.js


CORS Configuration
To allow Cross Origin Request(Request from our Angular Frontend) add these lines beneath the Mongoose Connection code.
The reason is the Frontend Application will be on http://localhost:4200, which is different origin from http://localhost:3000. That’s why the CORS policy of Browsers blocks these kinds of request. We need to allow these kinds of requests from the Backend’s preflight response.

Architecture
The Database Connection is done. Before adding the model we need to clear up about the architecture of the Application. We are going to have several layers.
Data — This Layer is the MongoDB Models or Mongoose Models
Services — This layer is going to execute atomic CRUD operations on the models
Controller — This Layer is going to control the request body parsing, validating, checking , responding and Error returning actions.
API — This layer is a very simple mapping layer. Where specific api endpoints will be mapped to the Controller Functions.
Data Layer
Let’s add the Model.
Create a file /models/todo.model.js

We’ve made the necessary properties for the Schema and then create a Model from that Schema . We’ve used mongoose-paginate Package, so that in the future pagination would be much easier. The Data layer is done. The simplicity of mongoose is that awesome.
Service Layer
We need to create the services that will actually access the Mongoose Models. Let’s create Services Directory and todo.service.js file.
/services/todo.service.js

The Service layer is done for now. Next is Controller Layer.
Controller Layer
Make a new directory named /controllers and place todos.controller.js there
/controllers/todos.controller.js

CORS Configuration
To allow Cross Origin Request(Request from our Angular Frontend) add these lines beneath the Mongoose Connection code.
The reason is the Frontend Application will be on http://localhost:4200, which is different origin from http://localhost:3000. That’s why the CORS policy of Browsers blocks these kinds of request. We need to allow these kinds of requests from the Backend’s preflight response.

Architecture
The Database Connection is done. Before adding the model we need to clear up about the architecture of the Application. We are going to have several layers.
Data — This Layer is the MongoDB Models or Mongoose Models
Services — This layer is going to execute atomic CRUD operations on the models
Controller — This Layer is going to control the request body parsing, validating, checking , responding and Error returning actions.
API — This layer is a very simple mapping layer. Where specific api endpoints will be mapped to the Controller Functions.
Data Layer
Let’s add the Model.
Create a file /models/todo.model.js

We’ve made the necessary properties for the Schema and then create a Model from that Schema . We’ve used mongoose-paginate Package, so that in the future pagination would be much easier. The Data layer is done. The simplicity of mongoose is that awesome.
Service Layer
We need to create the services that will actually access the Mongoose Models. Let’s create Services Directory and todo.service.js file.
/services/todo.service.js

The Service layer is done for now. Next is Controller Layer.
Controller Layer
Make a new directory named /controllers and place todos.controller.js there
/controllers/todos.controller.js


CORS Configuration
To allow Cross Origin Request(Request from our Angular Frontend) add these lines beneath the Mongoose Connection code.
The reason is the Frontend Application will be on http://localhost:4200, which is different origin from http://localhost:3000. That’s why the CORS policy of Browsers blocks these kinds of request. We need to allow these kinds of requests from the Backend’s preflight response.

Architecture
The Database Connection is done. Before adding the model we need to clear up about the architecture of the Application. We are going to have several layers.
Data — This Layer is the MongoDB Models or Mongoose Models
Services — This layer is going to execute atomic CRUD operations on the models
Controller — This Layer is going to control the request body parsing, validating, checking , responding and Error returning actions.
API — This layer is a very simple mapping layer. Where specific api endpoints will be mapped to the Controller Functions.
Data Layer
Let’s add the Model.
Create a file /models/todo.model.js

We’ve made the necessary properties for the Schema and then create a Model from that Schema . We’ve used mongoose-paginate Package, so that in the future pagination would be much easier. The Data layer is done. The simplicity of mongoose is that awesome.
Service Layer
We need to create the services that will actually access the Mongoose Models. Let’s create Services Directory and todo.service.js file.
/services/todo.service.js

The Service layer is done for now. Next is Controller Layer.
Controller Layer
Make a new directory named /controllers and place todos.controller.js there
/controllers/todos.controller.js

CORS Configuration
To allow Cross Origin Request(Request from our Angular Frontend) add these lines beneath the Mongoose Connection code.
The reason is the Frontend Application will be on http://localhost:4200, which is different origin from http://localhost:3000. That’s why the CORS policy of Browsers blocks these kinds of request. We need to allow these kinds of requests from the Backend’s preflight response.

Architecture
The Database Connection is done. Before adding the model we need to clear up about the architecture of the Application. We are going to have several layers.
Data — This Layer is the MongoDB Models or Mongoose Models
Services — This layer is going to execute atomic CRUD operations on the models
Controller — This Layer is going to control the request body parsing, validating, checking , responding and Error returning actions.
API — This layer is a very simple mapping layer. Where specific api endpoints will be mapped to the Controller Functions.
Data Layer
Let’s add the Model.
Create a file /models/todo.model.js

We’ve made the necessary properties for the Schema and then create a Model from that Schema . We’ve used mongoose-paginate Package, so that in the future pagination would be much easier. The Data layer is done. The simplicity of mongoose is that awesome.
Service Layer
We need to create the services that will actually access the Mongoose Models. Let’s create Services Directory and todo.service.js file.
/services/todo.service.js

The Service layer is done for now. Next is Controller Layer.
Controller Layer
Make a new directory named /controllers and place todos.controller.js there
/controllers/todos.controller.js


CORS Configuration
To allow Cross Origin Request(Request from our Angular Frontend) add these lines beneath the Mongoose Connection code.
The reason is the Frontend Application will be on http://localhost:4200, which is different origin from http://localhost:3000. That’s why the CORS policy of Browsers blocks these kinds of request. We need to allow these kinds of requests from the Backend’s preflight response.

Architecture
The Database Connection is done. Before adding the model we need to clear up about the architecture of the Application. We are going to have several layers.
Data — This Layer is the MongoDB Models or Mongoose Models
Services — This layer is going to execute atomic CRUD operations on the models
Controller — This Layer is going to control the request body parsing, validating, checking , responding and Error returning actions.
API — This layer is a very simple mapping layer. Where specific api endpoints will be mapped to the Controller Functions.
Data Layer
Let’s add the Model.
Create a file /models/todo.model.js

We’ve made the necessary properties for the Schema and then create a Model from that Schema . We’ve used mongoose-paginate Package, so that in the future pagination would be much easier. The Data layer is done. The simplicity of mongoose is that awesome.
Service Layer
We need to create the services that will actually access the Mongoose Models. Let’s create Services Directory and todo.service.js file.
/services/todo.service.js

The Service layer is done for now. Next is Controller Layer.
Controller Layer
Make a new directory named /controllers and place todos.controller.js there
/controllers/todos.controller.js

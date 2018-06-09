"""
Sample app to test Pact contracts from the frontend Consumer.

https://github.com/pact-foundation/pact-python#verifying-pacts-against-a-service

To verify the contract:

1. Start up the server `FLASK_APP=app flask run`
2. In a separate terminal ```
    pact-verifier
        --provider-base-url=http://localhost:5000
        --pact-url=../pacts/todoapp-todoservice.json
        --provider-states-setup-url=http://localhost:5000/todos/
```

Notice the `provider-states-setup-url` which is used to set up states for the
provider, https://github.com/pact-foundation/pact-python#provider-states.
"""

from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/todos/', methods=('POST',))
def add_todo():
    """Catch all provider state endpoint"""
    return 'Created', 201


@app.route('/todos/<int:pk>')
def todo_detail(pk):
    """The actual endpoint used by the client"""
    return jsonify({
        'id': 1,
        'name': 'Learn Pact',
        'done': False
    })
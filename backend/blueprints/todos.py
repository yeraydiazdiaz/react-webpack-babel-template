"""
Blueprint implement the main request funcionality

"""

from flask import Blueprint, jsonify

todos = Blueprint('todos', __name__, url_prefix='/todos')


@todos.route('/<int:pk>')
def todo_detail(pk):
    """The actual endpoint used by the client"""
    return jsonify({
        'id': 1,
        'name': 'Learn Pact',
        'done': False
    })

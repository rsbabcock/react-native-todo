

const url = 'http://localhost:5000/api/v1/todos';

export function getTodos() {
    return fetch(url)
        .then(response => response.json())
        .then(todos => todos.todos.map(todo => ({
            id: todo.todoId.toString(),
            title: todo.title,
            description: todo.description
        })))
}

export function saveToDo(todo) {
    return fetch(`${url}/post`, {
        method: 'POST',
        body: JSON.stringify(todo),
        cache: 'no-cache',
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error));
}
export function deleteToDo(todo){
    return fetch(`${url}/${todo}`, {
        method: 'DELETE',
        cache: 'no-cache',
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error));
}


export function formatDate(dateString) {
    const parsed = moment(new Date(dateString));

    if (!parsed.isValid()) {
        return dateString;
    }

    return parsed.format('D MMM YYYY');
}


export function formatDateTime(dateString) {
    console.log(dateString);
    const parsed = moment(new Date(dateString));

    if (!parsed.isValid()) {
        return dateString;
    }

    return parsed.format('H A on D MMM YYYY');
}

export function getCountdownParts(eventDate) {
    const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()));
    return {
        days: parseInt(duration.as('days')),
        hours: duration.get('hours'),
        minutes: duration.get('minutes'),
        seconds: duration.get('seconds'),
    };
}
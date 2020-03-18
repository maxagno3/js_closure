// function `nonsense` that takes an input `string`

````js
function nonsense(string) {
    var blab = function () {
        alert(string);
    }
    blab();
}
````

// In function `nonsense`, change the immediate call to a setTimeout so that the call to `blab` comes after 2 seconds.
````js
function nonsense(string) {
    var blab = function () {
        alert(string);
    }
    setTimeout(blab, 2000);
}
````

// Return blab without invoking it.
````js
function nonsense(string) {
    var blab = function () {
        alert(string);
    }
    return blab;
}
var blabLater = nonsense('Hello');
var blabAgainLater = nonsense('GoodBye');
````

//Function with a closure.
var lastNameTrier = function (firstName) {
    var innerFunction = function (lastName) {
        console.log(`${firstName} ${lastName}`)
    };
    return innerFunction;
};

// StoryWriter
function storyWriter() {
    let obj = {
        story: '';

        addWords: function (words) {
            obj.story += words;
            return obj.story
        },
        erase: function () {
            obj.story = '';
            return obj.story
        }
    }
    return obj;
}
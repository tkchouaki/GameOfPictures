/**
 * Describes a message
 * @param source The sender of the message, can be 'player' or 'chatBot'
 * @param content The content
 * @constructor
 */
function Message(source, content)
{
    this.source = source;
    this.content = content;
}


const topics = [topic1, topic2, topic3, topic4];

var selectedTopicIndex = Math.floor(topics.length * Math.random());

console.log("selected topic " + (selectedTopicIndex + 1));

const johnTopic = topics[selectedTopicIndex];


johnBot = new BOT_makeBot("johnBot", "johnTopic");

BOT_theBotId = "johnBot";
BOT_theTopicId = "johnTopic";

var controller = function($scope)
{
    $scope.message = "";

    $scope.liteTalkChatBox = document.getElementById("litetalkchatbox");
    $scope.responseArea = document.getElementById("johnballoon");


    $scope.messages = [new Message("chatBot", "Hello, can you guess what picture am i thinking about ?")];


    $scope.playerMessage = function(message)
    {
        $scope.messages.push(new Message("player", message));
        $scope.liteTalkChatBox.value = "ask " + message;
        BOT_chatboxOnSend('litetalkchatbox');
        var response = $scope.responseArea.value;
        response = response.replace(/^[A-Z]+.*:/, "");
        $scope.messages.push(new Message("chatBot", response));
        $scope.message = "";
    };

};


var application = angular.module("application", []);

application.controller("controller", controller);